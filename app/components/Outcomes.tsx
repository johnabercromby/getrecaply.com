const cards = [
  {
    title: 'Synthesised, not bookmarked',
    body: 'Hear the through-line across what you saved, not a robotic read-aloud of each tab.',
  },
  {
    title: 'Built for between moments',
    body: 'Commutes, chores, and walks become the easiest “reading block” you never had to schedule.',
  },
  {
    title: 'A loop you can close',
    body: 'Finish episodes of curiosity instead of collecting homework for a future self who never arrives.',
  },
  {
    title: 'Indie-shaped product',
    body: 'Made with care, shipped with restraint, and designed to respect your attention, not harvest it.',
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="outcomes-section" aria-labelledby="outcomes-heading">
      <div className="section-inner">
        <p className="eyebrow">OUTCOMES</p>
        <h2 id="outcomes-heading" className="display-headline">
          Your saves, actually used.
        </h2>

        <div className="outcomes-grid">
          {cards.map((c) => (
            <article key={c.title} className="outcome-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
