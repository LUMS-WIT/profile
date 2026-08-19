import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/wit-logo.png'

const LINKS = [
  { href: '#research', label: 'Research' },
  { href: '#technology', label: 'Technology' },
  { href: '#impact', label: 'Impact' },
  { href: '#projects', label: 'Projects' },
  { href: '#training', label: 'Training' },
  { href: '#people', label: 'People' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="shrink-0">
          <img src={logo} alt="WIT — Centre for Water Informatics & Technology, LUMS" className="h-8 w-auto sm:h-9" />
        </a>

        <nav className="hidden items-center gap-6 text-[14px] text-body lg:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-river">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-paper px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2.5 text-[15px] text-body hover:bg-surface hover:text-river"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
