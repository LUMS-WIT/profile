import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/content'

type Filter = 'All' | 'Ongoing' | 'Completed'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const rows = filter === 'All' ? projects : projects.filter((p) => p.status === filter)
  const ongoingCount = projects.filter((p) => p.status === 'Ongoing').length

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Projects</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
          {projects.length} research projects, {ongoingCount} ongoing
        </h1>

        <div className="mt-8 flex gap-2">
          {(['All', 'Ongoing', 'Completed'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded border px-4 py-2 text-[14px] transition-colors ${
                filter === f
                  ? 'border-river bg-river text-white'
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
          className="mt-6 overflow-x-auto rounded-lg border border-border"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-surface text-[13px] text-body">
                <th className="border-b border-border px-5 py-4 font-medium">Project</th>
                <th className="border-b border-border px-5 py-4 font-medium">PI</th>
                <th className="border-b border-border px-5 py-4 font-medium">Funder</th>
                <th className="border-b border-border px-5 py-4 font-medium">Years</th>
                <th className="border-b border-border px-5 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.id} className="text-[15px] transition-colors hover:bg-surface">
                  <td className="border-b border-border px-5 py-4 font-medium text-ink">{p.name}</td>
                  <td className="border-b border-border px-5 py-4 text-body">{p.pi}</td>
                  <td className="border-b border-border px-5 py-4 text-body">{p.funder}</td>
                  <td className="border-b border-border px-5 py-4 whitespace-nowrap text-body">{p.years}</td>
                  <td className="border-b border-border px-5 py-4">
                    <span
                      className={`rounded px-2.5 py-1 text-[13px] ${
                        p.status === 'Ongoing' ? 'bg-river-tint text-river' : 'bg-surface text-body'
                      }`}
                    >
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
