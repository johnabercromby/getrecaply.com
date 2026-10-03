import { PhoneShell } from './PhoneShell';
import { AppScreenshot } from './AppScreenshot';

export function WhyAudio() {
  return (
    <section id="why-audio" className="why-section" aria-labelledby="why-heading">
      <div className="section-inner why-inner">
        <div className="why-copy">
          <p className="eyebrow">WHY AUDIO</p>
          <h2 id="why-heading" className="display-headline">
            Catch up without opening another tab.
          </h2>
          <div className="why-body">
            <p>Reading asks for your attention. Listening fits around your life.</p>
            <p>On a walk. While driving. While cooking dinner. Catch up on what you saved in the moments you already have.</p>
            <p>Your audio recap is delivered weekly, on the day you choose.</p>
          </div>
        </div>

        <div className="why-phone-visual" aria-label="Recap detail app screen">
          <PhoneShell className="phone-shell-app-shot">
            <AppScreenshot screen="recap-detail" />
          </PhoneShell>
        </div>
      </div>
    </section>
  );
}
