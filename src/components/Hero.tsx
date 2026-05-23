import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram, Youtube } from 'lucide-react';
import { profile } from '../content';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] flex-col justify-center py-24">
      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/4 h-72 w-72 animate-float rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-80 w-80 animate-float rounded-full bg-accent2/20 blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50"
      >
        Hello, internet —
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl font-bold leading-[1.05] sm:text-7xl md:text-8xl"
      >
        I'm <span className="text-gradient">{profile.name}</span>.
        <br />
        I make <span className="italic text-white/80">things.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 max-w-2xl text-lg text-white/70 sm:text-xl"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#apps"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:scale-105"
        >
          See what I've built
        </a>
        <div className="flex gap-3">
          <SocialIcon href={profile.socials.instagram} label="Instagram">
            <Instagram size={18} />
          </SocialIcon>
          <SocialIcon href={profile.socials.youtube} label="YouTube">
            <Youtube size={18} />
          </SocialIcon>
          <SocialIcon href={profile.socials.github} label="GitHub">
            <Github size={18} />
          </SocialIcon>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition hover:text-white"
    >
      {children}
    </a>
  );
}
