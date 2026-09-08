import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import {
  courseDetails,
  trainingCategories,
  trainingPortfolio,
  trainingProgrammes,
  trainingTracks,
  type CourseDetail,
  type TrainingCategory,
  type TrainingProgramme,
} from '../data/content'

const creditCourses = Object.values(courseDetails)

function ProgrammeCard({ p }: { p: TrainingProgramme }) {
  const [open, setOpen] = useState(false)
  const panelId = `prog-${p.code}`

  return (
    <div className={`rounded-lg border bg-paper ${open ? 'border-river' : 'border-border'}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-river-tint font-mono text-[12px] font-semibold text-river">
          {p.code}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-semibold text-ink">{p.title}</span>
          <span className="mt-1 block text-[13px] leading-snug text-body">{p.tagline}</span>
          <span className="mt-2 block text-[12px] text-body/60">
            {p.days} day{p.days > 1 ? 's' : ''} · {p.objectives.length} learning objectives
          </span>
        </span>

        <ChevronDown
          size={17}
          className={`mt-1 shrink-0 text-body/50 transition-transform ${open ? 'rotate-180 text-river' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-5 pb-6 pt-5">
              <p className="text-[14px] leading-relaxed text-body">{p.overview}</p>

              <dl className="mt-5 space-y-3 text-[13px]">
                <div className="sm:flex sm:gap-3">
                  <dt className="shrink-0 font-semibold text-ink sm:w-28">Format</dt>
                  <dd className="text-body">{p.format}</dd>
                </div>
                <div className="sm:flex sm:gap-3">
                  <dt className="shrink-0 font-semibold text-ink sm:w-28">Intended for</dt>
                  <dd className="text-body">{p.audience}</dd>
                </div>
              </dl>

              <h4 className="mt-6 text-[12px] font-semibold uppercase tracking-wide text-body/60">
                Learning objectives
              </h4>
              <ul className="mt-2 space-y-1.5">
                {p.objectives.map((o) => (
                  <li key={o} className="flex gap-2.5 text-[13px] leading-relaxed text-body">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-river" />
                    {o}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-[12px] font-semibold uppercase tracking-wide text-body/60">
                Programme outline
              </h4>
              <ol className="mt-2 space-y-2.5">
                {p.outline.map((d) => (
                  <li key={d.label} className="grid gap-0.5 sm:grid-cols-[4.5rem_1fr] sm:gap-4">
                    <span className="text-[13px] font-semibold text-ink">{d.label}</span>
                    <span className="text-[13px] leading-relaxed text-body">
                      <span className="font-medium text-ink">{d.focus}.</span> {d.content}
                    </span>
                  </li>
                ))}
              </ol>

              <h4 className="mt-6 text-[12px] font-semibold uppercase tracking-wide text-body/60">
                What participants take away
              </h4>
              <ul className="mt-2 space-y-1.5">
                {p.takeaways.map((t) => (
                  <li key={t} className="flex gap-2.5 text-[13px] leading-relaxed text-body">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-river" />
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

function CourseCard({ c }: { c: CourseDetail }) {
  return (
    <Link
      to={`/training/${c.slug}`}
      className="flex items-start gap-4 rounded-lg border border-border bg-paper p-5 transition-colors hover:border-river"
    >
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-river-tint font-mono text-[12px] font-semibold text-river">
        {c.code}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold text-ink">{c.title}</span>
        <span className="mt-1 block text-[13px] leading-snug text-body">{c.tagline}</span>
        <span className="mt-2 flex items-center gap-1 text-[12px] text-body/60">
          For-credit LUMS course ({c.refCode})
        </span>
        <span className="mt-1.5 flex items-center gap-1 text-[12px] font-medium text-river">
          View outline <ArrowRight size={12} />
        </span>
      </span>
    </Link>
  )
}

export default function TrainingPortfolio() {
  const [cat, setCat] = useState<TrainingCategory | null>(null)

  const groups = useMemo(
    () =>
      trainingTracks.map((track) => ({
        track,
        programmes: trainingProgrammes.filter(
          (p) => p.track === track.id && (cat === null || p.category === cat),
        ),
        courses: creditCourses.filter(
          (c) => c.track === track.id && (cat === null || c.category === cat),
        ),
      })),
    [cat],
  )

  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-[13px] font-medium uppercase tracking-wide text-river lg:text-sm">
              Professional Training Portfolio, {trainingPortfolio.period}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">Programme catalogue</h2>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body lg:text-base">
          {trainingPortfolio.intro}
        </p>

        {/* Topic filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCat(null)}
            aria-pressed={cat === null}
            className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
              cat === null
                ? 'border-river bg-river text-paper'
                : 'border-border text-body hover:border-river hover:text-river'
            }`}
          >
            All topics
          </button>
          {trainingCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat((cur) => (cur === c.id ? null : c.id))}
              aria-pressed={cat === c.id}
              className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
                cat === c.id
                  ? 'border-river bg-river text-paper'
                  : 'border-border text-body hover:border-river hover:text-river'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Track-grouped sections */}
        {groups.map(({ track, programmes, courses }) => {
          const total = programmes.length + courses.length
          return (
            <section key={track.id} id={track.id} className="mt-12 scroll-mt-24">
              <div className="flex items-baseline gap-3 border-b border-border pb-3">
                <span className="font-mono text-[12px] font-semibold text-river">Track {track.code}</span>
                <h3 className="text-lg font-semibold text-ink lg:text-xl">{track.label}</h3>
              </div>
              <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-body/80">
                {track.designedFor}. {track.format}.
              </p>

              {total === 0 ? (
                <p className="mt-5 text-[13px] text-body/60">
                  Nothing in this track under{' '}
                  {trainingCategories.find((c) => c.id === cat)?.label}.
                </p>
              ) : (
                <div className="mt-5 grid gap-3 lg:grid-cols-2">
                  {programmes.map((p) => (
                    <ProgrammeCard key={p.code} p={p} />
                  ))}
                  {courses.map((c) => (
                    <CourseCard key={c.slug} c={c} />
                  ))}
                </div>
              )}
            </section>
          )
        })}

        {/* Commissioning & delivery */}
        <div className="mt-16 border-t border-border pt-8">
          <h3 className="text-[15px] font-semibold text-ink">Commissioning &amp; delivery</h3>
          <dl className="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {trainingPortfolio.terms.map((t) => (
              <div key={t.heading}>
                <dt className="text-[13px] font-semibold text-ink">{t.heading}</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-body">{t.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5">
            <p className="text-[13px] font-semibold text-ink">Also available on request</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-body">
              {trainingPortfolio.additionalTopics.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
