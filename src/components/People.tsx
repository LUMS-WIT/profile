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
    <section id="people" className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase">People</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">
          Leadership &amp; research team
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => {
            const photo = personPhoto(person.id)
            return (
              <article key={person.id} className="flex items-center gap-4 rounded-md border border-border p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-river-tint text-[15px] font-semibold text-river">
                  {photo ? (
                    <img src={photo} alt="" className="h-full w-full object-cover" />
                  ) : (
                    initials(person.name)
                  )}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">{person.name}</h3>
                  <p className="mt-0.5 text-[13px] leading-snug text-body">{person.title}</p>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-6 text-[14px] text-body">
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
