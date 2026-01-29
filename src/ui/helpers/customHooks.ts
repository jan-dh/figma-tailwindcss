import { useState, useEffect } from 'react'
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
