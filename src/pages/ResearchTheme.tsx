import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { researchDomains, projects } from '../data/content'
import SystemsDiagram from '../components/SystemsDiagram'
import SensingLoopDiagram from '../components/SensingLoopDiagram'

const THEME_DIAGRAM: Record<string, () => ReactNode> = {
  'systems-modelling': () => <SystemsDiagram size={200} />,
  'iot-telematics': () => <SensingLoopDiagram size={200} />,
}

export default function ResearchTheme() {
  const { id } = useParams()
  const domain = researchDomains.find((d) => d.id === id)

  if (!domain) return <Navigate to="/research" replace />

  const relatedProjects = projects.filter((p) => domain.projectIds.includes(p.id))
  const diagram = THEME_DIAGRAM[domain.id]?.()

  return (
    <motion.section
      key={domain.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link to="/research" className="flex items-center gap-1.5 text-[13px] font-medium text-river hover:underline lg:text-sm">
          <ArrowLeft size={14} /> All research themes
        </Link>

        <h1 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">{domain.label}</h1>
        <p className="mt-4 max-w-2xl text-lg text-body lg:text-xl">{domain.summary}</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            {domain.overview.map((paragraph, i) => (
              <p key={i} className="mt-4 text-[16px] leading-relaxed text-body first:mt-0 lg:text-lg">
                {paragraph}
              </p>
            ))}

            <p className="mt-8 text-[15px] font-medium text-ink lg:text-base">What we do</p>
            <ul className="mt-3 space-y-2.5">
              {domain.whatWeDo.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-body lg:text-base">
                  — {item}
                </li>
              ))}
            </ul>

            {domain.capacityBuilding && (
              <>
                <p className="mt-8 text-[15px] font-medium text-ink lg:text-base">Capacity building</p>
                <ul className="mt-3 space-y-2.5">
                  {domain.capacityBuilding.map((item) => (
                    <li key={item} className="text-[15px] leading-relaxed text-body lg:text-base">
                      — {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            {diagram && (
              <div className="mb-8 flex justify-center rounded-lg border border-border bg-surface py-6">{diagram}</div>
            )}

            {domain.collaboration && (
              <>
                <p className="text-[15px] font-medium text-ink lg:text-base">Collaboration</p>
                <ul className="mt-3 space-y-2">
                  {domain.collaboration.map((partner) => (
                    <li key={partner} className="text-[14px] text-body lg:text-[15px]">
                      {partner}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {relatedProjects.length > 0 && (
              <>
                <p className="mt-8 text-[15px] font-medium text-ink lg:text-base">Related projects</p>
                <ul className="mt-3 space-y-3.5">
                  {relatedProjects.map((p) => (
                    <li key={p.id} className="text-[14px] text-body lg:text-[15px]">
                      <Link to="/projects" className="text-river hover:underline">
                        {p.name}
                      </Link>
                      <span className="text-body/70"> · {p.funder}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {!domain.full && (
              <p className="mt-8 rounded-lg border border-border bg-surface p-5 text-[13px] text-body lg:text-sm">
                This theme's full write-up is still being added here — see{' '}
                <a
                  href="https://wit.lums.edu.pk/research-themes"
                  target="_blank"
                  rel="noreferrer"
                  className="text-river underline underline-offset-2"
                >
                  wit.lums.edu.pk
                </a>{' '}
                for more in the meantime.
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
