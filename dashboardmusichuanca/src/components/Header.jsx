import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#resumen', label: 'Resumen' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#generos', label: 'Géneros' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#pendientes', label: 'Pendientes' },
  { href: '#ubicacion', label: 'Ubicación' },
]

const linkClass =
  'border-b border-transparent pb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-[250ms] hover:border-warm dark:text-paper'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur-[14px] dark:border-night-line dark:bg-night/90">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-9">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-[-0.02em]">
          MusicCentro
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors duration-[250ms] hover:border-ink lg:hidden dark:border-night-line dark:text-paper dark:hover:border-paper"
          >
            {open ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          aria-label="Móvil"
          className="flex flex-col gap-5 border-t border-line bg-white px-6 py-6 lg:hidden dark:border-night-line dark:bg-night"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${linkClass} self-start`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header