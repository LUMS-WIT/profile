import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { heroPhoto } from '../lib/photos'

export default function Hero() {
  const bg = heroPhoto()

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] w-full bg-river-dark sm:h-[640px] lg:h-[720px]">
        {bg && <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-panel/85 via-panel/35 to-panel/10" />

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
