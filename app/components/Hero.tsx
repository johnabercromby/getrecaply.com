import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import Image from 'next/image';

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
            Turn the things you save into a personalised audio recap you’ll actually use.
          </p>
          <p className="hero-support">
            Articles. Videos. Notes. Photos. Turn the things you meant to come back to into something you can catch up on,
            even when you don’t have time to sit down and read.
          </p>
          <div className="hero-actions">
            <AppStoreBadgeLink variant="hero" />
            <a href="#how" className="text-link">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="hero-phone-mockup">
            <Image
              src="/images/apps/hero-phone.png"
              alt=""
              width={1000}
              height={2000}
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
