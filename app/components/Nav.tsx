import Link from 'next/link';
import { AppStoreBadgeLink } from './AppStoreBadgeLink';
import { RecaplyLogo } from './RecaplyLogo';

export function Nav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <div className="site-nav-left">
          <Link href="/" className="site-nav-logo" aria-label="Recaply home">
            <RecaplyLogo variant="nav" />
          </Link>
        </div>

        <nav className="site-nav-links" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#why-audio">Why audio</a>
          <a href="#outcomes">Features</a>
        </nav>

        <div className="site-nav-right">
          <AppStoreBadgeLink variant="nav" />
        </div>
      </div>
    </header>
  );
}
