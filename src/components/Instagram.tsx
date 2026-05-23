import { motion } from 'framer-motion';
import { Instagram as InstaIcon } from 'lucide-react';
import { instagramPostUrls, profile } from '../content';
import { SectionLabel } from './About';
import { Placeholder } from './YouTube';

export default function Instagram() {
  return (
    <section id="instagram" className="py-24">
      <SectionLabel>instagram</SectionLabel>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-4xl font-bold sm:text-5xl">Behind the scenes</h2>
        <a
          href={profile.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-amber-400 px-5 py-2.5 text-sm font-semibold transition hover:scale-105"
        >
          <InstaIcon size={18} /> Follow
        </a>
      </div>

      {instagramPostUrls.length === 0 ? (
        <Placeholder
          icon={<InstaIcon size={32} />}
          title="Add your posts"
          body={
            <>
              Edit <code className="rounded bg-white/10 px-1.5 py-0.5">src/content.ts</code> and
              drop post URLs (like <code className="rounded bg-white/10 px-1.5 py-0.5">https://instagram.com/p/SHORTCODE/</code>) into <code className="rounded bg-white/10 px-1.5 py-0.5">instagramPostUrls</code>.
            </>
          }
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPostUrls.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <iframe
                className="h-[560px] w-full"
                src={`${url.replace(/\/?$/, '/')}embed`}
                title="Instagram post"
                allowTransparency
                allowFullScreen
                frameBorder={0}
                scrolling="no"
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
