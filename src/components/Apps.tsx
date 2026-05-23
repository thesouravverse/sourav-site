import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { apps } from '../content';
import { SectionLabel } from './About';

export default function Apps() {
  return (
    <section id="apps" className="py-24">
      <SectionLabel>apps & projects</SectionLabel>
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="text-4xl font-bold sm:text-5xl">Things I've shipped (or am shipping)</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {apps.map((app, i) => (
          <motion.a
            key={app.name}
            href={app.link ?? '#'}
            target={app.link ? '_blank' : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-7"
          >
            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${app.accent} opacity-30 blur-2xl transition group-hover:opacity-60`}
            />
            <div className="relative flex items-start justify-between">
              <div className="text-4xl">{app.emoji}</div>
              <ArrowUpRight
                size={22}
                className="text-white/40 transition group-hover:rotate-45 group-hover:text-white"
              />
            </div>
            <h3 className="relative mt-6 text-2xl font-bold">{app.name}</h3>
            <p className="relative mt-2 text-white/70">{app.blurb}</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {app.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
