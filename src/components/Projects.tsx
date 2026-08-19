import { useMemo, useState } from 'react'
import { projects } from '../data/content'

const ALL = 'All domains'

export default function Projects() {
  const domains = useMemo(() => [ALL, ...new Set(projects.map((p) => p.domain))], [])
  const [filter, setFilter] = useState(ALL)

  const rows = filter === ALL ? projects : projects.filter((p) => p.domain === filter)

  return (
    <section id="projects" className="bg-paper-raised border-b border-ink/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-river">Projects</p>
            <h2 className="font-display mt-2 text-3xl font-medium text-ink md:text-4xl">
              Scope, donors, and standing — at a glance
            </h2>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {domains.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setFilter(d)}
              className={`rounded-full border px-3 py-1 font-mono text-[12px] uppercase tracking-wide transition-colors ${
                filter === d
                  ? 'border-river bg-river text-paper'
                  : 'border-ink/20 text-ink/60 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-ink/10">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="font-mono text-[11px] tracking-wide text-ink/45 uppercase">
                <th className="border-b border-ink/10 px-5 py-3">Project</th>
                <th className="border-b border-ink/10 px-5 py-3">Domain</th>
                <th className="border-b border-ink/10 px-5 py-3">Donor</th>
                <th className="border-b border-ink/10 px-5 py-3">Years</th>
                <th className="border-b border-ink/10 px-5 py-3">Scope</th>
                <th className="border-b border-ink/10 px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.id} className="bg-paper transition-colors hover:bg-paper-raised">
                  <td className="border-b border-ink/10 px-5 py-4 font-medium text-ink">{p.name}</td>
                  <td className="border-b border-ink/10 px-5 py-4 text-[14px] text-ink/60">{p.domain}</td>
                  <td className="border-b border-ink/10 px-5 py-4 text-[14px] text-ink/60">{p.donor}</td>
                  <td className="font-mono border-b border-ink/10 px-5 py-4 text-[13px] text-ink/60">{p.years}</td>
                  <td className="border-b border-ink/10 px-5 py-4 text-[14px] text-ink/60">{p.scope}</td>
                  <td className="border-b border-ink/10 px-5 py-4">
                    <span
                      className={`font-mono rounded-full px-2.5 py-1 text-[11px] uppercase tracking-wide ${
                        p.status === 'Active'
                          ? 'bg-moss/15 text-moss'
                          : 'bg-ink/10 text-ink/50'
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
