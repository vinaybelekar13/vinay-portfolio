'use client';

import {motion} from 'framer-motion';
import {SectionHeading} from '@/components/ui/section-heading';

const groups = [
  {title: 'Programming', items: ['Python', 'Java', 'R', 'MATLAB', 'SQL']},
  {title: 'AI / ML', items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'CNN', 'RNN', 'LSTM', 'Transformers']},
  {title: 'GenAI / NLP', items: ['LLMs', 'NLP', 'RAG', 'Agentic AI', 'Prompt Engineering']},
  {title: 'Data', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistics', 'Probability', 'Excel', 'Power BI']},
  {title: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Flask', 'Node.js', 'Express.js', 'MySQL', 'Figma']},
  {title: 'Core CS', items: ['Data Structures & Algorithms', 'OOP']},
  {title: 'Tools / DevOps', items: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'Linux', 'Windows']},
  {title: 'Embedded / IoT / ECE', items: ['Arduino Uno', 'ESP32', 'Raspberry Pi', 'HX711', 'Load Cell', 'LoRa', 'Cadence Virtuoso', 'LTspice']},
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] via-brand-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="A broad engineering toolkit, with AI and systems at the center." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{delay: i * 0.04}}
              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-brand-500/20 hover:bg-white/[0.04] transition-colors"
            >
              <h3 className="text-sm font-semibold text-white/80 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="px-2 py-1 rounded-md border border-white/[0.07] bg-black/20 text-[11px] font-mono text-white/45">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
