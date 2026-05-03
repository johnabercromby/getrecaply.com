type CTAProps = {
  appStoreUrl: string;
};

export function CTA({ appStoreUrl }: CTAProps) {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-inner section-inner">
        <h2 id="cta-heading" className="display-headline display-headline-on-dark">
          Start closing your <em className="accent-gold">loops.</em>
        </h2>
        <a href={appStoreUrl} className="btn-app-store btn-app-store-cta" target="_blank" rel="noopener noreferrer">
          Download on the App Store
        </a>
        <p className="cta-note">Android · coming later this year</p>
      </div>
    </section>
  );
}
