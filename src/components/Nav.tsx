import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#domains', label: 'Research' },
  { href: '#sensors', label: 'Sensor Network' },
  { href: '#impact', label: 'Impact' },
  { href: '#projects', label: 'Projects' },
  { href: '#training', label: 'Training' },
  { href: '#people', label: 'People' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur border-b border-ink/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className={`font-display text-lg tracking-tight transition-colors ${scrolled ? 'text-ink' : 'text-paper'}`}
        >
          WIT <span className="text-glacier">Lab</span>
        </a>
        <nav
          className={`hidden gap-7 font-mono text-[13px] uppercase tracking-wide transition-colors md:flex ${
            scrolled ? 'text-ink/70' : 'text-paper/80'
          }`}
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-glacier">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`rounded-full border px-4 py-1.5 font-mono text-[13px] uppercase tracking-wide transition-colors ${
            scrolled
              ? 'border-ink/20 text-ink hover:border-river hover:text-river'
              : 'border-paper/30 text-paper hover:border-glacier hover:text-glacier'
          }`}
        >
          Partner with us
        </a>
      </div>
    </header>
  )
}
