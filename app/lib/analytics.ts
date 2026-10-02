export const GTM_ID = 'GTM-T7WPCF3S';
export const CONSENT_KEY = 'recaply:analytics-consent:v1';
export const CONSENT_EVENT = 'recaply:analytics-consent-change';
export const CONSENT_LIFETIME = 90 * 24 * 60 * 60 * 1000;
export type ConsentChoice = 'accepted' | 'rejected' | 'unknown';

type StoredConsent = { choice: 'accepted' | 'rejected'; expiresAt: number };
let memoryConsent: StoredConsent | null = null;

// Keep Google types local to avoid claiming that GTM is always loaded.
function analyticsWindow() {
  return window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
}

export function getConsent(): ConsentChoice {
  if (typeof window === 'undefined') return 'unknown';
  let record: StoredConsent | null = memoryConsent;
  let raw: string | null;
  try {
    raw = localStorage.getItem(CONSENT_KEY);
  } catch {
    // Storage restrictions must never break the page or grant consent.
    raw = JSON.stringify(memoryConsent);
  }
  try { record = raw ? JSON.parse(raw) : null; } catch { return 'unknown'; }
  if (!record || !Number.isFinite(record.expiresAt) || record.expiresAt <= Date.now()) return 'unknown';
  return record.choice === 'accepted' || record.choice === 'rejected' ? record.choice : 'unknown';
}

export function subscribeConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener('storage', callback);
  window.addEventListener('focus', callback);
  const timer = window.setInterval(callback, 60_000);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener('storage', callback);
    window.removeEventListener('focus', callback);
    window.clearInterval(timer);
  };
}

export function clearAnalyticsCookies() {
  const names = document.cookie.split(';').map(cookie => cookie.split('=')[0].trim())
    .filter(name => /^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name));
  const hostParts = location.hostname.split('.');
  const domains = ['', ...hostParts.map((_, i) => hostParts.slice(i).join('.'))];
  for (const name of names) {
    for (const domain of domains) {
      const suffix = domain ? `; Domain=${domain}` : '';
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${suffix}`;
    }
  }
}

export function stopAnalytics() {
  if (!document.getElementById('recaply-gtm')) return;
  analyticsWindow().gtag?.('consent', 'update', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
  });
  clearAnalyticsCookies();
  // Removing a script cannot undo listeners installed by GTM. A fresh page
  // guarantees that previously loaded tags stop and respects the saved choice.
  location.reload();
}

export function saveConsent(choice: 'accepted' | 'rejected') {
  memoryConsent = { choice, expiresAt: Date.now() + CONSENT_LIFETIME };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(memoryConsent));
  } catch {
    // This page still honours the choice; a new visit will ask again.
  }
  if (choice === 'rejected') clearAnalyticsCookies();
  window.dispatchEvent(new Event(CONSENT_EVENT));
  if (choice === 'rejected') stopAnalytics();
}

export function loadAnalytics() {
  if (getConsent() !== 'accepted' || document.getElementById('recaply-gtm')) return;
  // Local and preview visits must not pollute the launch reports.
  if (!['getrecaply.com', 'www.getrecaply.com'].includes(location.hostname)) return;
  const w = analyticsWindow();
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // Google's command protocol uses an arguments object, not an event object.
    w.dataLayer!.push(arguments);
  };
  w.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
  });
  w.gtag('set', 'ads_data_redaction', true);
  w.gtag('consent', 'update', {
    analytics_storage: 'granted', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
  });
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.id = 'recaply-gtm';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  script.onerror = () => script.remove();
  document.head.appendChild(script);
}

export function trackAppStoreClick(placement: 'nav' | 'hero' | 'cta') {
  if (getConsent() !== 'accepted') return;
  loadAnalytics();
  if (!document.getElementById('recaply-gtm')) return;
  analyticsWindow().dataLayer?.push({
    event: 'app_store_click',
    cta_placement: placement,
    link_url: 'https://apps.apple.com/app/recaply/id6757158392',
  });
}
