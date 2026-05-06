import { AppStoreBadgeLink } from './AppStoreBadgeLink';

export function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-inner section-inner">
        <h2 id="cta-heading" className="display-headline display-headline-on-dark">
          Start closing your <em className="accent-gold accent-cta">loops.</em>
        </h2>
        <AppStoreBadgeLink variant="cta" />
        <p className="cta-note">Android · coming later this year</p>
      </div>
    </section>
  );
}
