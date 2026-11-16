import Link from 'next/link';
import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import { RecaplyLogo } from './RecaplyLogo';

export function ContentNav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-logo" aria-label="Recaply home">
          <RecaplyLogo variant="nav" />
        </Link>
        <nav className="site-nav-links" aria-label="Primary">
          <Link href="/how-it-works">How it works</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/why-we-save-articles-and-never-read-them">Reading guide</Link>
        </nav>
        <div className="site-nav-right"><AppStoreBadgeLink variant="nav" /></div>
      </div>
    </header>
  );
}
