const trustItems = [
  {
    title: 'Personal by design',
    body: 'Your saves stay yours.',
    icon: 'lock',
  },
  {
    title: 'AI that listens',
    body: 'Understands, organises and summarises.',
    icon: 'wave',
  },
  {
    title: 'Made for real life',
    body: 'Listen while you walk, commute or unwind.',
    icon: 'play',
  },
  {
    title: 'Indie-built',
    body: 'Made with care, shipped with restraint.',
    icon: 'heart',
  },
];

export function TrustBar() {
  return (
    <section className="trust-section" aria-label="Recaply principles">
      <div className="section-inner trust-grid">
        {trustItems.map((item) => (
          <div key={item.title} className="trust-item">
            <span className={`trust-icon trust-icon-${item.icon}`} aria-hidden />
            <div>
              <h2 className="trust-title">{item.title}</h2>
              <p className="trust-body">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
