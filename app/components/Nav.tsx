import Link from 'next/link';

type NavProps = {
  appStoreUrl: string;
};

export function Nav({ appStoreUrl }: NavProps) {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <div className="site-nav-left">
          <Link href="/" className="site-nav-logo" aria-label="Recaply home">
            <span className="site-nav-mark" aria-hidden />
            <span>Recaply</span>
          </Link>
        </div>

        <nav className="site-nav-links" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#why-audio">Why audio</a>
          <a href="#outcomes">Features</a>
        </nav>

        <div className="site-nav-right">
          <a href={appStoreUrl} className="site-nav-download" target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
