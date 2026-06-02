import { PhoneShell } from './PhoneShell';

export function WhyAudio() {
  return (
    <section id="why-audio" className="why-section" aria-labelledby="why-heading">
      <div className="section-inner why-inner">
        <div className="why-copy">
          <p className="eyebrow">WHY AUDIO</p>
          <h2 id="why-heading" className="display-headline">
            Reading takes a chair. <span className="headline-soft">Listening takes nothing.</span>
          </h2>
          <ul className="why-bullets">
            <li>Eyes-free: your attention can stay on the world in front of you.</li>
            <li>Emotion-forward: voice carries emphasis humans actually respond to.</li>
            <li>Friction-down: one tap to start. No switching apps, no losing your place.</li>
          </ul>
        </div>

        <div className="why-phone-visual" aria-label="Recap detail app screen">
          <PhoneShell className="phone-shell-app-shot">
            <img
              className="phone-screen-img"
              src="/images/apps/full/recap-detail.png"
              alt="Recap detail screen"
              width={1179}
              height={2406}
            />
          </PhoneShell>
        </div>
      </div>
    </section>
  );
}
