import { motion } from 'framer-motion'
import { newsItems } from '../data/content'

export default function News() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">News</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">News &amp; activity</h1>
        <p className="mt-4 max-w-2xl text-[16px] text-body lg:text-lg">
          What's currently happening at WIT — workshops, mentorship
          cohorts, talks, and events.
        </p>

        <ul className="mt-12 divide-y divide-border rounded-lg border border-border">
          {newsItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.03 }}
              className="px-7 py-6 transition-colors hover:bg-surface"
            >
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1.5">
                <span className="w-36 shrink-0 text-[13px] text-body/70 lg:text-sm">{item.date}</span>
                <h2 className="text-base font-medium text-ink lg:text-lg">{item.title}</h2>
              </div>
              {item.description && (
                <p className="mt-2.5 pl-0 text-[14px] leading-relaxed text-body sm:pl-[9.5rem] lg:text-[15px]">
                  {item.description}
                </p>
              )}
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 text-[14px] text-body lg:text-[15px]">
          Full archive on{' '}
          <a
            href="https://wit.lums.edu.pk/wit-news"
            target="_blank"
            rel="noreferrer"
            className="text-river underline underline-offset-2"
          >
            wit.lums.edu.pk/wit-news
          </a>
          .
        </p>
      </div>
    </section>
  )
}
