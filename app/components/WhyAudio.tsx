import { PhoneShell } from './PhoneShell';

export function WhyAudio() {
  return (
    <section id="why-audio" className="why-section" aria-labelledby="why-heading">
      <div className="section-inner why-inner">
        <div className="why-copy">
          <p className="eyebrow">WHY AUDIO</p>
          <h2 id="why-heading" className="display-headline">
            Because finding time is the hard part.
          </h2>
          <div className="why-body">
            <p>Most people don't struggle to find interesting things. They struggle to find time for them.</p>
            <p>Recaply turns the things you've saved into something you can listen to whenever it suits you.</p>
            <p>No reading list. No guilt. No catching up at the weekend.</p>
            <p>Just a simple way to stay connected to the things that interested you.</p>
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
