import { PhoneShell } from './PhoneShell';

type HeroProps = {
  appStoreUrl: string;
};

export function Hero({ appStoreUrl }: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">I · THE HOOK</p>
          <h1 id="hero-heading" className="display-headline">
            What if saving something actually meant learning it?
          </h1>
          <p className="hero-lede">
            Recaply listens to everything you stash away — links, notes, screenshots — and turns it into a weekly
            briefing you can hear while you walk, cook, or commute. No extra chair. No guilt pile.
          </p>
          <div className="hero-actions">
            <a href={appStoreUrl} className="btn-app-store" target="_blank" rel="noopener noreferrer">
              Download on the App Store
            </a>
            <a href="#how" className="text-link">
              See how it works
            </a>
          </div>
          <div className="hero-stat" aria-label="Community stat">
            <span className="hero-stat-number">2,041,398</span>
            <span className="hero-stat-label">items saved this month</span>
          </div>
        </div>

        <div className="hero-phones" aria-hidden>
          <div className="hero-phone hero-phone-back">
            <PhoneShell>
              <div className="mock-ui mock-ui-queue">
                <div className="mock-row">
                  <span className="mock-dot" />
                  <span className="mock-line mock-line-short" />
                </div>
                <div className="mock-row">
                  <span className="mock-dot" />
                  <span className="mock-line mock-line-mid" />
                </div>
                <div className="mock-row">
                  <span className="mock-dot" />
                  <span className="mock-line mock-line-long" />
                </div>
                <div className="mock-card mock-card-navy">
                  <span className="mock-pill" />
                  <span className="mock-line mock-line-mid" />
                </div>
              </div>
            </PhoneShell>
          </div>
          <div className="hero-phone hero-phone-front">
            <PhoneShell>
              <div className="mock-ui mock-ui-home">
                <div className="mock-hero-pill">This week</div>
                <div className="mock-title">Your recap is ready</div>
                <div className="mock-sub">14 min · 9 sources</div>
                <div className="mock-wave">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="mock-bar" />
                  ))}
                </div>
                <div className="mock-play-row">
                  <span className="mock-play" />
                </div>
              </div>
            </PhoneShell>
          </div>
        </div>
      </div>
    </section>
  );
}
