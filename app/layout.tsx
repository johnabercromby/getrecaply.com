import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

const description =
  'Get more from what you save with a personalised audio recap. Catch up on articles, videos, notes and photos while walking, driving or cooking.';

export const metadata: Metadata = {
  metadataBase: new URL('https://getrecaply.com'),
  title: {
    default: 'Recaply — You saved it for a reason.',
    template: '%s · Recaply',
  },
  description,
  openGraph: {
    type: 'website',
    url: 'https://getrecaply.com',
    siteName: 'Recaply',
    title: 'Recaply — You saved it for a reason.',
    description,
    images: [
      {
        url: '/og-launch.png',
        width: 1200,
        height: 630,
        alt: 'Recaply — You saved it for a reason.',
      },
    ],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recaply — You saved it for a reason.',
    description,
    images: ['/og-launch.png'],
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
