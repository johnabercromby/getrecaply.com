const steps = [
  {
    n: '01',
    title: 'You save things',
    body: 'Articles, videos, podcasts, newsletters, screenshots, notes. Whatever catches your attention.',
  },
  {
    n: '02',
    title: 'We organise them',
    body: "Recaply reads, watches and groups everything you've saved.",
  },
  {
    n: '03',
    title: 'Get your recap',
    body: 'A personalised audio recap delivered on the day you choose.',
  },
  {
    n: '04',
    title: 'Listen when it suits you',
    body: 'On a walk. In the car. While cooking dinner. Whenever works for you.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how-section" aria-labelledby="how-heading">
      <div className="section-inner">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2 id="how-heading" className="display-headline">
          You save things. <span className="headline-soft">We help you come back to them.</span>
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
