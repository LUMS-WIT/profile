import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { researchDomains } from '../data/content'
import SystemsDiagram from '../components/SystemsDiagram'

export default function Research() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Research</p>
            <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Water as a system, not a single problem
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-body lg:text-lg">
              WIT studies water through systems thinking — the physical,
              energy, agricultural, and policy layers that interact
              across a basin. Instrumentation is how we get the data;
              it isn't the point. Open a theme below for what we
              actually do inside it, who we work with, and which
              projects it runs through.
            </p>
          </div>
          <SystemsDiagram size={220} className="hidden shrink-0 lg:block" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchDomains.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/research/${domain.id}`}
                className="group flex h-full flex-col justify-between rounded-lg border border-border p-7 transition-all hover:-translate-y-0.5 hover:border-river hover:shadow-[0_12px_28px_-8px_rgba(15,92,86,0.18)]"
              >
                <div>
                  <h2 className="text-lg font-semibold text-ink lg:text-xl">{domain.label}</h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-body">{domain.summary}</p>
                </div>
                <span className="mt-6 flex items-center gap-1 text-[13px] font-medium text-river">
                  {domain.full ? 'Read full theme' : 'Overview'}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-[14px] text-body lg:text-[15px]">
          These themes group WIT's broader research areas around the
          angles this site covers in depth — full list of all research
          themes on{' '}
          <a
            href="https://wit.lums.edu.pk/research-themes"
            target="_blank"
            rel="noreferrer"
            className="text-river underline underline-offset-2"
          >
            wit.lums.edu.pk
          </a>
          .
        </p>
      </div>
    </section>
  )
}
