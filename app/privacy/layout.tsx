import Link from 'next/link';
import type { Metadata } from 'next';
import { PrivacyNotice } from '../components/PrivacyNotice';

const title = 'Privacy Policy · Recaply';
const description = 'Read how Recaply collects, uses and protects information when you use the mobile app and website.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/privacy' },
  openGraph: {
    type: 'website',
    url: 'https://www.getrecaply.com/privacy',
    siteName: 'Recaply',
    title,
    description,
    images: ['/og-launch.png'],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-launch.png'],
  },
};

export default function LegalLayout({children}: {children: React.ReactNode}) {
  return <><nav className="legal-nav" aria-label="Legal navigation"><Link href="/">Recaply home</Link><Link href="/privacy" aria-current="page">Privacy Policy</Link><Link href="/terms">Terms of Service</Link><PrivacyNotice /></nav>{children}</>;
}
