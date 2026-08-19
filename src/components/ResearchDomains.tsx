import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { researchDomains, researchThemesTotal, projects } from '../data/content'

export default function ResearchDomains() {
  const [openId, setOpenId] = useState<string | null>('climate-policy')

  return (
    <section id="research" className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase">Research</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">
          Water as a system, not a single problem
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] text-body">
          WIT studies water through systems thinking — the physical,
          agricultural, and policy layers that interact across a basin.
          Instrumentation is how we get the data; it isn't the point.
          Open a theme below for what we actually do inside it.
        </p>

        <div className="mt-10 divide-y divide-border rounded-md border border-border bg-paper">
          {researchDomains.map((domain) => {
            const open = openId === domain.id
            const relatedProjects = projects.filter((p) => domain.projectIds.includes(p.id))
            return (
              <div key={domain.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : domain.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <h3 className="text-[16px] font-semibold text-ink">{domain.label}</h3>
                    <p className="mt-1 text-[14px] text-body">{domain.summary}</p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-body transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </button>

                {open && (
                  <div className="px-6 pb-7">
                    <div className="grid gap-8 border-t border-border pt-6 md:grid-cols-[1.3fr_1fr]">
                      <div>
                        {domain.overview.map((paragraph, i) => (
                          <p key={i} className="mt-0 text-[15px] leading-relaxed text-body first:mt-0 [&:not(:first-child)]:mt-3">
                            {paragraph}
                          </p>
                        ))}

                        <p className="mt-5 text-[13px] font-medium text-ink">What we do</p>
                        <ul className="mt-2 space-y-1.5">
                          {domain.whatWeDo.map((item) => (
                            <li key={item} className="text-[14px] leading-relaxed text-body">
                              — {item}
                            </li>
                          ))}
                        </ul>

                        {domain.capacityBuilding && (
                          <>
                            <p className="mt-5 text-[13px] font-medium text-ink">Capacity building</p>
                            <ul className="mt-2 space-y-1.5">
                              {domain.capacityBuilding.map((item) => (
                                <li key={item} className="text-[14px] leading-relaxed text-body">
                                  — {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      <div>
                        {domain.collaboration && (
                          <>
                            <p className="text-[13px] font-medium text-ink">Collaboration</p>
                            <ul className="mt-2 space-y-1">
                              {domain.collaboration.map((partner) => (
                                <li key={partner} className="text-[13px] text-body">
                                  {partner}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {relatedProjects.length > 0 && (
                          <>
                            <p className="mt-5 text-[13px] font-medium text-ink">Related projects</p>
                            <ul className="mt-2 space-y-2.5">
                              {relatedProjects.map((p) => (
                                <li key={p.id} className="text-[13px] text-body">
                                  <a href="#projects" className="text-river hover:underline">
                                    {p.name}
                                  </a>
                                  <span className="text-body/70"> · {p.funder}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {!domain.full && (
                          <p className="mt-5 text-[13px] text-body/70">
                            Fuller write-up coming — see{' '}
                            <a
                              href="https://wit.lums.edu.pk/research-themes"
                              target="_blank"
                              rel="noreferrer"
                              className="text-river underline underline-offset-2"
                            >
                              wit.lums.edu.pk
                            </a>{' '}
                            in the meantime.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-[14px] text-body">
          Plus {researchThemesTotal - researchDomains.length} more research
          themes — full list on{' '}
          <a
            href="https://wit.lums.edu.pk/research-themes"
            target="_blank"
            rel="noreferrer"
            className="text-river underline underline-offset-2"
          >
            wit.lums.edu.pk
          </a>
          .
        </p>
      </div>
    </section>
  )
}
