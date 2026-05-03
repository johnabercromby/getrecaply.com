export function WhyAudio() {
  return (
    <section id="why-audio" className="why-section" aria-labelledby="why-heading">
      <div className="section-inner why-inner">
        <div className="why-copy">
          <p className="eyebrow">I · WHY AUDIO</p>
          <h2 id="why-heading" className="display-headline">
            Reading takes a chair. <span className="headline-soft">Listening takes nothing.</span>
          </h2>
          <ul className="why-bullets">
            <li>Eyes-free: your attention can stay on the world in front of you.</li>
            <li>Emotion-forward: voice carries emphasis humans actually respond to.</li>
            <li>Friction-down: one tap to start — no tabs, no queues, no “later”.</li>
          </ul>
        </div>

        <div className="why-player" aria-label="Illustration of recap player">
          <div className="why-player-top">
            <span className="why-player-label">Now playing</span>
            <span className="why-player-title">Your week, synthesised</span>
          </div>
          <div className="why-player-wave" aria-hidden>
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="why-bar" />
            ))}
          </div>
          <div className="why-player-controls">
            <span className="why-dot" />
            <span className="why-play" />
            <span className="why-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
