import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/wit-logo.png'

const LINKS = [
  { to: '/research', label: 'Research' },
  { to: '/technology', label: 'Technology' },
  { to: '/impact', label: 'Impact' },
  { to: '/projects', label: 'Projects' },
  { to: '/training', label: 'Training' },
  { to: '/people', label: 'People' },
  { to: '/news', label: 'News' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 lg:py-5">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="WIT — Centre for Water Informatics & Technology, LUMS" className="h-8 w-auto sm:h-9 lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] text-body lg:flex lg:text-[15px]">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-river ${isActive ? 'font-medium text-river' : ''}`
              }
            >
              {link.label}
            </NavLink>
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
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded px-2 py-2.5 text-[15px] hover:bg-surface hover:text-river ${
                      isActive ? 'font-medium text-river' : 'text-body'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
