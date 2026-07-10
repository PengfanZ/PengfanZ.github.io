import { useEffect } from 'react'

export function useHashNavigation() {
  useEffect(() => {
    const scrollToHash = () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1))
      if (!targetId) return

      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
      })
    }

    scrollToHash()
    void document.fonts.ready.then(scrollToHash)
    window.addEventListener('hashchange', scrollToHash)

    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])
}
