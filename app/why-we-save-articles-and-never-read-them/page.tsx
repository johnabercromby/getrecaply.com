import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentCTA } from '../components/ContentCTA';
import { ContentNav } from '../components/ContentNav';
import { Footer } from '../components/Footer';

const title = 'Why we save articles and never read them · Recaply';
const description = 'A practical guide to a growing reading backlog: why useful articles get saved, how to choose what to revisit, and when to let the rest go.';
const url = 'https://www.getrecaply.com/why-we-save-articles-and-never-read-them';
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: '/why-we-save-articles-and-never-read-them' },
  openGraph: { type: 'article', url, siteName: 'Recaply', title, description, images: ['/og-launch.png'], locale: 'en_GB' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-launch.png'] },
};
const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Why we save articles and never read them', description, mainEntityOfPage: url };

export default function ReadingBacklogArticle() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ContentNav currentPage="reading-guide" />
    <main className="content-page content-article">
      <header className="content-header">
        <p className="eyebrow">THE READING BACKLOG</p>
        <h1>Why we save articles and never read them</h1>
        <p>Saving an article is easy. Finding a reason and a moment to return to it is harder. A smaller, more intentional backlog can help.</p>
      </header>
      <article className="content-prose">
        <h2>Saving and reading are different decisions</h2>
        <p>When a useful link appears in the middle of a busy day, saving it protects your attention. You can keep going and decide later whether to read. The trouble starts when “later” never gets a place in your calendar or a clear purpose. A folder can hold hundreds of links, but it cannot decide which ones still matter.</p>
        <p>Some saves are genuine plans: a recipe for Saturday, a guide for a project, a question you need to answer. Others are simply interesting in the moment. Both are fine. Treating every save as an unfinished task turns curiosity into a backlog you feel obliged to clear.</p>
        <h2>Give each save a reason to return</h2>
        <p>Before you save another article, ask: “What will I use this for?” A short note such as “try this on the weekend” or “compare with my current approach” gives the link a job. If you cannot name one, you may not need to save it at all.</p>
        <h2>Use three passes on an old backlog</h2>
        <ol>
          <li><strong>Keep the timely items.</strong> Put anything tied to a current decision or project where you will see it this week.</li>
          <li><strong>Skim for one takeaway.</strong> For an interesting article, read the headings and opening first. If it still matters, read it fully and write down one useful idea.</li>
          <li><strong>Let stale links go.</strong> A save that no longer fits your interests does not need to become homework. Delete it without trying to finish it first.</li>
        </ol>
        <h2>Choose a way back that fits your day</h2>
        <p>A short weekly review works better than waiting for a perfect free afternoon. Pick a small number of saves, open the original sources for anything important, and leave the rest alone. If listening fits your routine, an audio recap can help you notice themes across what you saved. <Link href="/how-it-works">Recaply turns saved links, notes and photos into a weekly audio recap</Link> on iPhone; it does not replace the detail in the original article.</p>
        <p>The goal is not to reach zero unread items. It is to make it easier to use the few ideas that still matter to you.</p>
      </article>
      <p className="content-related">For product details, see <Link href="/how-it-works">how Recaply works</Link> and the <Link href="/faq">FAQ</Link>.</p>
      <ContentCTA />
    </main>
    <Footer />
  </>;
}
