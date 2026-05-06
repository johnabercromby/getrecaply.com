import type { Metadata } from 'next';
import { DM_Sans, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const description =
  'Recaply turns what you save into audio you actually listen to, so nothing you find is wasted.';

export const metadata: Metadata = {
  metadataBase: new URL('https://getrecaply.com'),
  title: 'Recaply: Close your loops',
  description,
  openGraph: {
    title: 'Recaply: Close your loops',
    description,
    url: 'https://getrecaply.com/',
    siteName: 'Recaply',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Recaply' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recaply: Close your loops',
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
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
