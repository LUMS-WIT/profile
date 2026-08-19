import { motion } from 'framer-motion'
import { people, peopleTotal } from '../data/content'
import { personPhoto } from '../lib/photos'

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function People() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">People</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
          Leadership &amp; research team
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, i) => {
            const photo = personPhoto(person.id)
            return (
              <motion.article
                key={person.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="flex items-center gap-5 rounded-lg border border-border p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(15,92,86,0.18)]"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-river-tint text-base font-semibold text-river">
                  {photo ? (
                    <img src={photo} alt="" className="h-full w-full object-cover" />
                  ) : (
                    initials(person.name)
                  )}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{person.name}</h3>
                  <p className="mt-1 text-[14px] leading-snug text-body">{person.title}</p>
                </div>
              </motion.article>
            )
          })}
        </div>

        <p className="mt-8 text-[14px] text-body lg:text-[15px]">
          Full team of {peopleTotal}+ faculty, researchers, technical, and
          administrative staff at{' '}
          <a
            href="https://wit.lums.edu.pk/people"
            target="_blank"
            rel="noreferrer"
            className="text-river underline underline-offset-2"
          >
            wit.lums.edu.pk/people
          </a>
          .
        </p>
      </div>
    </section>
  )
}
