import { motion } from 'framer-motion'
import { courses, trainings } from '../data/content'

export default function Trainings() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Training</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
          Workshops &amp; teaching
        </h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-body lg:text-lg">
          WIT's research and training work to cross the boundaries of
          traditional scientific disciplines and foster an interdisciplinary
          understanding of water. That means bridging academia and practice —
          running short-form workshops and summits for practitioners and
          government partners alongside for-credit LUMS courses that carry
          the same systems-thinking approach into the classroom, building
          capacity in innovation and technology for water management.
        </p>

        <h2 className="mt-14 text-xl font-semibold text-ink lg:text-2xl">Workshops &amp; practical training</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
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

        <h2 className="mt-14 text-xl font-semibold text-ink lg:text-2xl">For-credit LUMS courses</h2>
        <p className="mt-3 max-w-3xl text-[15px] text-body lg:text-base">
          Taught by WIT faculty within LUMS's regular degree programs — the
          same systems-across-sectors framing applied in the classroom.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.article
              key={c.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="rounded-lg border border-border bg-paper p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(15,92,86,0.18)]"
            >
              <p className="font-mono text-[13px] text-river">{c.code}</p>
              <h3 className="mt-1.5 text-[15px] font-semibold text-ink lg:text-base">{c.title}</h3>
              <p className="mt-2.5 text-[13px] text-body lg:text-[14px]">{c.term}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
