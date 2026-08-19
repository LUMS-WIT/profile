import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { newsItems, trainings } from '../data/content'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const

type Entry = {
  id: string
  title: string
  description?: string
  category: string
  year: number
  monthIndex: number
  day: number | null
  dateLabel: string
}

function parseDate(dateStr: string): { year: number; monthIndex: number; day: number | null } | null {
  const withDay = dateStr.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/)
  if (withDay) {
    const monthIndex = MONTHS.findIndex((m) => m === withDay[1])
    if (monthIndex === -1) return null
    return { year: Number(withDay[3]), monthIndex, day: Number(withDay[2]) }
  }
  const monthOnly = dateStr.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (monthOnly) {
    const monthIndex = MONTHS.findIndex((m) => m === monthOnly[1])
    if (monthIndex === -1) return null
    return { year: Number(monthOnly[2]), monthIndex, day: null }
  }
  return null
}

function monthKey(year: number, monthIndex: number) {
  return `${year}-${monthIndex}`
}

export default function News() {
  const entries = useMemo<Entry[]>(() => {
    const fromNews: Entry[] = newsItems.flatMap((item) => {
      const parsed = parseDate(item.date)
      if (!parsed) return []
      return [{
        id: item.id,
        title: item.title,
        description: item.description,
        category: 'News',
        dateLabel: item.date,
        ...parsed,
      }]
    })
    const fromTrainings: Entry[] = trainings.flatMap((t) => {
      const parsed = parseDate(t.date)
      if (!parsed) return []
      return [{
        id: t.id,
        title: t.title,
        category: t.format,
        dateLabel: t.date,
        ...parsed,
      }]
    })
    return [...fromNews, ...fromTrainings].sort((a, b) => {
      const ak = a.year * 372 + a.monthIndex * 31 + (a.day ?? 1)
      const bk = b.year * 372 + b.monthIndex * 31 + (b.day ?? 1)
      return bk - ak
    })
  }, [])

  const months = useMemo(() => {
    const map = new Map<string, { year: number; monthIndex: number; entries: Entry[] }>()
    for (const e of entries) {
      const key = monthKey(e.year, e.monthIndex)
      if (!map.has(key)) map.set(key, { year: e.year, monthIndex: e.monthIndex, entries: [] })
      map.get(key)!.entries.push(e)
    }
    return [...map.values()].sort((a, b) => (b.year * 12 + b.monthIndex) - (a.year * 12 + a.monthIndex))
  }, [entries])

  const [selectedKey, setSelectedKey] = useState(() =>
    months.length ? monthKey(months[0].year, months[0].monthIndex) : '',
  )
  const [filter, setFilter] = useState<'all' | 'news' | 'events'>('all')

  const selected = months.find((m) => monthKey(m.year, m.monthIndex) === selectedKey) ?? months[0]

  const visibleEntries = (selected?.entries ?? []).filter((e) =>
    filter === 'all' ? true : filter === 'news' ? e.category === 'News' : e.category !== 'News',
  )

  const calendarCells = useMemo(() => {
    if (!selected) return []
    const firstWeekday = new Date(selected.year, selected.monthIndex, 1).getDay()
    const daysInMonth = new Date(selected.year, selected.monthIndex + 1, 0).getDate()
    const dayEntries = new Map<number, Entry[]>()
    for (const e of selected.entries) {
      if (e.day === null) continue
      if (filter !== 'all' && (filter === 'news') !== (e.category === 'News')) continue
      if (!dayEntries.has(e.day)) dayEntries.set(e.day, [])
      dayEntries.get(e.day)!.push(e)
    }
    const cells: Array<{ day: number; entries: Entry[] } | null> = Array(firstWeekday).fill(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, entries: dayEntries.get(d) ?? [] })
    return cells
  }, [selected, filter])

  function goToDay(day: number) {
    const el = document.getElementById(`entry-day-${day}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">News &amp; Events</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">What's happening at WIT</h1>
        <p className="mt-4 max-w-2xl text-[16px] text-body lg:text-lg">
          Announcements, mentorship cohorts, talks, and workshops — browse
          by month or filter by type.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {(['all', 'news', 'events'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors lg:text-sm ${
                filter === f
                  ? 'border-river bg-river text-white'
                  : 'border-border text-body hover:border-river hover:text-river'
              }`}
            >
              {f === 'all' ? 'All' : f === 'news' ? 'News' : 'Workshops & events'}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* month navigator */}
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {months.map((m) => {
              const key = monthKey(m.year, m.monthIndex)
              const active = key === selectedKey
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedKey(key)}
                  className={`shrink-0 rounded-md border px-3.5 py-2 text-left text-[13px] font-medium transition-colors lg:text-sm ${
                    active
                      ? 'border-river bg-river-tint text-river'
                      : 'border-border text-body hover:border-river/50 hover:text-ink'
                  }`}
                >
                  {MONTHS[m.monthIndex].slice(0, 3)} {m.year}
                  <span className="ml-1.5 text-[11px] text-body/60">({m.entries.length})</span>
                </button>
              )
            })}
          </nav>

          <div>
            {selected && (
              <>
                {/* mini calendar for the selected month */}
                <div className="rounded-lg border border-border p-5">
                  <p className="text-[15px] font-semibold text-ink">
                    {MONTHS[selected.monthIndex]} {selected.year}
                  </p>
                  <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] text-body/60">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                      <div key={i} className="py-1">{d}</div>
                    ))}
                    {calendarCells.map((cell, i) =>
                      cell === null ? (
                        <div key={i} />
                      ) : (
                        <button
                          key={i}
                          type="button"
                          disabled={cell.entries.length === 0}
                          onClick={() => goToDay(cell.day)}
                          className={`flex aspect-square flex-col items-center justify-center rounded-md text-[12px] transition-colors ${
                            cell.entries.length > 0
                              ? 'cursor-pointer bg-river-tint font-semibold text-river hover:bg-river hover:text-white'
                              : 'text-body/70'
                          }`}
                        >
                          {cell.day}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* entries for the selected month */}
                <ul className="mt-8 divide-y divide-border rounded-lg border border-border">
                  {visibleEntries.length === 0 && (
                    <li className="px-7 py-6 text-[14px] text-body">No items in this month for the selected filter.</li>
                  )}
                  {visibleEntries.map((entry, i) => (
                    <motion.li
                      key={entry.id}
                      id={entry.day !== null ? `entry-day-${entry.day}` : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.03 }}
                      className="px-7 py-6 transition-colors hover:bg-surface"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
                        <span className="w-32 shrink-0 text-[13px] text-body/70 lg:text-sm">{entry.dateLabel}</span>
                        <span
                          className="rounded-full border px-2 py-0.5 text-[11px] font-medium"
                          style={
                            entry.category === 'News'
                              ? { borderColor: 'var(--color-river)', color: 'var(--color-river)' }
                              : { borderColor: 'var(--color-sector-energy)', color: 'var(--color-sector-energy)' }
                          }
                        >
                          {entry.category}
                        </span>
                        <h2 className="w-full text-base font-medium text-ink sm:w-auto lg:text-lg">{entry.title}</h2>
                      </div>
                      {entry.description && (
                        <p className="mt-2.5 text-[14px] leading-relaxed text-body sm:pl-[9.5rem] lg:text-[15px]">
                          {entry.description}
                        </p>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <p className="mt-8 text-[14px] text-body lg:text-[15px]">
          Full archive on{' '}
          <a
            href="https://wit.lums.edu.pk/wit-news"
            target="_blank"
            rel="noreferrer"
            className="text-river underline underline-offset-2"
          >
            wit.lums.edu.pk/wit-news
          </a>
          .
        </p>
      </div>
    </section>
  )
}
