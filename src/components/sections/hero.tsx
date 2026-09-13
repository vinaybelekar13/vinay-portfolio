'use client';

import {useRef} from 'react';
import {useTranslations} from 'next-intl';
import {Terminal} from '@/components/terminal';
import {Button} from '@/components/ui/button';
import {InteractiveDots} from '@/components/interactive-dots';
import {ArrowDown, ArrowUpRight, GitBranch, Mail} from 'lucide-react';
import {siteConfig} from '@/config/site';
import {trackEvent} from '@/lib/analytics';

export function Hero() {
  const t = useTranslations('hero');
  const contentRef = useRef<HTMLDivElement>(null);

  const terminalLines = [
    {type: 'command' as const, text: t('command1')},
    {type: 'response' as const, text: t('response1')},
    {type: 'command' as const, text: t('command2')},
    {type: 'response' as const, text: t('response2')},
    {type: 'command' as const, text: t('command3')},
    {type: 'response' as const, text: t('response3')},
  ];

  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-4 py-24">
      <InteractiveDots className="absolute inset-0" excludeRef={contentRef} />
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div ref={contentRef} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-8">
        <div className="text-center space-y-4">
          <p className="font-mono text-xs sm:text-sm text-brand-400 tracking-[0.25em] uppercase">{t('eyebrow')}</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Vinay Santosh Belekar
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-white/55 leading-relaxed">
            {t('headline')}
          </p>
        </div>

        <Terminal lines={terminalLines} />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600 text-black font-semibold gap-2">
            <a href="#projects" onClick={() => trackEvent('cta_click', {location: 'hero', type: 'projects'})}>
              {t('projectsCta')} <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/20 text-white/70 hover:text-white hover:border-white/40 gap-2">
            <a href={siteConfig.social.GitBranch} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', {platform: 'GitBranch'})}>
              <GitBranch className="w-4 h-4" /> GitBranch <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-white/50 hover:text-white gap-2">
            <a href={`mailto:${siteConfig.email}`} onClick={() => trackEvent('cta_click', {location: 'hero', type: 'email'})}>
              <Mail className="w-4 h-4" /> Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

