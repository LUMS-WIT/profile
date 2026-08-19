import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { heroPhoto } from '../lib/photos'

const HERO_CREDIT = {
  author: 'Jamalguide',
  url: 'https://commons.wikimedia.org/wiki/File:River-indus-near-chilas.jpg',
}

export default function Hero() {
  const bg = heroPhoto()

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] w-full overflow-hidden bg-river-dark sm:h-[640px] lg:h-[720px]">
        {bg && (
          <img
            src={bg}
            alt="The Indus River winding through the mountains near Chilas, fed by snowmelt from the peaks above"
            className="hero-kenburns absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* drifting cloud-shadow layer — sky band only */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] overflow-hidden" aria-hidden="true">
          <div className="hero-cloud hero-cloud-a" />
          <div className="hero-cloud hero-cloud-b" />
        </div>

        {/* soft sun glow */}
        <div className="hero-sun-glow pointer-events-none absolute" aria-hidden="true" />

        {/* light shimmer across the river band */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[8%] h-[18%] overflow-hidden" aria-hidden="true">
          <div className="hero-shimmer" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-panel/85 via-panel/35 to-panel/10" />

        <a
          href={HERO_CREDIT.url}
          target="_blank"
          rel="noreferrer"
          className="absolute right-3 bottom-3 rounded bg-panel/60 px-2 py-1 text-[11px] text-white/70 backdrop-blur-sm hover:text-white"
        >
          Photo: {HERO_CREDIT.author}, Wikimedia Commons
        </a>

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-8 lg:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Centre for Water Informatics &amp; Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-white/85 lg:max-w-2xl lg:text-xl"
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
            className="mt-8 flex flex-wrap gap-3 lg:mt-10"
          >
            <Link
              to="/research"
              className="rounded bg-white px-6 py-3 text-[14px] font-medium text-panel transition-colors hover:bg-white/90 lg:px-7 lg:py-3.5 lg:text-[15px]"
            >
              Explore research
            </Link>
            <Link
              to="/projects"
              className="rounded border border-white/50 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:border-white lg:px-7 lg:py-3.5 lg:text-[15px]"
            >
              Project portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
