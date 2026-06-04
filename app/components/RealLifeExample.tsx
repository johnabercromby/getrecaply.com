const savedItems = [
  'A podcast about investing',
  'An article on ADHD',
  'A YouTube video about sourdough',
  'A newsletter about AI',
  "A note about a holiday you'd like to book",
] as const;

export function RealLifeExample() {
  return (
    <section className="example-section" aria-labelledby="example-heading">
      <div className="section-inner">
        <h2 id="example-heading" className="display-headline display-headline-on-dark">
          A typical week might look like this.
        </h2>
        <div className="example-copy">
          <p>This week you save:</p>
          <ul className="example-list">
            {savedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            You don't need to find time to go back to all of them individually. Recaply brings them together into a
            single audio recap you can listen to whenever it suits you.
          </p>
        </div>
      </div>
    </section>
  );
}
