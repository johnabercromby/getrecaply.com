import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FounderQuote } from './components/FounderQuote';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Nav } from './components/Nav';
import { Outcomes } from './components/Outcomes';
import { ProblemSection } from './components/ProblemSection';
import { WhyAudio } from './components/WhyAudio';

const mobileApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Recaply',
  description:
    'Recaply turns what you save into audio you actually listen to, so nothing you find is wasted.',
  url: 'https://getrecaply.com/',
  downloadUrl: 'https://apps.apple.com/app/recaply/id6757158392',
  operatingSystem: 'iOS',
  applicationCategory: 'ProductivityApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
};

const APP_STORE = 'https://apps.apple.com/app/recaply/id6757158392';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApplicationJsonLd) }}
      />
      <Nav />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <WhyAudio />
      <Outcomes appStoreUrl={APP_STORE} />
      <FounderQuote />
      <CTA />
      <Footer />
    </>
  );
}
