'use client';

import {motion} from 'framer-motion';
import {GitBranch, Link, Mail, ExternalLink} from 'lucide-react';
import {siteConfig} from '@/config/site';
import {trackEvent} from '@/lib/analytics';

export function Footer() {
  return (
    <footer id="contact" className="relative py-24 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-brand-500/[0.08] via-white/[0.025] to-transparent p-8 md:p-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-400">{siteConfig.name}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4">Let&apos;s build something meaningful.</h2>
          <p className="max-w-2xl mx-auto text-white/45 mt-4 leading-relaxed">Open to learning, building, collaborating, and opportunities that sit at the intersection of AI, software, electronics, and intelligent systems.</p>
          <a href={`mailto:${siteConfig.email}`} onClick={() => trackEvent('cta_click', {location: 'footer', type: 'email'})} className="inline-flex items-center gap-2 mt-7 px-5 py-3 rounded-lg bg-brand-500 text-black font-semibold hover:bg-brand-400 transition-colors">
            <Mail className="w-4 h-4" /> {siteConfig.email}
          </a>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs font-mono text-white/25">
          <p>© {new Date().getFullYear()} Vinay Santosh Belekar</p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.GitBranch} target="_blank" rel="noopener noreferrer" aria-label="GitBranch" className="hover:text-brand-400 transition-colors"><GitBranch className="w-4 h-4" /></a>
            {siteConfig.social.Link && <a href={siteConfig.social.Link} target="_blank" rel="noopener noreferrer" aria-label="Link" className="hover:text-brand-400 transition-colors"><Link className="w-4 h-4" /></a>}
            <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="hover:text-brand-400 transition-colors"><Mail className="w-4 h-4" /></a>
            <a href={siteConfig.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-400 transition-colors"><span>Source</span><ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}


