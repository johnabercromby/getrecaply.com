const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const ts = require('typescript');
const source = ts.transpileModule(fs.readFileSync('app/lib/analytics.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

function setup(host = 'www.getrecaply.com', blockedStorage = false) {
  const storage = new Map();
  const scripts = new Map();
  const deletedCookies = [];
  let reloads = 0;
  const document = {
    getElementById: id => scripts.get(id),
    createElement: () => ({ remove() { scripts.delete(this.id); } }),
    head: { appendChild(script) { scripts.set(script.id, script); } },
    get cookie() { return '_ga=example; _ga_TEST=example; essential=keep'; },
    set cookie(value) { deletedCookies.push(value); },
  };
  const window = { dispatchEvent() {} };
  const context = {
    exports: {}, window, document,
    location: { hostname: host, reload() { reloads++; } },
    localStorage: {
      getItem(key) { if (blockedStorage) throw Error('blocked'); return storage.get(key) || null; },
      setItem(key, value) { if (blockedStorage) throw Error('blocked'); storage.set(key, value); },
    }, Event: class { constructor(type) { this.type = type; } },
  };
  vm.runInNewContext(source, context);
  return { api: context.exports, window, storage, scripts, deletedCookies, reloads: () => reloads };
}

test('No Google script or click event before consent or after rejection', () => {
  const {api,scripts,window} = setup();
  api.loadAnalytics(); api.trackAppStoreClick('hero');
  assert.equal(scripts.size, 0); assert.equal(window.dataLayer, undefined);
  api.saveConsent('rejected'); api.loadAnalytics(); api.trackAppStoreClick('hero');
  assert.equal(scripts.size, 0); assert.equal(window.dataLayer, undefined);
});
test('Accept loads GTM once, with consent commands before GTM start and ads denied', () => {
  const {api,scripts,window} = setup();
  api.saveConsent('accepted'); api.loadAnalytics(); api.loadAnalytics();
  assert.equal(scripts.size, 1);
  assert.equal(scripts.get('recaply-gtm').src, 'https://www.googletagmanager.com/gtm.js?id=GTM-T7WPCF3S');
  const queue = window.dataLayer;
  assert.equal(queue[0][1], 'default'); assert.equal(queue[0][2].analytics_storage, 'denied');
  assert.equal(queue[2][1], 'update'); assert.equal(queue[2][2].analytics_storage, 'granted');
  for (const key of ['ad_storage','ad_user_data','ad_personalization']) assert.equal(queue[2][2][key], 'denied');
  assert.equal(queue[3].event, 'gtm.js');
  api.trackAppStoreClick('hero');
  assert.equal(queue.at(-1).event, 'app_store_click'); assert.equal(queue.at(-1).cta_placement, 'hero');
});
test('Reject after acceptance clears only analytics cookies and reloads to unload tags', () => {
  const t = setup(); t.api.saveConsent('accepted'); t.api.loadAnalytics(); t.api.saveConsent('rejected');
  assert.equal(t.api.getConsent(), 'rejected'); assert.equal(t.reloads(), 1);
  assert.ok(t.deletedCookies.some(c => c.includes('Domain=getrecaply.com')));
  assert.ok(t.deletedCookies.every(c => c.startsWith('_ga')));
  const count = t.window.dataLayer.length; t.api.trackAppStoreClick('cta');
  assert.equal(t.window.dataLayer.length, count);
});
test('Localhost and preview domains never collect analytics', () => {
  for (const host of ['localhost','127.0.0.1','preview.vercel.app']) {
    const t = setup(host); t.api.saveConsent('accepted'); t.api.loadAnalytics(); t.api.trackAppStoreClick('nav');
    assert.equal(t.scripts.size,0); assert.equal(t.window.dataLayer,undefined);
  }
});
test('Expired, malformed and missing preferences never enable analytics', () => {
  for (const value of ['{bad json}', JSON.stringify({choice:'accepted', expiresAt:1}), '{}', 'null']) {
    const t = setup(); t.storage.set(t.api.CONSENT_KEY,value); t.api.loadAnalytics();
    assert.equal(t.api.getConsent(),'unknown'); assert.equal(t.scripts.size,0);
  }
});
test('A saved choice expires after 90 days and reflects changes from another tab', () => {
  const t = setup(); const start = Date.now(); t.api.saveConsent('accepted');
  const saved = JSON.parse(t.storage.get(t.api.CONSENT_KEY));
  assert.ok(saved.expiresAt >= start + 90*86400000 && saved.expiresAt <= Date.now()+90*86400000);
  t.storage.set(t.api.CONSENT_KEY,JSON.stringify({...saved,choice:'rejected'}));
  assert.equal(t.api.getConsent(),'rejected');
});
test('Blocked storage fails closed initially and supports in-memory choices', () => {
  const t = setup('www.getrecaply.com',true); assert.equal(t.api.getConsent(),'unknown');
  t.api.saveConsent('accepted'); assert.equal(t.api.getConsent(),'accepted');
  t.api.saveConsent('rejected'); assert.equal(t.api.getConsent(),'rejected');
});
test('Corrupting a previously accepted stored preference fails closed', () => {
  const t=setup(); t.api.saveConsent('accepted'); t.storage.set(t.api.CONSENT_KEY,'broken');
  assert.equal(t.api.getConsent(),'unknown'); t.api.loadAnalytics(); assert.equal(t.scripts.size,0);
});
