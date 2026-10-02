import Image from 'next/image';

/** Preserve the real app UI; only the editorial demo title is overlaid as live text. */
export function AppScreenshot({ screen }: { screen: 'home' | 'recap-detail' }) {
  return (
    <div className={`app-screenshot app-screenshot--${screen}`}>
      <Image
        className="phone-screen-img"
        src={`/images/apps/full/${screen}.png`}
        alt={`Recaply ${screen === 'home' ? 'home' : 'audio recap'} screen, showing “Ideas for a better week.”`}
        width={1179}
        height={2406}
        unoptimized
      />
      <span className="app-screenshot-title" aria-hidden="true">Ideas for a better week.</span>
    </div>
  );
}
