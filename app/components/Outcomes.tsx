const cards = [
  {
    title: 'Finally get value from what you save',
    body: 'The things you save are usually things you care about. Recaply helps you come back to them.',
  },
  {
    title: 'Less digital guilt',
    body: 'No more collecting articles for a future version of yourself.',
  },
  {
    title: 'Stay curious',
    body: "Keep discovering interesting things without feeling like you're creating homework.",
  },
  {
    title: 'Keep up with your own interests',
    body: 'Because the things that caught your attention in the first place are worth revisiting.',
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
