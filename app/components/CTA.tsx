import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-inner section-inner">
        <h2 id="cta-heading" className="display-headline display-headline-on-dark">
          You saved it for a reason.
        </h2>
        <p className="cta-subheading">Catch up on what caught your attention. Make something of what you saved.</p>
        <AppStoreBadgeLink variant="cta" />
        <p className="cta-note">Free to download on iPhone · In-app purchases available</p>
        <p className="cta-note">Android is not publicly available yet. <Link href="/faq">Questions? Read the FAQ.</Link></p>
      </div>
    </section>
  );
}
