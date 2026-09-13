'use client';

import {motion} from 'framer-motion';
import {BadgeCheck} from 'lucide-react';
import {SectionHeading} from '@/components/ui/section-heading';

const certifications = [
  ['DSA', 'Apna College'],
  ['Prompt Engineering with GitHub Copilot', 'Microsoft / Simplilearn'],
  ['Data Science & Machine Learning for 2026', 'GUVI'],
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Certifications" />
        <div className="space-y-3">
          {certifications.map(([name, issuer], i) => (
            <motion.div key={name} initial={{opacity: 0, x: -12}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{delay: i * 0.06}} className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4">
              <BadgeCheck className="w-5 h-5 text-brand-400 shrink-0" />
              <div className="min-w-0">
                <p className="font-medium text-white/80">{name}</p>
                <p className="text-xs text-white/35 mt-0.5">{issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
