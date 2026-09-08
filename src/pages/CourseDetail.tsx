import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { courseDetails } from '../data/content'

export default function CourseDetail() {
  const { courseId } = useParams()
  const course = courseId ? courseDetails[courseId] : undefined

  if (!course) return <Navigate to="/training" replace />

  return (
    <motion.section
      key={course.slug}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link
          to={`/training#${course.track}`}
          className="flex items-center gap-1.5 text-[13px] font-medium text-river hover:underline lg:text-sm"
        >
          <ArrowLeft size={14} /> Back to the programme catalogue
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-river-tint font-mono text-[12px] font-semibold text-river">
            {course.code}
          </span>
          <span className="font-mono text-[13px] text-body/70">
            For-credit LUMS course · {course.refCode}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">{course.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-body lg:text-xl">{course.overview}</p>
        <p className="mt-4 text-[13px] font-medium text-body/70 lg:text-sm">{course.cadence}</p>

        {/* Modules */}
        <h2 className="mt-14 text-xl font-semibold text-ink lg:text-2xl">Course outline</h2>
        <div className="mt-6 space-y-5">
          {course.modules.map((m, i) => (
            <div key={m.name} className="rounded-lg border border-border bg-paper p-6 lg:p-7">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[12px] font-semibold text-river">
                  Module {i + 1}
                </span>
                <span className="text-[12px] text-body/60">{m.weeks}</span>
              </div>
              <h3 className="mt-1.5 text-lg font-semibold text-ink">{m.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body lg:text-[15px]">{m.summary}</p>

              <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-river">
                Learning objectives
              </p>
              <ul className="mt-2 space-y-1.5">
                {m.objectives.map((o) => (
                  <li key={o} className="flex gap-2.5 text-[14px] leading-relaxed text-body">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-river" />
                    {o}
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-l-2 border-border pl-3 text-[13px] leading-relaxed text-body/80">
                <span className="font-medium text-ink">Guiding question.</span> {m.guiding}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Outcomes */}
          <div>
            <h2 className="text-xl font-semibold text-ink lg:text-2xl">Course learning outcomes</h2>
            <ul className="mt-5 space-y-4">
              {course.outcomes.map((o) => (
                <li key={o.id} className="grid grid-cols-[3.25rem_1fr] gap-3">
                  <span className="font-mono text-[13px] font-semibold text-river">{o.id}</span>
                  <span className="text-[14px] leading-relaxed text-body lg:text-[15px]">{o.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prerequisites */}
          <div>
            <h2 className="text-xl font-semibold text-ink lg:text-2xl">Prerequisites</h2>
            <dl className="mt-5 space-y-5">
              {course.prerequisites.map((p) => (
                <div key={p.code}>
                  <dt className="font-mono text-[13px] font-semibold text-ink">{p.code}</dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-body lg:text-[15px]">{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Capstone */}
        <h2 className="mt-14 text-xl font-semibold text-ink lg:text-2xl">Capstone project</h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-body lg:text-base">{course.project}</p>
      </div>
    </motion.section>
  )
}
