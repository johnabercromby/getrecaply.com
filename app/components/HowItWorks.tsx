const steps = [
  {
    n: '01',
    title: 'Save anything',
    body: 'Drop links, notes, screenshots, and voice memos into Recaply from share sheets and quick capture.',
  },
  {
    n: '02',
    title: 'We synthesise',
    body: 'Your week becomes a narrative, not a list, so ideas connect even when you didn’t plan the connections.',
  },
  {
    n: '03',
    title: 'You get a recap',
    body: 'A recap lands on the day you choose, long enough to close loops and short enough to fit between everything else.',
  },
  {
    n: '04',
    title: 'Listen anywhere',
    body: 'Walking counts. Washing up counts. Closing loops counts.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how-section" aria-labelledby="how-heading">
      <div className="section-inner">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2 id="how-heading" className="display-headline">
          Four moves. <span className="headline-soft">One habit.</span>
        </h2>
        <div className="how-grid">
          {steps.map((s) => (
            <article key={s.n} className="how-card">
              <span className="how-card-number">{s.n}</span>
              <h3 className="how-card-title">{s.title}</h3>
              <p className="how-card-body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
