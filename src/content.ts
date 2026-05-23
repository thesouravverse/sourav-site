// Single source of truth for all editable content.
// Update this file to change what shows on the site — no component edits needed.

export const profile = {
  name: 'Sourav',
  tagline: 'Engineer by day. App-maker, filmmaker, experimenter by night.',
  bio: `I build small, useful Android apps and shoot AI-driven short films.
        Currently obsessed with shipping fast and turning ideas into installable things on the Play Store.`,
  location: 'India',
  email: 'replace-me@example.com',
  socials: {
    instagram: 'https://www.instagram.com/the.sourav_verse',
    youtube: 'https://youtube.com/@the.sourav_verse',
    github: 'https://github.com/thesouravverse',
    linkedin: '',
    x: '',
  },
};

export type AppCard = {
  name: string;
  blurb: string;
  tags: string[];
  link?: string;
  emoji: string;
  accent: string; // tailwind gradient classes
};

export const apps: AppCard[] = [
  {
    name: 'BalanceWidget',
    blurb: 'A clean home-screen widget for your bank balance. No ads, no nonsense.',
    tags: ['Android', 'Kotlin', 'Play Store'],
    link: 'https://github.com/thesouravverse/BalanceWidget',
    emoji: '💰',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    name: 'MechAR',
    blurb: 'AR experience that drops mechanical models into your room — spider rig first.',
    tags: ['Android', 'ARCore', 'WIP'],
    link: 'https://github.com/thesouravverse/MechAR',
    emoji: '🕷️',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'SimpleLife',
    blurb: 'Daily life tracker that respects your attention. Minimal, fast, local-first.',
    tags: ['Android', 'Compose', 'WIP'],
    link: 'https://github.com/thesouravverse/SimpleLife',
    emoji: '🌱',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Flowchart',
    blurb: 'A web tool to think in flows — boxes, arrows, and the occasional eureka.',
    tags: ['Web', 'React', 'Vite'],
    emoji: '🔁',
    accent: 'from-pink-500 to-rose-500',
  },
];

// Drop in YouTube video IDs (the part after v=).
export const youtubeVideoIds: string[] = [
  // 'dQw4w9WgXcQ',
];

// Instagram requires an embed URL per post, like:
// https://www.instagram.com/p/SHORTCODE/
export const instagramPostUrls: string[] = [
  // 'https://www.instagram.com/p/Cxxxxxxxx/',
];
