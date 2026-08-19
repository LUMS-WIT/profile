import { motion } from 'framer-motion'
import { heroPhoto } from '../lib/photos'
import { stats } from '../data/content'

export default function Hero() {
  const bg = heroPhoto()

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="relative h-[560px] w-full bg-river-dark sm:h-[620px]">
        {bg && <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-14">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl"
          >
            Centre for Water Informatics &amp; Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl text-lg text-white/85"
          >
            A hub for hydro-informatics and systems analysis at LUMS —
            studying water, energy, agriculture, and climate as one
            connected system, and building the field instrumentation,
            models, and training that make that analysis possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#research"
              className="rounded bg-white px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-white/90"
            >
              Explore research
            </a>
            <a
              href="#projects"
              className="rounded border border-white/50 px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:border-white"
            >
              Project portfolio
            </a>
          </motion.div>
        </div>
      </div>

      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 border-b border-border px-5 py-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dd className="text-3xl font-semibold text-river">{stat.value}</dd>
            <dt className="mt-1 text-[13px] text-body">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
