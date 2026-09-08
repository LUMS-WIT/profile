import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/content'

type Filter = 'All' | 'Ongoing' | 'Completed'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const rows = filter === 'All' ? projects : projects.filter((p) => p.status === filter)
  const ongoingCount = projects.filter((p) => p.status === 'Ongoing').length

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">
          Project register
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          {projects.length} research projects
        </h2>
        <p className="mt-3 text-[15px] text-body">
          {ongoingCount} ongoing, {projects.length - ongoingCount} completed. Funded by national and
          international partners.
        </p>

        <div className="mt-8 flex gap-2">
          {(['All', 'Ongoing', 'Completed'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
                filter === f
                  ? 'border-river bg-river text-paper'
                  : 'border-border text-body hover:border-river hover:text-river'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 overflow-x-auto rounded-lg border border-border bg-paper"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="text-[12px] uppercase tracking-wide text-body/50">
                <th className="px-5 py-3.5 font-medium">Project</th>
                <th className="px-5 py-3.5 font-medium">PI</th>
                <th className="px-5 py-3.5 font-medium">Funder</th>
                <th className="px-5 py-3.5 font-medium">Years</th>
                <th className="px-5 py-3.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((p) => (
                <tr key={p.id} className="align-top text-[15px] transition-colors hover:bg-surface">
                  <td className="px-5 py-4 font-medium text-ink">{p.name}</td>
                  <td className="px-5 py-4 text-body">{p.pi}</td>
                  <td className="px-5 py-4 text-body">{p.funder}</td>
                  <td className="px-5 py-4 whitespace-nowrap text-body">{p.years}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] text-body">
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 rounded-full ${
                          p.status === 'Ongoing' ? 'bg-river' : 'bg-border'
                        }`}
                      />
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
