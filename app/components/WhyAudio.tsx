import { PhoneShell } from './PhoneShell';

export function WhyAudio() {
  return (
    <section id="why-audio" className="why-section" aria-labelledby="why-heading">
      <div className="section-inner why-inner">
        <div className="why-copy">
          <p className="eyebrow">WHY AUDIO</p>
          <h2 id="why-heading" className="display-headline">
            You'll never find the time to sit and read it.
          </h2>
          <div className="why-body">
            <p>Listening fits into your life.</p>
            <p>Reading needs you to stop everything. Listening needs nothing.</p>
            <p>A walk, the school run, the washing up. That's when Recaply gets through the things you saved.</p>
          </div>
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
