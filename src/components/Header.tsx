import { useEffect, useRef, useState } from 'react'
import { LineStar } from './Ornaments'

const links = ['About', 'Projects', 'Experience', 'Certificates', 'Contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = ['Home', ...links]
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'home' ? '' : entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -45% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && toggle.current?.getAttribute('aria-expanded') === 'true') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const wideScreen = window.matchMedia('(min-width: 761px)')
    const closeOnResize = () => {
      if (wideScreen.matches) setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    wideScreen.addEventListener('change', closeOnResize)
    return () => {
      observer.disconnect()
      document.removeEventListener('keydown', closeOnEscape)
      wideScreen.removeEventListener('change', closeOnResize)
    }
  }, [])

  return (
    <header className="header">
      <div className="header-inner">
        <a
          className="wordmark"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Daria Osypova, home"
        >
          DARIA OSYPOVA
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close −' : 'Menu +'}
        </button>
        <nav
          id="main-navigation"
          className={open ? 'navigation is-open' : 'navigation'}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              aria-current={active === link.toLowerCase() ? 'location' : undefined}
            >
              {link}
            </a>
          ))}
          <span className="header-seal" aria-hidden="true">
            <LineStar />
          </span>
        </nav>
      </div>
    </header>
  )
}
