const cards = [
  {
    title: 'Take something useful into your day',
    body: 'An idea to try. A different perspective. Something worth remembering from what you saved.',
  },
  {
    title: 'Less digital guilt',
    body: 'Less “I’ll get to it later.” More moments where you actually do.',
  },
  {
    title: 'Stay curious, without the homework',
    body: "Keep discovering interesting things without turning every save into another task.",
  },
  {
    title: 'Make time for your interests',
    body: 'Catch up on the things that interest you while getting on with your day.',
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
