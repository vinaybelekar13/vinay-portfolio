import {setRequestLocale} from 'next-intl/server';
import {siteConfig} from '@/config/site';
import {routing} from '@/i18n/routing';
import {Navbar} from '@/components/navbar';
import {Hero} from '@/components/sections/hero';
import {About} from '@/components/sections/about';
import {Education} from '@/components/sections/education';
import {Skills} from '@/components/sections/skills';
import {Projects} from '@/components/sections/projects';
import {Experience} from '@/components/sections/experience';
import {Achievements} from '@/components/sections/achievements';
import {Certifications} from '@/components/sections/certifications';
import {Footer} from '@/components/sections/footer';
import {CursorToolbar} from '@/components/cursor-toolbar';

type Props = {params: Promise<{locale: string}>};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'B.Tech Electronics and Communication Engineering Student',
    knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Software Development', 'IoT', 'Embedded Systems', 'Electronics'],
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.leetcode].filter(Boolean),
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: routing.locales,
  };

  return (
    <main id="main-content" className="bg-black text-white min-h-screen noise dot-grid overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}} />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Footer />
      <CursorToolbar />
    </main>
  );
}
