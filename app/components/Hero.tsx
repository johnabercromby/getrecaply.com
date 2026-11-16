import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-app-pill">Available on iPhone</p>
          <h1 id="hero-heading" className="display-headline">
            You saved it for a reason.
          </h1>
          <p className="hero-lede">
            Turn what you save into a weekly audio recap, so useful ideas don’t stay forgotten.
          </p>
          <p className="hero-support">
            Save links to articles or videos, notes and photos. Recaply brings the themes together so you can catch up while life carries on.
          </p>
          <div className="hero-actions">
            <AppStoreBadgeLink variant="hero" />
            <Link href="/how-it-works" className="text-link">See Save → Recap → Listen</Link>
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
