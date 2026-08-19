import { people } from '../data/content'

export default function People() {
  return (
    <section id="people" className="bg-paper-raised border-b border-ink/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-river">Key people</p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl font-medium text-ink md:text-4xl">
          The people who own each domain
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <article key={p.id} className="bg-paper-raised p-7">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-wide text-ink/40">{p.fieldId}</span>
              </div>
              <h3 className="font-display mt-3 text-xl text-ink">{p.name}</h3>
              <p className="mt-1 text-[14px] text-river">{p.title}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/60">{p.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
