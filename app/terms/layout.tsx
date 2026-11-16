import Link from 'next/link';
import type { Metadata } from 'next';
import { PrivacyNotice } from '../components/PrivacyNotice';

const title = 'Terms of Service · Recaply';
const description = 'Read the terms for using Recaply, including accounts, subscriptions, saved content and AI-generated recaps.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/terms' },
  openGraph: {
    type: 'website',
    url: 'https://www.getrecaply.com/terms',
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
  return <><nav className="legal-nav" aria-label="Legal navigation"><Link href="/">Recaply home</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms" aria-current="page">Terms of Service</Link><PrivacyNotice /></nav>{children}</>;
}
