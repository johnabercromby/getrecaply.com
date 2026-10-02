'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { getConsent, loadAnalytics, saveConsent, stopAnalytics, subscribeConsent } from '../lib/analytics';

export function PrivacyNotice() {
  const choice = useSyncExternalStore(subscribeConsent, getConsent, () => 'loading' as const);
  const [reopened, setReopened] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const visible = reopened || choice === 'unknown';

  useEffect(() => {
    if (choice === 'accepted') loadAnalytics();
    else if (choice !== 'loading') stopAnalytics();
  }, [choice]);

  function choose(value: 'accepted' | 'rejected') {
    saveConsent(value);
    setReopened(false);
  }

  function reopen() {
    setReopened(true);
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  }

  return (
    <>
      <button type="button" className="privacy-footer-link" onClick={reopen}>
        Privacy &amp; cookies
      </button>
      {visible && (
        <aside className="privacy-notice" aria-labelledby="privacy-notice-heading">
          <p className="privacy-kicker">Privacy &amp; cookies</p>
          <h2 id="privacy-notice-heading" ref={heading} tabIndex={-1}>A little insight. Your choice.</h2>
          <p>With your permission, we use Google Analytics to understand visits and App Store clicks. Optional analytics stays off unless you accept. No advertising tracking.</p>
          <div className="privacy-actions privacy-consent-actions">
            <button type="button" className="privacy-dismiss" onClick={() => choose('accepted')}>Accept analytics</button>
            <button type="button" className="privacy-dismiss" onClick={() => choose('rejected')}>Reject analytics</button>
          </div>
          <details className="privacy-details">
            <summary>What this website uses</summary>
            <p><strong>Essential preference:</strong> we store your accept or reject choice in your browser for 90 days. It contains no personal identifier. Change it anytime using “Privacy &amp; cookies” in the footer.</p>
            <p><strong>Optional analytics:</strong> accepting allows Google Tag Manager to load our Google Analytics tags. Google receives information about pages visited, referral sources, device/browser details and App Store clicks. Analytics cookies can recognise your browser across visits. Google processes this information under its privacy terms.</p>
            <p><strong>Other services:</strong> the App Store badge loads from Apple, and Vercel hosts this website. They receive normal request information such as your IP address. Site collaborators who opted into Vercel’s review toolbar may also have a toolbar preference cookie.</p>
            <p>Rejecting keeps Google Tag Manager unloaded. If you change from accept to reject, we clear accessible Google Analytics cookies and reload to stop already-loaded tags. This does not erase data already sent.</p>
            <p>This notice covers getrecaply.com. The app and other linked websites have their own privacy information.</p>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy<span className="privacy-sr-only"> (opens in a new tab)</span></a>
          </details>
          <div className="privacy-actions">
            <a href="https://recaply.app/privacy" target="_blank" rel="noopener noreferrer">Recaply privacy policy<span className="privacy-sr-only"> (opens in a new tab)</span></a>
            {reopened && choice !== 'unknown' && <button type="button" className="privacy-close" onClick={() => setReopened(false)}>Keep current choice</button>}
          </div>
          <p className="privacy-footnote">Your choice is remembered for 90 days. Both options let you use the site.</p>
        </aside>
      )}
    </>
  );
}
