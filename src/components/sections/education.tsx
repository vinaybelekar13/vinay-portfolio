'use client';

import {motion} from 'framer-motion';
import {GraduationCap} from 'lucide-react';
import {SectionHeading} from '@/components/ui/section-heading';

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" />
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-7 md:p-9"
        >
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="relative flex gap-5">
            <div className="shrink-0 w-12 h-12 rounded-xl border border-brand-500/20 bg-brand-500/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-brand-400 mb-2">2024 — 2028</p>
              <h3 className="text-xl md:text-2xl font-semibold text-white">B.Tech Electronics and Communication Engineering</h3>
              <p className="text-white/50 mt-2">Vellore Institute of Technology, Chennai</p>
              <p className="text-sm text-white/35 mt-4">Building a foundation across electronics, communication systems, programming, data structures, AI/ML, and embedded systems.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
