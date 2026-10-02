const savedItems = [
  { type: 'Article', title: 'Why your attention keeps getting fragmented' },
  { type: 'Video', title: '5 ways to make your mornings less chaotic' },
  { type: 'Note', title: 'Things I want to do differently' },
  { type: 'Photo', title: 'That walking route for the weekend' },
] as const;

export function RealLifeExample() {
  return (
    <section className="example-section" aria-labelledby="example-heading">
      <div className="section-inner">
        <h2 id="example-heading" className="display-headline display-headline-on-dark">
          Save anything worth coming back to.
        </h2>
        <p className="example-copy">Articles. Videos. Notes. Photos. Whatever catches your attention.</p>
        <div className="example-flow" aria-label="Example: four saves flow into Recaply and become one audio recap">
          <ul className="example-saves">
            {savedItems.map((item) => (
              <li key={item.type}>
                <span className="example-type">{item.type}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="example-connection">
            <span className="flow-arrow" aria-hidden="true">→</span>
            <span className="example-hub">Recaply</span>
            <span className="flow-arrow" aria-hidden="true">→</span>
          </div>
          <div className="example-recap">
            <span className="example-type">Your audio recap · Example</span>
            <h3>Ideas for a better week.</h3>
            <p>A little more focus. Time for yourself. The ideas worth making room for.</p>
            <div className="example-wave" aria-hidden="true">
              {[12, 22, 16, 30, 38, 24, 16, 32, 42, 26, 18, 34, 22, 14, 28, 36, 20, 12].map((height, i) => (
                <span key={i} style={{ height }} />
              ))}
            </div>
          </div>
        </div>
        <p className="example-copy">Different saves. Shared themes. Something useful to come back to.</p>
      </div>
    </section>
  );
}
