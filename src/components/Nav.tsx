import { motion, useScroll, useTransform } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#apps', label: 'Apps' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#instagram', label: 'Instagram' },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ['rgba(10,10,15,0)', 'rgba(10,10,15,0.7)']);
  const border = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.08)']);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="sticky top-0 z-50 border-b backdrop-blur"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-wide">
          <span className="text-gradient">sourav</span>
          <span className="text-white/40">.dev</span>
        </a>
        <ul className="hidden gap-8 text-sm text-white/70 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a className="transition hover:text-white" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
