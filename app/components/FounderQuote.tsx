export function FounderQuote() {
  return (
    <section className="founder-section" aria-labelledby="founder-quote">
      <div className="section-inner">
        <figure className="founder-card">
          <div className="founder-photo" role="img" aria-label="Portrait placeholder for John Abercromby" />
          <blockquote className="founder-quote" id="founder-quote">
            <p>
              We built Recaply because the best ideas shouldn&apos;t die in a folder you pretend you&apos;ll open on
              Sunday. If we can make &quot;saved&quot; mean &quot;heard&quot;, we&apos;ll have done something honest.
            </p>
          </blockquote>
          <figcaption className="founder-attrib">John Abercromby · Founder, Recaply · Berkhamsted, UK</figcaption>
        </figure>
      </div>
    </section>
  );
}
