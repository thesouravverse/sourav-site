import { motion } from 'framer-motion';
import { profile } from '../content';

const facts = [
  { k: 'Based in', v: profile.location },
  { k: 'Currently', v: 'Shipping Android apps' },
  { k: 'Side quest', v: 'AI short films' },
  { k: 'Status', v: 'Open to chat' },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionLabel>about</SectionLabel>
      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            A one-person studio for{' '}
            <span className="text-gradient">small, sharp ideas</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{profile.bio}</p>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            I like the loop of <span className="text-white">idea → build → ship → learn</span>{' '}
            kept tight. This page is the front door to everything I'm making.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2 space-y-3"
        >
          {facts.map((f) => (
            <li key={f.k} className="glass flex items-center justify-between rounded-2xl px-5 py-4">
              <span className="text-sm uppercase tracking-wider text-white/50">{f.k}</span>
              <span className="text-sm font-medium">{f.v}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="h-px w-12 bg-white/30" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
        {children}
      </span>
    </div>
  );
}
