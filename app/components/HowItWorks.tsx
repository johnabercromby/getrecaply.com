const steps = [
  {
    n: '01',
    title: 'Start with what interests you',
    body: 'Articles. Videos. Notes. Photos. Save the things you want to come back to.',
  },
  {
    n: '02',
    title: 'Find the shared ideas',
    body: "Recaply finds themes and connections across what you’ve saved.",
  },
  {
    n: '03',
    title: 'Keep it personal',
    body: 'Your saves shape the recap, keeping it grounded in what caught your attention.',
  },
  {
    n: '04',
    title: 'Catch up by listening',
    body: 'Come back to those ideas in one audio recap, without opening each save in turn.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how-section" aria-labelledby="how-heading">
      <div className="section-inner">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2 id="how-heading" className="display-headline">
          Your saves, made into a personalised audio recap.
        </h2>
        <p className="how-intro">
          It brings together the themes across your saves, so you can catch up on the ideas in one personalised audio recap.
        </p>
        <ol className="how-grid">
          {steps.map((s) => (
            <li key={s.n} className="how-card">
              <span className="how-card-number">{s.n}</span>
              <h3 className="how-card-title">{s.title}</h3>
              <p className="how-card-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
