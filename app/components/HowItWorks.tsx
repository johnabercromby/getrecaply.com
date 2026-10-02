const steps = [
  {
    n: '01',
    title: 'Reviewing your saves',
    body: 'It starts with what caught your attention: Articles. Videos. Notes. Photos.',
  },
  {
    n: '02',
    title: 'Connecting themes',
    body: "Recaply finds the themes and connections across what you've saved.",
  },
  {
    n: '03',
    title: 'Personalising to you',
    body: 'Your saves shape the story, bringing your interests and ideas together.',
  },
  {
    n: '04',
    title: 'Creating your audio recap',
    body: 'One coherent audio recap, ready for you to come back to.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how-section" aria-labelledby="how-heading">
      <div className="section-inner">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2 id="how-heading" className="display-headline">
          Recaply connects the dots.
        </h2>
        <p className="how-intro">
          It finds the useful connections across what you’ve saved and turns them into one coherent audio recap.
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
