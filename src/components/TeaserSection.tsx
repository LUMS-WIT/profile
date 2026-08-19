import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function TeaserSection({
  eyebrow,
  title,
  viewAllHref,
  viewAllLabel,
  surface = false,
  children,
}: {
  eyebrow: string
  title: string
  viewAllHref: string
  viewAllLabel: string
  surface?: boolean
  children: ReactNode
}) {
  return (
    <section className={`border-b border-border py-16 sm:py-24 ${surface ? 'bg-surface' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">{eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">{title}</h2>
          </div>
          <Link
            to={viewAllHref}
            className="group flex items-center gap-1 text-[14px] font-medium text-river hover:underline lg:text-[15px]"
          >
            {viewAllLabel} <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-10 lg:mt-12">{children}</div>
      </motion.div>
    </section>
  )
}
