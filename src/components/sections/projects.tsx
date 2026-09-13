'use client';

import {motion} from 'framer-motion';
import {ArrowUpRight, Cpu, Database, Eye, Sprout} from 'lucide-react';
import {projects} from '@/lib/data';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/section-heading';
import {Badge} from '@/components/ui/badge';
import {trackEvent} from '@/lib/analytics';

const icons = [Sprout, Cpu, Eye, Database];

export function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t('heading')} subtitle={t('subtitle')} />
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={project.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-70px'}}
                transition={{duration: 0.45, delay: i * 0.07}}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-transparent hover:border-brand-500/25 transition-colors"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--accent-rgb),0.10),transparent_42%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-xl border border-brand-500/20 bg-brand-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-400/80 border border-brand-500/15 bg-brand-500/5 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-brand-400 transition-colors">{project.title}</h3>
                    <span className="text-[10px] font-mono text-white/25 shrink-0">{project.date}</span>
                  </div>
                  <p className="text-xs font-medium text-brand-400/65 mt-1.5">{project.role}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((tech) => <Badge key={tech} variant="sm">{tech}</Badge>)}
                  </div>

                  <p className="text-sm md:text-[15px] text-white/50 leading-relaxed mt-5">{t(project.descriptionKey)}</p>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-white/25 font-mono">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('project_click', {project: project.title})} className="inline-flex items-center gap-1.5 hover:text-brand-400 transition-colors">
                        View project <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span>Project details & links coming soon</span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
