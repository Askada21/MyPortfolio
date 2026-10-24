import { useEffect } from 'react'

/** Content is visible by default, including when scripting or observers are unavailable. */
export function useScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || !('IntersectionObserver' in window)) return
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('main > section:not(.hero) .section-content'),
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 },
    )
    elements.forEach((element) => {
      element.classList.add('reveal-enabled')
      if (element.getBoundingClientRect().top > window.innerHeight)
        element.classList.add('reveal-pending')
      observer.observe(element)
    })
    const showAll = () => {
      if (media.matches) elements.forEach((element) => element.classList.remove('reveal-pending'))
    }
    media.addEventListener('change', showAll)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', showAll)
      elements.forEach((element) => element.classList.remove('reveal-pending', 'reveal-enabled'))
    }
  }, [])
}
