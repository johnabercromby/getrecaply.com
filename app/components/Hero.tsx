import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import { PhoneShell } from './PhoneShell';

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-app-pill">Now on the App Store</p>
          <h1 id="hero-heading" className="display-headline">
            Saved for later. Later is here.
          </h1>
          <p className="hero-lede">
            You save articles, videos, podcasts and ideas because they interest you. Recaply turns them into a
            personalised weekly audio recap so you can finally catch up with the things that caught your attention.
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
