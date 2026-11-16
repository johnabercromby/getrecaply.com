import Link from 'next/link';
import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import { RecaplyLogo } from './RecaplyLogo';

type ContentPage = 'home' | 'how-it-works' | 'faq' | 'reading-guide';

export function ContentNav({ currentPage }: { currentPage: ContentPage }) {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <div className="site-nav-left">
          <Link href="/" className="site-nav-logo" aria-label="Recaply home">
            <RecaplyLogo variant="nav" />
          </Link>
        </div>
        <nav className="site-nav-links" aria-label="Primary">
          <Link href="/" aria-current={currentPage === 'home' ? 'page' : undefined}>Home</Link>
          <Link href="/how-it-works" aria-current={currentPage === 'how-it-works' ? 'page' : undefined}>How it works</Link>
          <Link href="/faq" aria-current={currentPage === 'faq' ? 'page' : undefined}>FAQ</Link>
          <Link href="/why-we-save-articles-and-never-read-them" aria-current={currentPage === 'reading-guide' ? 'page' : undefined}>Reading guide</Link>
        </nav>
        <div className="site-nav-right"><AppStoreBadgeLink variant="nav" /></div>
      </div>
    </header>
  );
}
