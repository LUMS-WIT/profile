import { courses, trainings } from '../data/content'

export default function Trainings() {
  return (
    <section id="training" className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase">Training</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">
          Workshops &amp; teaching
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
          {trainings.map((t) => (
            <article key={t.id} className="bg-paper p-6">
              <p className="text-[13px] text-river">{t.format}</p>
              <h3 className="mt-1 text-[16px] font-semibold text-ink">{t.title}</h3>
              <p className="mt-2 text-[13px] text-body">{t.date}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-border bg-paper p-6">
          <p className="text-[14px] font-medium text-ink">For-credit LUMS courses taught by WIT faculty</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-body">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
