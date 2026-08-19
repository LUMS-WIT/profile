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
    <section id="impact" className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase">Impact</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">
          Research stories
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {impactStories.map((story) => {
            const photo = storyPhoto(story.id) ?? FALLBACK[story.id]?.()
            return (
              <article key={story.id} className="overflow-hidden rounded-md border border-border bg-paper">
                <div className="h-44 bg-river-tint">
                  {photo && <img src={photo} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="p-6">
                  <p className="text-[13px] font-medium text-river">{story.domain}</p>
                  <h3 className="mt-1 text-[17px] font-semibold text-ink">{story.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-body">{story.summary}</p>
                  <p className="mt-4 text-[13px] text-body/70">{story.meta}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
