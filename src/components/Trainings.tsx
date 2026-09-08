import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { courses, trainings } from '../data/content'
import TrainingPortfolio from './TrainingPortfolio'

const SECTIONS = [
  { href: '#programmes', label: 'Commissioned programmes' },
  { href: '#workshops', label: 'Recent workshops & summits' },
  { href: '#courses', label: 'LUMS courses' },
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
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-body lg:text-lg">
            WIT bridges academia and practice. The Centre delivers a structured portfolio of
            executive, professional and technical programmes that agencies and partners commission
            directly, alongside standing workshops and summits for the sector and for-credit LUMS
            courses that carry the same systems-thinking approach into the classroom.
          </p>

          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-[13px] lg:text-[14px]">
            {SECTIONS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="font-medium text-body transition-colors hover:text-river"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div id="programmes" className="scroll-mt-20">
        <TrainingPortfolio />
      </div>

      <section id="workshops" className="scroll-mt-20 border-t border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Track record</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
            Recent workshops &amp; summits
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-body lg:text-base">
            Short-form training and convenings run for practitioners, government partners and the
            research community — the applied experience the commissioned portfolio is built on.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {trainings.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                className="rounded-lg border border-border bg-paper p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(15,92,86,0.18)]"
              >
                <p className="text-[13px] text-river lg:text-sm">{t.format}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-ink">{t.title}</h3>
                <p className="mt-2.5 text-[14px] text-body lg:text-[15px]">{t.date}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="scroll-mt-20 border-t border-border bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Teaching</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
            For-credit LUMS courses
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-body lg:text-base">
            Taught by WIT faculty within LUMS degree programmes — the same systems-across-sectors
            framing applied in the classroom.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => {
              const inner = (
                <>
                  <p className="font-mono text-[13px] text-river">{c.code}</p>
                  <h3 className="mt-1.5 text-[15px] font-semibold text-ink lg:text-base">{c.title}</h3>
                  <p className="mt-2.5 text-[13px] text-body lg:text-[14px]">{c.term}</p>
                  {c.slug && (
                    <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-river">
                      View outline <ArrowRight size={13} />
                    </span>
                  )}
                </>
              )
              const cardClass =
                'block h-full rounded-lg border border-border bg-paper p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(15,92,86,0.18)]'
              return (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                >
                  {c.slug ? (
                    <Link to={`/training/${c.slug}`} className={`${cardClass} hover:border-river`}>
                      {inner}
                    </Link>
                  ) : (
                    <article className={cardClass}>{inner}</article>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
