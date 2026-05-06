export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid section-inner">
        <div className="footer-col">
          <div className="footer-brand">
            <span className="site-nav-mark" aria-hidden />
            <span className="footer-brand-name">Recaply</span>
          </div>
          <p className="footer-tagline">Turn saves into something you actually finish.</p>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Product</h3>
          <div className="footer-stack">
            <a href="#how">How it works</a>
            <a href="#why-audio">Why audio</a>
            <a href="#outcomes">Features</a>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Legal</h3>
          <div className="footer-stack">
            <a href="https://recaply.app/privacy" target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
            <a href="https://recaply.app/terms" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-stack">
            <a href="mailto:hello@recaply.app">hello@recaply.app</a>
          </div>
        </div>
      </div>
      <div className="footer-meta section-inner">
        <p className="footer-meta-line">© 2026 Recaply · ALL LOOPS CLOSED</p>
      </div>
    </footer>
  );
}
