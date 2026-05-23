import { Github, Instagram, Mail, Youtube } from 'lucide-react';
import { profile } from '../content';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl font-bold">
            Let's <span className="text-gradient">build something</span>.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-flex items-center gap-2 text-white/70 hover:text-white"
          >
            <Mail size={16} /> {profile.email}
          </a>
        </div>
        <div className="flex gap-4">
          <FooterIcon href={profile.socials.instagram} label="Instagram">
            <Instagram size={18} />
          </FooterIcon>
          <FooterIcon href={profile.socials.youtube} label="YouTube">
            <Youtube size={18} />
          </FooterIcon>
          <FooterIcon href={profile.socials.github} label="GitHub">
            <Github size={18} />
          </FooterIcon>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-6 text-xs text-white/40">
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite, Tailwind & a bit of Framer Motion.
      </p>
    </footer>
  );
}

function FooterIcon({
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
