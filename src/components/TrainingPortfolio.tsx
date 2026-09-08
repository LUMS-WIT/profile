import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import {
  trainingPortfolio,
  trainingProgrammes,
  trainingTracks,
  type TrainingProgramme,
} from '../data/content'

const TRACK_LABEL: Record<TrainingProgramme['track'], string> = {
  executive: 'Executive',
  professional: 'Professional development',
  technical: 'Technical module',
}

function ProgrammeCard({ p }: { p: TrainingProgramme }) {
  const [open, setOpen] = useState(false)
  const panelId = `prog-${p.code}`

  return (
    <div
      className={`rounded-lg border bg-paper transition-colors ${
        open ? 'border-river' : 'border-border hover:border-river/50'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 p-6 text-left"
      >
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-river-tint font-mono text-[13px] font-semibold text-river">
          {p.code}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-body/70">
            <span className="uppercase tracking-wide">{TRACK_LABEL[p.track]}</span>
            <span aria-hidden>·</span>
            <span>
              {p.days} day{p.days > 1 ? 's' : ''}
            </span>
            <span aria-hidden>·</span>
            <span>{p.objectives.length} learning objectives</span>
          </span>
          <span className="mt-1 block text-[15px] font-semibold text-ink lg:text-base">{p.title}</span>
          <span className="mt-1 block text-[13px] leading-snug text-body lg:text-[14px]">{p.tagline}</span>

          <span className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-surface px-1.5 py-0.5 text-[11px] font-medium text-body"
              >
                {t}
              </span>
            ))}
          </span>
        </span>

        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-river transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-7 pt-6">
              <p className="text-[14px] leading-relaxed text-body lg:text-[15px]">{p.overview}</p>

              <dl className="mt-5 grid gap-x-8 gap-y-3 text-[13px] sm:grid-cols-2 lg:text-[14px]">
                <div>
                  <dt className="font-semibold text-ink">Format</dt>
                  <dd className="mt-0.5 text-body">{p.format}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Intended for</dt>
                  <dd className="mt-0.5 text-body">{p.audience}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-semibold text-ink">Lead faculty</dt>
                  <dd className="mt-0.5 text-body">{p.leadFaculty.join(', ')}</dd>
                </div>
              </dl>

              <h4 className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-river">
                Learning objectives
              </h4>
              <ul className="mt-2 space-y-1.5">
                {p.objectives.map((o) => (
                  <li key={o} className="flex gap-2.5 text-[14px] leading-relaxed text-body">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-river" />
                    {o}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-river">
                Programme outline
              </h4>
              <ol className="mt-2 space-y-3">
                {p.outline.map((d) => (
                  <li key={d.label} className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                    <span className="text-[13px] font-semibold text-ink">{d.label}</span>
                    <span className="text-[14px] leading-relaxed text-body">
                      <span className="font-medium text-ink">{d.focus}.</span> {d.content}
                    </span>
                  </li>
                ))}
              </ol>

              <h4 className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-river">
                What participants take away
              </h4>
              <ul className="mt-2 space-y-1.5">
                {p.takeaways.map((t) => (
                  <li key={t} className="flex gap-2.5 text-[14px] leading-relaxed text-body">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-river" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TrainingPortfolio() {
  const [track, setTrack] = useState<'all' | TrainingProgramme['track']>('all')
  const [tag, setTag] = useState<string | null>(null)

  const allTags = useMemo(
    () => [...new Set(trainingProgrammes.flatMap((p) => p.tags))].sort((a, b) => a.localeCompare(b)),
    [],
  )

  const filtered = useMemo(
    () =>
      trainingProgrammes.filter(
        (p) => (track === 'all' || p.track === track) && (tag === null || p.tags.includes(tag)),
      ),
    [track, tag],
  )

  const trackButtons: { id: 'all' | TrainingProgramme['track']; label: string; count: number }[] = [
    { id: 'all', label: 'All programmes', count: trainingProgrammes.length },
    ...trainingTracks.map((t) => ({
      id: t.id,
      label: t.label,
      count: trainingProgrammes.filter((p) => p.track === t.id).length,
    })),
  ]

  return (
    <section className="border-t border-border bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[13px] font-medium uppercase tracking-wide text-river lg:text-sm">
          Professional Training Portfolio · {trainingPortfolio.period}
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
          Commissioned programmes
        </h2>
        <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-body lg:text-[17px]">
          {trainingPortfolio.intro}
        </p>

        {/* Track overview */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {trainingTracks.map((t) => (
            <div key={t.id} className="rounded-lg border border-border bg-surface p-5">
              <p className="font-mono text-[12px] font-semibold text-river">Track {t.code}</p>
              <p className="mt-1 text-[15px] font-semibold text-ink">{t.label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-body">{t.designedFor}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-body/70">{t.format}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-wrap gap-2">
            {trackButtons.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setTrack(b.id)}
                aria-pressed={track === b.id}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  track === b.id
                    ? 'border-river bg-river text-paper'
                    : 'border-border text-body hover:border-river hover:text-river'
                }`}
              >
                {b.label} <span className="opacity-60">{b.count}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-medium uppercase tracking-wide text-body/60">Topic</span>
            <button
              type="button"
              onClick={() => setTag(null)}
              aria-pressed={tag === null}
              className={`rounded-full border px-3 py-1 text-[12px] transition-colors ${
                tag === null
                  ? 'border-river bg-river text-paper'
                  : 'border-border text-body hover:border-river hover:text-river'
              }`}
            >
              Any
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag((cur) => (cur === t ? null : t))}
                aria-pressed={tag === t}
                className={`rounded-full border px-3 py-1 text-[12px] transition-colors ${
                  tag === t
                    ? 'border-river bg-river text-paper'
                    : 'border-border text-body hover:border-river hover:text-river'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[13px] text-body/70">
          Showing {filtered.length} of {trainingProgrammes.length} programmes — select a card for the full outline
        </p>

        {/* Cards */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {filtered.map((p) => (
            <ProgrammeCard key={p.code} p={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-8 text-[14px] text-body">
            No programmes match that combination.{' '}
            <button
              type="button"
              onClick={() => {
                setTrack('all')
                setTag(null)
              }}
              className="font-medium text-river underline underline-offset-2"
            >
              Reset filters
            </button>
          </p>
        )}

        {/* Commercial terms */}
        <div className="mt-14 rounded-lg border border-border bg-surface p-6 lg:p-8">
          <h3 className="text-[15px] font-semibold text-ink lg:text-base">Commissioning &amp; delivery</h3>
          <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {trainingPortfolio.terms.map((t) => (
              <div key={t.heading}>
                <dt className="text-[13px] font-semibold text-ink lg:text-[14px]">{t.heading}</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-body lg:text-[14px]">{t.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 border-t border-border pt-4">
            <p className="text-[13px] font-semibold text-ink lg:text-[14px]">Also available on request</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {trainingPortfolio.additionalTopics.map((t) => (
                <li
                  key={t}
                  className="rounded border border-border bg-paper px-2 py-1 text-[12px] text-body"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
