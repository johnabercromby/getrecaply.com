import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import { PhoneShell } from './PhoneShell';
import { AppScreenshot } from './AppScreenshot';

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-app-pill">Now on the App Store</p>
          <h1 id="hero-heading" className="display-headline">
            You saved it for a reason.
          </h1>
          <p className="hero-lede">
            Turn what you save into a personalised audio recap.
          </p>
          <p className="hero-support">
            Articles. Videos. Notes. Photos. Recaply connects the themes and ideas across what you save,
            so you can actually come back to them.
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
            <AppScreenshot screen="home" />
          </PhoneShell>
        </div>
      </div>
    </section>
  );
}
