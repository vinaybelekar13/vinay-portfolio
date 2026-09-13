'use client';

import {useState, useEffect, useCallback} from 'react';
import {useTranslations} from 'next-intl';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {GitBranch, Link, Mail} from 'lucide-react';
import {siteConfig} from '@/config/site';

const {sections} = siteConfig;

export function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const updateActiveSection = useCallback(() => {
    const visible = sections.map((id) => {
      const el = document.getElementById(id);
      return {id, top: el ? Math.abs(el.getBoundingClientRect().top - 100) : Infinity};
    });
    setActiveSection(visible.reduce((a, b) => (a.top < b.top ? a : b)).id);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, {passive: true});
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
    setOpen(false);
  }

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/65 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'}`}>
      <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-4 h-16">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="font-mono text-sm text-white/70 hover:text-brand-400 transition-colors">vinay<span className="text-brand-400">@</span>dev</button>
        <div className="flex items-center gap-1 rounded-full px-1.5 py-1 bg-white/[0.03] border border-white/[0.06]">
          {sections.map((s) => <button key={s} onClick={() => scrollTo(s)} className={`px-3 py-1.5 text-xs rounded-full transition-colors ${activeSection === s ? 'text-white bg-white/[0.08]' : 'text-white/45 hover:text-white/80'}`}>{t(s)}</button>)}
        </div>
        <div className="flex items-center gap-1">
          <a href={siteConfig.social.GitBranch} target="_blank" rel="noopener noreferrer" aria-label="GitBranch" className="p-2 text-white/35 hover:text-white transition-colors"><GitBranch className="w-4 h-4" /></a>
          {siteConfig.social.Link && <a href={siteConfig.social.Link} target="_blank" rel="noopener noreferrer" aria-label="Link" className="p-2 text-white/35 hover:text-white transition-colors"><Link className="w-4 h-4" /></a>}
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="p-2 text-white/35 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between px-4 h-14">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="font-mono text-sm text-white/70">vinay<span className="text-brand-400">@</span>dev</button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild><Button variant="ghost" size="icon" className="text-white" aria-label="Menu"><span className="text-lg">☰</span></Button></SheetTrigger>
          <SheetContent side="right" className="bg-black border-white/10 px-6">
            <div className="flex flex-col gap-4 mt-8">
              {sections.map((s) => <button key={s} onClick={() => scrollTo(s)} className="text-lg text-white/55 hover:text-white transition-colors text-start">{t(s)}</button>)}
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
              <a href={siteConfig.social.GitBranch} target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white"><GitBranch className="w-5 h-5" /></a>
              {siteConfig.social.Link && <a href={siteConfig.social.Link} target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white"><Link className="w-5 h-5" /></a>}
              <a href={`mailto:${siteConfig.email}`} className="text-white/45 hover:text-white"><Mail className="w-5 h-5" /></a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}


