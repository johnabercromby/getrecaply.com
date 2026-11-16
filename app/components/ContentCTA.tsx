import { AppStoreBadgeLink } from './AppStoreBadgeLink';

export function ContentCTA() {
  return (
    <section className="content-cta" aria-labelledby="content-cta-heading">
      <h2 id="content-cta-heading">Ready to use what you save?</h2>
      <p>Recaply is available for iPhone. Start with the things you want to come back to.</p>
      <AppStoreBadgeLink variant="cta" />
    </section>
  );
}
