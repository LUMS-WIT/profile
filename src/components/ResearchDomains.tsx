import { researchDomains } from '../data/content'

export default function ResearchDomains() {
  return (
    <section id="domains" className="bg-paper-raised border-b border-ink/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-river">
              Research domains
            </p>
            <h2 className="font-display mt-2 text-3xl font-medium text-ink md:text-4xl">
              Six problems, one instrumentation backbone
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {researchDomains.map((domain) => (
            <article key={domain.id} className="group bg-paper-raised p-7 transition-colors hover:bg-paper">
              <p className="font-mono text-[11px] tracking-wide text-ink/45 uppercase">{domain.eyebrow}</p>
              <h3 className="font-display mt-2 text-xl text-ink">{domain.label}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{domain.summary}</p>
              <div className="mt-6 flex items-baseline gap-2 border-t border-ink/10 pt-4">
                <span className="font-display text-2xl text-river">{domain.metric}</span>
                <span className="font-mono text-[11px] tracking-wide text-ink/45 uppercase">
                  {domain.metricLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
