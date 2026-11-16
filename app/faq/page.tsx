import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentCTA } from '../components/ContentCTA';
import { ContentNav } from '../components/ContentNav';
import { Footer } from '../components/Footer';

const title = 'Recaply FAQ · Recaply';
const description = 'Answers about Recaply audio recaps, what you can save, iPhone availability, pricing, privacy and current limitations.';
const url = 'https://www.getrecaply.com/faq';

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: '/faq' },
  openGraph: { type: 'website', url, siteName: 'Recaply', title, description, images: ['/og-launch.png'], locale: 'en_GB' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-launch.png'] },
};

const questions = [
  { q: 'What is Recaply?', a: 'Recaply is an iPhone app that turns the things you save into a personalised audio recap, so you can return to ideas without opening every saved item.' },
  { q: 'How does Recaply work?', a: 'Save things that interest you, let Recaply bring together themes across those saves, then listen to your audio recap. You can choose the day your weekly recap arrives.' },
  { q: 'What can I save?', a: 'You can save links, notes and photos. Links can include articles and videos you want to revisit. Recaply also supports voice-to-text note capture.' },
  { q: 'When do audio recaps arrive?', a: 'Recaply delivers an audio recap weekly, on the day you choose.' },
  { q: 'Is Recaply free?', a: 'Recaply is free to download on the App Store. The listing also shows in-app purchases.' },
  { q: 'What does Premium cost and include?', a: 'For current Premium prices and included features, check the subscription offer in the iPhone app before confirming a purchase.' },
  { q: 'How does Recaply use my saved content and AI?', a: 'The privacy policy says saved links, notes, photos and text are used to generate your recaps. Saved content is sent to OpenAI for recap summaries and audio; Supabase provides storage and authentication. You can delete individual saves or your account in the app.' },
  { q: 'How is Recaply different from a bookmarking app?', a: 'A bookmark keeps a link for later. Recaply helps you return to what you saved by bringing ideas together in an audio recap. It is a way to revisit saves, not a replacement for reading an original source when you need its full detail.' },
  { q: 'Is Recaply available on iOS?', a: 'Yes. Recaply is publicly available for iPhone and requires iOS 17 or later.' },
  { q: 'Is Recaply available on Android?', a: 'No. Android is not publicly available at present.' },
  { q: 'What are the current limitations?', a: 'Audio recaps are AI-generated and may be inaccurate or incomplete. Check the original source for important details and do not rely on a recap as professional advice. Recaply currently has no public Android app.' },
] as const;

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: questions.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function FAQPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <ContentNav />
    <main className="content-page">
      <header className="content-header">
        <p className="eyebrow">QUESTIONS & ANSWERS</p>
        <h1>Recaply FAQ</h1>
        <p>Quick answers about saving, listening and getting started on iPhone.</p>
      </header>
      <div className="faq-list">
        {questions.map(({ q, a }) => <section className="faq-item" key={q}><h2>{q}</h2><p>{a}</p></section>)}
      </div>
      <p className="content-related">Explore the <Link href="/how-it-works">Save → Recap → Listen guide</Link>, or read the full <Link href="/privacy">privacy policy</Link> and <Link href="/terms">terms</Link>.</p>
      <ContentCTA />
    </main>
    <Footer />
  </>;
}
