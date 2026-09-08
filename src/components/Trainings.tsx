import { Link } from 'react-router-dom'
import { courses, trainings } from '../data/content'
import TrainingPortfolio from './TrainingPortfolio'

const TRACK_LINKS = [
  { href: '#executive', label: 'Executive' },
  { href: '#professional', label: 'Professional development' },
  { href: '#technical', label: 'Technical modules' },
]


export default function Trainings() {
  return (
    <>
      <section className="bg-surface pt-16 pb-10 sm:pt-24 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Training</p>
          <h1 className="mt-2 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Training &amp; capacity building
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-body lg:text-lg">
            A structured portfolio of executive, professional and technical programmes that agencies
            and partners commission directly, alongside the workshops, summits and for-credit LUMS
            courses that carry the same systems thinking into the classroom.
          </p>

          <nav className="mt-8 flex flex-wrap items-center gap-x-1 gap-y-2 border-t border-border pt-5 text-[13px] lg:text-[14px]">
            <span className="mr-2 text-body/50">Jump to</span>
            {TRACK_LINKS.map((s, i) => (
              <span key={s.href} className="flex items-center">
                {i > 0 && <span className="mx-2 text-border">/</span>}
                <a href={s.href} className="font-medium text-body transition-colors hover:text-river">
                  {s.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </section>

      <TrainingPortfolio />

      <section className="border-t border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
            <div>
              <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">
                Track record
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ink lg:text-3xl">
                Recent workshops &amp; summits
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                Short-form training and convenings run for practitioners, government partners and the
                research community. This is the applied experience the commissioned portfolio is built
                on.
              </p>
            </div>

            <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-paper">
              {trainings.map((t) => (
                <li key={t.id} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 px-6 py-4">
                  <span className="w-28 shrink-0 text-[12px] font-medium uppercase tracking-wide text-river">
                    {t.format}
                  </span>
                  <span className="min-w-0 flex-1 text-[15px] text-ink">{t.title}</span>
                  <span className="text-[13px] text-body/70">{t.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
            <div>
              <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">
                Teaching
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ink lg:text-3xl">
                For-credit LUMS courses
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                Taught by WIT faculty within LUMS degree programmes. A condensed three-day version of
                the climate governance course is offered as module{' '}
                <Link to="/training#technical" className="text-river hover:underline">
                  T9
                </Link>{' '}
                in the catalogue above.
              </p>
            </div>

            <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-paper">
              {courses.map((c) => (
                <li key={c.code} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 px-6 py-4">
                  <span className="w-36 shrink-0 font-mono text-[12px] text-river">{c.code}</span>
                  <span className="min-w-0 flex-1 text-[15px] text-ink">{c.title}</span>
                  <span className="text-[13px] text-body/70">{c.term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
