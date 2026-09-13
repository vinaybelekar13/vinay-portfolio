'use client';

import {motion} from 'framer-motion';
import {SectionHeading} from '@/components/ui/section-heading';

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About" subtitle="An engineer in progress, building across software and hardware." />
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-10 items-stretch">
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 md:p-10"
          >
            <p className="text-xl md:text-2xl text-white/85 leading-snug">
              I&apos;m Vinay, a B.Tech Electronics and Communication Engineering student at VIT Chennai, exploring the intersection of AI, software, electronics, and connected systems.
            </p>
            <div className="mt-7 space-y-4 text-base md:text-lg text-white/50 leading-relaxed">
              <p>
                My work ranges from machine-learning pipelines and web applications to embedded and IoT prototypes. I enjoy taking an idea from a problem statement to something that can actually be tested in the real world.
              </p>
              <p>
                I&apos;m particularly interested in intelligent systems that connect computation with physical environments — from agricultural robotics to patient-care monitoring and computer-vision experiments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{delay: 0.1}}
            className="rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/[0.08] to-transparent p-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-400 mb-6">Current direction</p>
            <div className="space-y-5">
              {[
                ['01', 'Artificial Intelligence', 'ML, DL, LLMs, RAG and agentic systems'],
                ['02', 'Software Engineering', 'Web apps, APIs, databases and DSA'],
                ['03', 'Embedded & IoT', 'Microcontrollers, sensors, communication and automation'],
                ['04', 'Electronics', 'ECE fundamentals, simulation and hardware systems'],
              ].map(([n, title, text]) => (
                <div key={n} className="flex gap-4">
                  <span className="font-mono text-xs text-brand-400/70 pt-1">{n}</span>
                  <div>
                    <p className="font-medium text-white/80">{title}</p>
                    <p className="text-sm text-white/40 mt-1 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
