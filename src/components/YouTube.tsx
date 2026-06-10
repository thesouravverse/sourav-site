import { motion } from 'framer-motion';
import { Youtube as YoutubeIcon } from 'lucide-react';
import { profile, youtubeVideos } from '../content';
import { SectionLabel } from './About';

export default function YouTube() {
  return (
    <section id="youtube" className="py-24">
      <SectionLabel>youtube</SectionLabel>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold sm:text-5xl">From the channel</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-fuchsia-500">
            Papercut animator
          </p>
        </div>
        <aa
          href={profile.socials.youtube}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold transition hover:scale-105"
        >
          <YoutubeIcon size={18} /> Subscribe
        </a>
      </div>

      {youtubeVideos.length === 0 ? (
        <Placeholder
          icon={<YoutubeIcon size={32} />}
          title="Add your videos"
          body={
            <>
              Edit <code className="rounded bg-white/10 px-1.5 py-0.5">src/content.ts</code> and
              add entries to <code className="rounded bg-white/10 px-1.5 py-0.5">youtubeVideos</code>.
            </>
          }
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {youtubeVideos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title ?? 'YouTube video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {(v.title || v.description) && (
                <div className="p-5">
                  {v.title && (
                    <h3 className="text-lg font-semibold leading-snug">{v.title}</h3>
                  )}
                  {v.description && (
                    <p className="mt-1.5 text-sm text-white/60">{v.description}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export function Placeholder({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="glass flex flex-col items-center rounded-3xl p-12 text-center">
      <div className="mb-4 text-white/60">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-md text-white/60">{body}</p>
    </div>
  );
}
