import { motion } from 'framer-motion'
import heroImg from '../assets/hero-glacier.jpg'

const STATS = [
  { value: '6', label: 'research domains' },
  { value: '30+', label: 'field sensors live' },
  { value: '12', label: 'partner institutions' },
  { value: '48hr', label: 'flood warning lead time' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-16 text-paper">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
      <div className="bg-contours absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[13px] uppercase tracking-[0.15em] text-glacier"
        >
          31.4708° N, 74.4111° E — LUMS, Lahore · Water Informatics &amp; Technology Lab
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] font-medium tracking-tight md:text-6xl"
        >
          We put instruments where the water actually is.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75"
        >
          From glacier ablation stakes in the Karakoram to soil-moisture probes
          on smallholder farms, WIT builds and operates the sensor networks
          and data pipelines behind Pakistan's flood, climate, and
          agriculture research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#sensors"
            className="rounded-full bg-glacier px-5 py-2.5 font-mono text-[13px] uppercase tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            See the sensor network
          </a>
          <a
            href="#projects"
            className="rounded-full border border-paper/25 px-5 py-2.5 font-mono text-[13px] uppercase tracking-wide text-paper transition-colors hover:border-paper/60"
          >
            Browse project portfolio
          </a>
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-paper/15 bg-paper/15 px-6 sm:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-ink/90 px-5 py-6 backdrop-blur-sm">
            <dt className="font-mono text-[11px] tracking-wide text-paper/50 uppercase">{stat.label}</dt>
            <dd className="font-display mt-1 text-3xl text-glacier">{stat.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
