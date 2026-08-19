import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { systemPressures } from '../data/content'
import { pressurePhoto } from '../lib/photos'
import SystemsDiagram from './SystemsDiagram'

const SECTOR_VAR: Record<string, string> = {
  water: 'var(--color-sector-water)',
  energy: 'var(--color-sector-energy)',
  agriculture: 'var(--color-sector-agriculture)',
  climate: 'var(--color-sector-climate)',
  population: 'var(--color-sector-population)',
}

const AUTOPLAY_MS = 6000

export default function SystemPressures() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (paused || reducedMotion.current) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % systemPressures.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused])

  const active = systemPressures[index]
  const photo = pressurePhoto(active.sector)

  function go(delta: number) {
    setIndex((i) => (i + delta + systemPressures.length) % systemPressures.length)
  }

  return (
    <section className="border-b border-border bg-panel py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[13px] font-medium tracking-wide uppercase lg:text-sm" style={{ color: '#7fb8d9' }}>
              Why systems thinking
            </p>
            <h2 className="mt-2 max-w-xl text-2xl font-semibold sm:text-3xl lg:text-4xl">
              These aren't five separate crises
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/75 lg:text-lg">
              Water, energy, agriculture, climate, and population pressure
              in Pakistan compound each other in the same events, on the
              same timelines. Treat them as separate problems and every
              fix creates a new one somewhere else. That's the case for
              analyzing them as one system instead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden justify-self-center lg:block"
          >
            <SystemsDiagram size={220} dark />
          </motion.div>
        </div>

        <div
          className="mt-12 lg:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-lg border border-white/15 bg-black/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.sector}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2"
              >
                <div className="relative h-56 lg:h-full lg:min-h-[320px]">
                  {photo ? (
                    <>
                      <img src={photo} alt="" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-panel/70 via-transparent to-transparent lg:bg-gradient-to-r" />
                      {active.photoCredit && (
                        <a
                          href={active.photoCredit.url}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute right-2 bottom-2 rounded bg-panel/60 px-2 py-1 text-[11px] text-white/70 backdrop-blur-sm hover:text-white"
                        >
                          Photo: {active.photoCredit.author}, Wikimedia Commons
                        </a>
                      )}
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center bg-white/[0.04]">
                      <SystemsDiagram size={180} dark showLabels={false} />
                    </div>
                  )}
                </div>

                <div className="p-7 lg:p-10">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: SECTOR_VAR[active.sector] }} />
                    <span className="text-[13px] font-medium tracking-wide text-white/60 uppercase">{active.label}</span>
                  </div>
                  <div className="mt-3 text-4xl font-semibold lg:text-5xl">{active.value}</div>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70 lg:text-base">{active.note}</p>
                  <p className="mt-5 text-[12px] text-white/40">{active.source}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute top-1/2 left-3 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-panel/50 text-white backdrop-blur-sm hover:bg-panel/80 lg:flex"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute top-1/2 right-3 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-panel/50 text-white backdrop-blur-sm hover:bg-panel/80 lg:flex"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {systemPressures.map((p, i) => (
              <button
                key={p.sector}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${p.label}`}
                aria-current={i === index}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === index ? '22px' : '8px',
                  backgroundColor: i === index ? SECTOR_VAR[p.sector] : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end border-t border-white/15 pt-6">
          <Link
            to="/research/systems-modelling"
            className="flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-white hover:underline"
          >
            How WIT models this as one system <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
