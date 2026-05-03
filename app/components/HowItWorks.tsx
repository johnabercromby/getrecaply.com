import { PhoneShell } from './PhoneShell';

const steps = [
  {
    n: '01',
    title: 'Save in one breath',
    body: 'Drop links, notes, screenshots, and voice memos into Recaply from share sheets and quick capture.',
  },
  {
    n: '02',
    title: 'We stitch the thread',
    body: 'Your week becomes a narrative — not a list — so ideas connect even when you didn’t plan the connections.',
  },
  {
    n: '03',
    title: 'Listen on the move',
    body: 'A recap lands on the day you choose. Walking counts. Washing up counts. Closing loops counts.',
  },
] as const;

function StepMock({ step }: { step: (typeof steps)[number]['n'] }) {
  if (step === '01') {
    return (
      <div className="mock-ui mock-step mock-step-capture">
        <div className="mock-capture-bar">
          <span className="mock-capture-title">Quick capture</span>
          <span className="mock-capture-dot" />
        </div>
        <div className="mock-capture-chips">
          <span className="mock-capture-chip">Link</span>
          <span className="mock-capture-chip mock-capture-chip-accent">Voice</span>
          <span className="mock-capture-chip">Shot</span>
        </div>
        <div className="mock-capture-rows">
          <div className="mock-capture-row">
            <span className="mock-capture-thumb" />
            <span className="mock-capture-lines">
              <span className="mock-capture-line mock-capture-line-long" />
              <span className="mock-capture-line mock-capture-line-short" />
            </span>
          </div>
          <div className="mock-capture-row">
            <span className="mock-capture-thumb mock-capture-thumb-audio" />
            <span className="mock-capture-lines">
              <span className="mock-capture-line mock-capture-line-mid" />
              <span className="mock-capture-line mock-capture-line-short" />
            </span>
          </div>
          <div className="mock-capture-row">
            <span className="mock-capture-thumb" />
            <span className="mock-capture-lines">
              <span className="mock-capture-line mock-capture-line-mid" />
              <span className="mock-capture-line mock-capture-line-long" />
            </span>
          </div>
        </div>
        <div className="mock-capture-footer">
          <span className="mock-capture-save">Save to Recaply</span>
        </div>
      </div>
    );
  }
  if (step === '02') {
    return (
      <div className="mock-ui mock-step mock-step-thread">
        <div className="mock-thread-label">This week&apos;s thread</div>
        <div className="mock-thread-track">
          <div className="mock-thread-node mock-thread-node-1">
            <span className="mock-thread-card-title">Design refs</span>
            <span className="mock-thread-card-sub" />
          </div>
          <div className="mock-thread-node mock-thread-node-2">
            <span className="mock-thread-card-title">Podcast notes</span>
            <span className="mock-thread-card-sub mock-thread-card-sub-wide" />
          </div>
          <div className="mock-thread-node mock-thread-node-3">
            <span className="mock-thread-card-title">Narrative</span>
            <span className="mock-thread-weave">3 ideas → 1 story</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mock-ui mock-step mock-step-listen">
      <div className="mock-listen-pill">Friday recap</div>
      <div className="mock-listen-title">12 min · 6 sources</div>
      <div className="mock-listen-wave" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="mock-listen-bar" />
        ))}
      </div>
      <div className="mock-listen-card">
        <span className="mock-listen-play" />
        <div className="mock-listen-meta">
          <span className="mock-listen-meta-line" />
          <span className="mock-listen-meta-line mock-listen-meta-line-short" />
        </div>
      </div>
      <div className="mock-listen-foot">Walking mode · 1× speed</div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="how-section" aria-labelledby="how-heading">
      <div className="section-inner">
        <p className="eyebrow">I · HOW IT WORKS</p>
        <h2 id="how-heading" className="display-headline">
          Three moves. <span className="headline-soft">One habit.</span>
        </h2>
        <div className="how-grid">
          {steps.map((s) => (
            <article key={s.n} className="how-card">
              <div className="how-phone-wrap">
                <PhoneShell>
                  <StepMock step={s.n} />
                </PhoneShell>
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
