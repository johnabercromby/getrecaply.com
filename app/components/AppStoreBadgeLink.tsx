import type { CSSProperties } from 'react';

/** Official App Store badge artwork from Apple Marketing Tools (AMS). */
const APP_STORE_HREF = 'https://apps.apple.com/app/recaply/id6757158392';

export const APP_STORE_BADGE_SRC =
  'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=2026-03-05';

type AppStoreBadgeLinkProps = {
  variant: 'nav' | 'hero' | 'cta';
  className?: string;
};

const layout: Record<AppStoreBadgeLinkProps['variant'], { width: number; height: number }> = {
  nav: { width: 110, height: 37 },
  hero: { width: 180, height: 60 },
  cta: { width: 250, height: 83 },
};

const ctaAnchorBare: CSSProperties = {
  background: 'none',
  padding: 0,
  borderRadius: 0,
  boxShadow: 'none',
};

export function AppStoreBadgeLink({ variant, className = '' }: AppStoreBadgeLinkProps) {
  const { width, height } = layout[variant];
  const isCta = variant === 'cta';
  const anchorClass = ['app-store-badge-link', !isCta && `app-store-badge-link--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={APP_STORE_HREF}
      className={anchorClass}
      target="_blank"
      rel="noopener"
      style={isCta ? ctaAnchorBare : undefined}
    >
      <img
        src={APP_STORE_BADGE_SRC}
        alt="Download on the App Store"
        width={width}
        height={height}
        decoding="async"
        className={isCta ? 'app-store-badge-img--cta' : undefined}
      />
    </a>
  );
}
