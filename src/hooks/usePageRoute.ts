import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getRoute() {
  return window.location.hash.slice(1) || '/'
}

export function usePageRoute() {
  return useSyncExternalStore(subscribe, getRoute, () => '/')
}

export function returnHome() {
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}
