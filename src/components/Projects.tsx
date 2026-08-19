import { useState } from 'react'
import { projects } from '../data/content'

type Filter = 'All' | 'Ongoing' | 'Completed'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const rows = filter === 'All' ? projects : projects.filter((p) => p.status === filter)
  const ongoingCount = projects.filter((p) => p.status === 'Ongoing').length

  return (
    <section id="projects" className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase">Projects</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">
          {projects.length} research projects, {ongoingCount} ongoing
        </h2>

        <div className="mt-6 flex gap-2">
          {(['All', 'Ongoing', 'Completed'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded border px-3 py-1.5 text-[13px] transition-colors ${
                filter === f
                  ? 'border-river bg-river text-white'
                  : 'border-border text-body hover:border-river hover:text-river'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-surface text-[12px] text-body">
                <th className="border-b border-border px-4 py-3 font-medium">Project</th>
                <th className="border-b border-border px-4 py-3 font-medium">PI</th>
                <th className="border-b border-border px-4 py-3 font-medium">Funder</th>
                <th className="border-b border-border px-4 py-3 font-medium">Years</th>
                <th className="border-b border-border px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.id} className="text-[14px]">
                  <td className="border-b border-border px-4 py-3.5 font-medium text-ink">{p.name}</td>
                  <td className="border-b border-border px-4 py-3.5 text-body">{p.pi}</td>
                  <td className="border-b border-border px-4 py-3.5 text-body">{p.funder}</td>
                  <td className="border-b border-border px-4 py-3.5 whitespace-nowrap text-body">{p.years}</td>
                  <td className="border-b border-border px-4 py-3.5">
                    <span
                      className={`rounded px-2 py-0.5 text-[12px] ${
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
        </div>
      </div>
    </section>
  )
}
