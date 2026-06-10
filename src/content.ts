// Single source of truth for all editable content.
// Update this file to change what shows on the site — no component edits needed.

export const profile = {
  name: 'Sourav',
  tagline: 'Engineer by day. App-maker, filmmaker, experimenter by night.',
  bio: `I build small, useful Android apps and shoot AI-driven short films.
        Currently obsessed with shipping fast and turning ideas into installable things on the Play Store.`,
  location: 'India',
  email: 'thesouravverse@gmail.com',
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
    name: 'Quick PDF',
    blurb: '100% offline PDF toolbox for Android. No accounts, no internet, no tracking.',
    tags: ['Android', 'Kotlin', 'Compose'],
    link: 'https://github.com/thesouravverse/PDFToolbox',
    emoji: '📄',
    accent: 'from-pink-500 to-rose-500',
  },
];

// YouTube videos. Each video can have an optional title and description.
// Get the ID from the URL: youtu.be/<ID> or youtube.com/watch?v=<ID>
export type YouTubeVideo = {
  id: string;
  title?: string;
  description?: string;
};

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'Nn8HzhVWUGA',
    title: 'The Oldest Unsolved Murder on Earth',
    description: 'Ötzi the Iceman — a 5,300-year-old cold case still missing a killer.',
  },
  {
    id: 'DjPkWvmIv9Y',
    title: "Why Your Raise Doesn't Feel Like a Raise",
    description: 'The 3 invisible taxes quietly eating your paycheck.',
  },
  {
    id: 'VFuPbM7J4g8',
    title: 'A Bored Monk Invented Your 9-to-5 (1,500 Years Ago)',
    description: 'How a medieval monastery accidentally designed the modern work week.',
  },
];

// Instagram requires an embed URL per post or reel, like:
// https://www.instagram.com/p/SHORTCODE/  or  https://www.instagram.com/reel/SHORTCODE/
export const instagramPostUrls: string[] = [
  'https://www.instagram.com/reel/DYtvhp-RBrj/',
  'https://www.instagram.com/reel/DYo-8H2RHYY/',
  'https://www.instagram.com/reel/DYTSWo9xkN-/',
  'https://www.instagram.com/reel/DX_64F1RiEG/',
];
