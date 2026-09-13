'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Rocket} from 'lucide-react';
import {experiences} from '@/config/experience';
import {SectionHeading} from '@/components/ui/section-heading';

export function Experience() {
  const t = useTranslations('experience');
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Leadership & Involvement" subtitle="Learning by building with people and helping others build too." />
        <div className="relative">
          {experiences.map((exp, i) => (
            <motion.div key={exp.key} initial={{opacity: 0, x: -18}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, margin: '-50px'}} transition={{duration: 0.45}} className="relative ps-14">
              <div className="absolute start-0 top-0 w-10 h-10 rounded-full border border-brand-500/30 bg-brand-500/10 flex items-center justify-center">
                <Rocket className="w-4 h-4 text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
              <p className="text-sm mt-1 text-brand-400 font-medium">{t(`${exp.key}Role`)}</p>
              <p className="text-xs text-white/35 mt-1">{t(`${exp.key}Period`)} · {t(`${exp.key}Location`)}</p>
              <div className="text-sm text-white/65 mt-4 leading-relaxed space-y-3">
                {t(`${exp.key}Description`).split('\n\n').map((paragraph, pi) => <p key={pi}>{paragraph}</p>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
