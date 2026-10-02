const cards = [
  {
    title: 'Finally get value from what you save',
    body: 'Come back to the ideas that caught your attention, and take something useful into your day.',
  },
  {
    title: 'Less digital guilt',
    body: 'Less “I’ll get to it later.” More moments where you actually do.',
  },
  {
    title: 'Stay curious',
    body: "Keep discovering interesting things without feeling like you're creating homework.",
  },
  {
    title: 'Keep up with your own interests',
    body: 'An audio recap shaped by what you save, so your own curiosity leads the way.',
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
