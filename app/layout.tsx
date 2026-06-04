import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

const description =
  'You save articles, videos, podcasts and ideas because they interest you. Recaply turns them into a personalised weekly audio recap.';

export const metadata: Metadata = {
  metadataBase: new URL('https://getrecaply.com'),
  title: {
    default: 'Recaply — Saved for later. Later is here.',
    template: '%s · Recaply',
  },
  description,
  openGraph: {
    type: 'website',
    url: 'https://getrecaply.com',
    siteName: 'Recaply',
    title: 'Recaply — Saved for later. Later is here.',
    description: 'A personalised weekly audio recap of everything you saved.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Recaply — Saved for later. Later is here.',
      },
    ],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recaply — Saved for later. Later is here.',
    description: 'A personalised weekly audio recap of everything you saved.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
