import { impactStories } from '../data/content'
import cryosphereImg from '../assets/impact-cryosphere.jpg'
import agricultureImg from '../assets/impact-agriculture.jpg'

const MEDIA: Record<string, { type: 'image'; src: string } | { type: 'graphic' }> = {
  'flood-ews': { type: 'graphic' },
  'glacier-network': { type: 'image', src: cryosphereImg },
  'farm-sensing': { type: 'image', src: agricultureImg },
}

function HydrographGraphic() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-river-deep">
      <svg viewBox="0 0 200 120" className="h-4/5 w-4/5" aria-hidden="true">
        <line x1="0" y1="90" x2="200" y2="90" stroke="#eef1ea" strokeOpacity="0.15" strokeWidth="1" />
        <line x1="0" y1="60" x2="200" y2="60" stroke="#eef1ea" strokeOpacity="0.15" strokeWidth="1" />
        <line x1="0" y1="30" x2="200" y2="30" stroke="#eef1ea" strokeOpacity="0.15" strokeWidth="1" />
        <path
          d="M 0 88 C 30 86, 45 82, 60 70 C 78 55, 85 20, 100 14 C 112 10, 122 22, 135 45 C 150 70, 165 84, 200 86"
          fill="none"
          stroke="#c85a2b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line x1="100" y1="14" x2="100" y2="105" stroke="#c85a2b" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />
        <text x="103" y="16" fill="#c85a2b" fontSize="8" fontFamily="IBM Plex Mono, monospace">
          alert threshold
        </text>
      </svg>
    </div>
  )
}

export default function ImpactStories() {
  return (
    <section id="impact" className="border-b border-ink/10 bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-river">Impact</p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl font-medium text-ink md:text-4xl">
          Work that changed what was possible, not just what was published
        </h2>

        <div className="mt-12 space-y-6">
          {impactStories.map((story) => {
            const media = MEDIA[story.id]
            return (
              <article
                key={story.id}
                className="grid overflow-hidden rounded-lg border border-ink/10 bg-paper md:grid-cols-[280px_1fr_auto]"
              >
                <div className="h-48 md:h-full">
                  {media?.type === 'image' ? (
                    <img src={media.src} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <HydrographGraphic />
                  )}
                </div>
                <div className="p-8">
                  <p className="font-mono text-[11px] tracking-wide text-terracotta uppercase">{story.domain}</p>
                  <h3 className="font-display mt-1 text-2xl text-ink">{story.title}</h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/65">{story.summary}</p>
                </div>
                <div className="border-t border-ink/10 p-8 pt-4 md:w-48 md:border-t-0 md:border-l md:pt-8">
                  <div className="font-display text-3xl text-river">{story.stat}</div>
                  <div className="font-mono text-[11px] tracking-wide text-ink/45 uppercase">{story.statLabel}</div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
