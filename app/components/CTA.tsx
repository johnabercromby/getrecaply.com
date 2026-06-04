import { AppStoreBadgeLink } from './AppStoreBadgeLink';

export function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-inner section-inner">
        <h2 id="cta-heading" className="display-headline display-headline-on-dark">
          Saved for later. Later is here.
        </h2>
        <p className="cta-subheading">A simple way to keep up with the things that interested you.</p>
        <AppStoreBadgeLink variant="cta" />
        <p className="cta-note">Android · coming later this year</p>
      </div>
    </section>
  );
}
