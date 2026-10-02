import { AppStoreBadgeLink } from './AppStoreBadgeLink';

export function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-inner section-inner">
        <h2 id="cta-heading" className="display-headline display-headline-on-dark">
          You saved it for a reason.
        </h2>
        <p className="cta-subheading">Turn what you save into a personalised audio recap.</p>
        <AppStoreBadgeLink variant="cta" />
        <p className="cta-note">Android · coming later this year</p>
      </div>
    </section>
  );
}
