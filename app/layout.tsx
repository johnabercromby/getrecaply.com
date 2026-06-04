import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

const description =
  'Recaply turns what you save into audio you actually listen to, so nothing you find is wasted.';

export const metadata: Metadata = {
  metadataBase: new URL('https://getrecaply.com'),
  title: 'Recaply: Saved for later. Later is here.',
  description,
  openGraph: {
    title: 'Recaply: Saved for later. Later is here.',
    description,
    url: 'https://getrecaply.com/',
    siteName: 'Recaply',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Recaply' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recaply: Saved for later. Later is here.',
    description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
