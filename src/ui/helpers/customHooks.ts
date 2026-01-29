import { useState, useEffect, useCallback } from 'react'
import type { ChangeEvent } from 'react'
import { useLocation } from 'react-router-dom'

export function useInput(initialValue: string): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState(initialValue)
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }
  return [value, handleChange]
}

export function ScrollToTop(): null {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function useAutoResize(): void {
  const { pathname } = useLocation()

  const updateHeight = useCallback(() => {
    // Small delay to let content render
    requestAnimationFrame(() => {
      const height = document.body.scrollHeight
      parent.postMessage({ pluginMessage: { type: 'resize', height } }, '*')
    })
  }, [])

  useEffect(() => {
    updateHeight()
  }, [pathname, updateHeight])

  useEffect(() => {
    // Also resize on window resize and DOM changes
    const observer = new ResizeObserver(updateHeight)
    observer.observe(document.body)
    return () => observer.disconnect()
  }, [updateHeight])
}
