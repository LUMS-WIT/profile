import { motion } from 'framer-motion'
import { impactStories } from '../data/content'
import { storyPhoto, techPhoto, heroPhoto } from '../lib/photos'

// Real photos reused from the technology/hero folders where a story
// doesn't have a dedicated one yet — see src/assets/photos/README.md.
const FALLBACK: Record<string, () => string | undefined> = {
  'snow-packed-north': () => techPhoto('aws'),
  'smarter-farming': () => techPhoto('watersense'),
  intelliwarn: () => heroPhoto(),
}

export default function ImpactStories() {
  return (
    <section id="stories" className="scroll-mt-20 bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Impact</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
          Work in the field, and the projects behind it
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-body lg:text-lg">
          A few stories from WIT&rsquo;s field and modelling work, followed by the full register of
          funded research projects that produced them.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {impactStories.map((story, i) => {
            const photo = storyPhoto(story.id) ?? FALLBACK[story.id]?.()
            return (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                className="overflow-hidden rounded-lg border border-border bg-paper transition-colors hover:border-river"
              >
                <div className="h-52 bg-river-tint lg:h-60">
                  {photo && <img src={photo} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="p-7">
                  <p className="text-[13px] font-medium text-river lg:text-sm">{story.domain}</p>
                  <h2 className="mt-1.5 text-xl font-semibold text-ink lg:text-2xl">{story.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-body lg:text-base">{story.summary}</p>
                  <p className="mt-5 text-[13px] text-body/70 lg:text-sm">{story.meta}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
