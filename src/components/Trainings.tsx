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

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
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

        <div className="mt-8 rounded-lg border border-border bg-paper p-7">
          <p className="text-[15px] font-medium text-ink">For-credit LUMS courses taught by WIT faculty</p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2.5 text-[14px] text-body lg:text-[15px]">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
