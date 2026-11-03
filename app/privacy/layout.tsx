import Link from 'next/link';
export default function LegalLayout({children}: {children: React.ReactNode}) {
  return <><nav className="legal-nav" aria-label="Legal navigation"><Link href="/">Recaply home</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></nav>{children}</>;
}
