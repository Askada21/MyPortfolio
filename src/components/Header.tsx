import { portfolioNavigation } from '../data/navigation'
import { useEffect, useRef, useState } from 'react'
import Introduction, { IntroActions } from './Introduction'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = ['home', ...portfolioNavigation.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && toggle.current?.getAttribute('aria-expanded') === 'true') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const wideScreen = window.matchMedia('(min-width: 1101px)')
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
          Daria Osypova
        </a>
        <div className="sidebar-introduction">
          <Introduction echo />
        </div>
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
          {portfolioNavigation.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === link.id ? 'location' : undefined}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div className="sidebar-actions">
          <IntroActions />
        </div>
      </div>
    </header>
  )
}
