import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import { PhoneShell } from './PhoneShell';

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-app-pill">Now on the App Store</p>
          <h1 id="hero-heading" className="display-headline">
            What if saving something actually meant learning it?
          </h1>
          <p className="hero-lede">
            Recaply listens to everything you stash away: links, notes, and screenshots. It turns that into a weekly
            briefing you can hear while you walk, cook, or commute. No extra chair. No guilt pile.
          </p>
          <p className="hero-lede-quote">
            The best ideas shouldn&apos;t die in a folder you&apos;ll open on Sunday.
          </p>
          <div className="hero-actions">
            <AppStoreBadgeLink variant="hero" />
            <a href="#how" className="text-link">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <PhoneShell className="hero-phone-frame">
            <img
              className="phone-screen-img phone-screen-img-cover"
              src="/images/apps/full/home.png"
              alt=""
              width={1179}
              height={2406}
            />
          </PhoneShell>
        </div>
      </div>
    </section>
  );
}
