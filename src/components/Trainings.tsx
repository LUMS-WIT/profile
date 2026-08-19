import { trainings } from '../data/content'

export default function Trainings() {
  return (
    <section id="training" className="border-b border-ink/10 bg-ink py-20 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-glacier">Training portfolio</p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl font-medium md:text-4xl">
          We teach the tools we build, not just the theory behind them
        </h2>
        <p className="mt-4 max-w-2xl text-paper/65">
          Courses run with real WIT datasets and instruments — built for
          practitioners who need to leave able to run the thing, not just
          describe it.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-paper/15 bg-paper/15 sm:grid-cols-2">
          {trainings.map((t) => (
            <article key={t.id} className="bg-ink p-7">
              <p className="font-mono text-[11px] tracking-wide text-glacier uppercase">{t.format}</p>
              <h3 className="font-display mt-2 text-xl text-paper">{t.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/65">{t.summary}</p>
              <p className="font-mono mt-5 text-[11px] tracking-wide text-paper/45 uppercase">
                For: {t.audience}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
