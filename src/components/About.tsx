import { motion } from 'framer-motion'

const CHALLENGE_STATS = [
  { value: '93%', label: 'of Pakistan’s water goes to agriculture' },
  { value: '263M', label: 'projected population by 2050' },
  { value: 'Lowest', label: 'crop yield per unit of water, globally' },
]

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

          <p className="mt-10 text-[15px] font-medium text-ink lg:text-base">
            Why this is a systems problem, not a single fix
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {CHALLENGE_STATS.map((stat) => (
              <div key={stat.label} className="bg-paper p-6">
                <dd className="text-3xl font-semibold text-river lg:text-4xl">{stat.value}</dd>
                <dt className="mt-1.5 text-[13px] leading-snug text-body lg:text-sm">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  )
}
