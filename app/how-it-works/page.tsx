import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContentCTA } from '../components/ContentCTA';
import { ContentNav } from '../components/ContentNav';
import { Footer } from '../components/Footer';

const title = 'How Recaply works · Recaply';
const description = 'Save links, notes and photos, get a personalised weekly audio recap, and listen when it suits you. See the Recaply experience step by step.';
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: '/how-it-works' },
  openGraph: { type: 'website', url: 'https://www.getrecaply.com/how-it-works', siteName: 'Recaply', title, description, images: ['/og-launch.png'], locale: 'en_GB' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-launch.png'] },
};

export default function HowItWorksPage() {
  return <>
    <ContentNav />
    <main className="content-page">
      <header className="content-header">
        <p className="eyebrow">SAVE → RECAP → LISTEN</p>
        <h1>How Recaply works</h1>
        <p>Recaply gives the things you save a way back into your day: collect what interests you, get a weekly audio recap, and listen when you have a moment.</p>
      </header>
      <section className="content-step">
        <div><span className="content-step-number">01 / SAVE</span><h2>Keep the things worth revisiting</h2><p>Add a link, write a note or save a photo in the iPhone app. A link might be an article to read or a video to return to. Save the idea when you find it, without deciding when you will have time for it.</p></div>
        <Image src="/images/apps/full/add-link.png" alt="Recaply screen for adding a link" width={1179} height={2406} unoptimized className="content-phone" />
      </section>
      <section className="content-step">
        <div><span className="content-step-number">02 / RECAP</span><h2>Find the thread across your saves</h2><p>Recaply brings together themes and connections across what you saved and creates a personalised audio recap. It is delivered weekly on the day you choose. The recap reflects your saves; it is not a substitute for checking an original source when accuracy or detail matters.</p></div>
        <Image src="/images/apps/full/recaps-list.png" alt="Recaply screen showing a list of audio recaps" width={1179} height={2406} unoptimized className="content-phone" />
      </section>
      <section className="content-step">
        <div><span className="content-step-number">03 / LISTEN</span><h2>Catch up while life carries on</h2><p>Play your recap on a walk, during a commute or while cooking. You can come back to the ideas you saved without working through a long reading list in one sitting.</p></div>
        <Image src="/images/apps/full/recap-detail.png" alt="Recaply audio recap playback screen" width={1179} height={2406} unoptimized className="content-phone" />
      </section>
      <p className="content-related">Have questions about pricing, privacy or availability? Read the <Link href="/faq">Recaply FAQ</Link>. If your saved articles keep piling up, try the practical ideas in <Link href="/why-we-save-articles-and-never-read-them">our reading backlog guide</Link>.</p>
      <ContentCTA />
    </main>
    <Footer />
  </>;
}
