const steps = [
  {
    n: '01',
    title: 'Save in one breath',
    body: 'Drop links, notes, screenshots, and voice memos into Recaply from share sheets and quick capture.',
    image: {
      src: '/images/apps/snippets/quick-add.png',
      alt: 'Quick Add grid showing Link, Note, and Photo options',
      width: 1100,
      height: 330,
    },
  },
  {
    n: '02',
    title: 'We stitch the thread',
    body: 'Your week becomes a narrative, not a list, so ideas connect even when you didn’t plan the connections.',
    image: {
      src: '/images/apps/snippets/included-links.png',
      alt: 'Included links from a recap',
      width: 1120,
      height: 690,
    },
  },
  {
    n: '03',
    title: 'Listen on the move',
    body: 'A recap lands on the day you choose. Walking counts. Washing up counts. Closing loops counts.',
    image: {
      src: '/images/apps/snippets/recap-card.png',
      alt: 'Recap player card',
      width: 1069,
      height: 810,
    },
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how-section" aria-labelledby="how-heading">
      <div className="section-inner">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2 id="how-heading" className="display-headline">
          Three moves. <span className="headline-soft">One habit.</span>
        </h2>
        <div className="how-grid">
          {steps.map((s) => (
            <article key={s.n} className="how-card">
              <div className="how-image-wrap">
                <img className="how-step-img" src={s.image.src} alt={s.image.alt} width={s.image.width} height={s.image.height} />
              </div>
              <h3 className="how-card-title">{s.title}</h3>
              <p className="how-card-body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
