import { useMemo, useState } from 'react'
import { sensorSites } from '../data/content'

const DOMAIN_COLOR: Record<string, string> = {
  Cryosphere: 'bg-glacier',
  Floods: 'bg-river',
  'Forest fire': 'bg-terracotta',
  Agriculture: 'bg-moss',
  'Climate analytics': 'bg-ink',
}

export default function SensorNetwork() {
  const [activeId, setActiveId] = useState(sensorSites[0].id)
  const active = sensorSites.find((s) => s.id === activeId) ?? sensorSites[0]
  const domains = useMemo(() => [...new Set(sensorSites.map((s) => s.domain))], [])

  return (
    <section id="sensors" className="border-b border-ink/10 bg-ink py-20 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-glacier">
          Sensor network
        </p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl font-medium md:text-4xl">
          Every pin is a station we built, installed, and still maintain
        </h2>
        <p className="mt-4 max-w-2xl text-paper/65">
          A field-instrumentation footprint across the basin — from
          glacier ablation stakes at 4,000m to soil-moisture probes on
          smallholder plots. Select a site for its parameters and partner.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-contours-light relative aspect-[4/5] max-w-sm justify-self-center rounded-xl border border-paper/15 bg-river-deep/40 sm:max-w-md lg:justify-self-start">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d="M 55 4 C 48 20, 52 30, 46 45 C 40 58, 48 65, 44 78 C 41 88, 50 94, 50 98"
                fill="none"
                stroke="#4fa3c4"
                strokeOpacity="0.55"
                strokeWidth="0.8"
              />
            </svg>

            {sensorSites.map((site) => (
              <button
                key={site.id}
                type="button"
                onClick={() => setActiveId(site.id)}
                style={{ left: `${site.x}%`, top: `${site.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={site.name}
                aria-pressed={site.id === activeId}
              >
                <span
                  className={`block h-3 w-3 rounded-full ring-2 ring-ink transition-transform ${
                    DOMAIN_COLOR[site.domain] ?? 'bg-paper'
                  } ${site.id === activeId ? 'scale-150' : 'scale-100 group-hover:scale-125'}`}
                />
              </button>
            ))}
          </div>

          <div className="font-mono">
            <div className="flex flex-wrap gap-2 border-b border-paper/15 pb-6">
              {domains.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => {
                    const first = sensorSites.find((s) => s.domain === domain)
                    if (first) setActiveId(first.id)
                  }}
                  className={`rounded-full border px-3 py-1 text-[12px] uppercase tracking-wide transition-colors ${
                    active.domain === domain
                      ? 'border-glacier text-glacier'
                      : 'border-paper/20 text-paper/55 hover:border-paper/50 hover:text-paper'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-[11px] tracking-wide text-paper/45 uppercase">{active.domain}</p>
              <h3 className="font-display mt-1 text-2xl font-normal text-paper">{active.name}</h3>

              <p className="mt-5 text-[11px] tracking-wide text-paper/45 uppercase">Parameters collected</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {active.parameters.map((param) => (
                  <li
                    key={param}
                    className="rounded border border-paper/20 px-2.5 py-1 text-[12px] text-paper/80"
                  >
                    {param}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[11px] tracking-wide text-paper/45 uppercase">Field partner</p>
              <p className="mt-1 text-[15px] text-paper/85">{active.partner}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
