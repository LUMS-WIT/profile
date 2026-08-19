import { motion } from 'framer-motion'
import { stats } from '../data/content'

export default function About() {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr] lg:gap-16 lg:px-8"
      >
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">About WIT</p>
        <div>
          <h2 className="max-w-2xl text-2xl leading-snug font-semibold text-ink sm:text-3xl lg:text-4xl">
            A hub for hydro-informatics and systems analysis
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-body lg:text-lg">
            <p>
              The Centre for Water Informatics &amp; Technology (WIT) was
              established at LUMS in 2016 to cross the boundaries of
              traditional scientific disciplines and foster an
              interdisciplinary understanding of water.
            </p>
            <p>
              WIT bridges academia and practice — building cooperation
              between the academic community, industry, development
              agencies, NGOs, public administration, and local
              communities to build capacity in innovation and technology
              for water management.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-semibold text-river lg:text-3xl">{stat.value}</dd>
                <dt className="mt-1 text-[13px] text-body lg:text-sm">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  )
}
