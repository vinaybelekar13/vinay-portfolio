'use client';

import {motion} from 'framer-motion';
import {Trophy, Volleyball, CircleDot} from 'lucide-react';
import {SectionHeading} from '@/components/ui/section-heading';

const items = [
  {icon: Trophy, title: 'Chess', text: 'Represented the division and competed in 6 national-level tournaments.'},
  {icon: Volleyball, title: 'Volleyball', text: 'Represented the division.'},
  {icon: CircleDot, title: 'Cricket', text: 'Represented the district.'},
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Competitive sport has been part of my growth alongside engineering." />
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return <motion.div key={item.title} initial={{opacity: 0, y: 14}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: i * 0.08}} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6">
              <Icon className="w-5 h-5 text-brand-400 mb-5" />
              <h3 className="font-semibold text-white/85">{item.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mt-2">{item.text}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </section>
  );
}
