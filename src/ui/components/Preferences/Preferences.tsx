import type { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useThemeStore } from '../../store/themeStore'

const Preferences = () => {
  const preferences = useThemeStore((s) => s.preferences)
  const setPreferences = useThemeStore((s) => s.setPreferences)

  const updatePreference = (key: string, value: string | boolean) => {
    setPreferences({ [key]: value })
  }

  return (
    <>
      <div className="w-full border-b border-gray-200 py-4">
        <h2 className="t-beta">Preferences</h2>
        <p className="intro">Configure how Tailwind CSS should be generated</p>
      </div>
      <div className="my-8 richtext">
        <h3 className="t-gamma">Tailwind version</h3>
        <p>Choose which version of Tailwind to target.</p>
        <div className="mt-4 space-x-4">
          <label>
            <input
              type="radio"
              name="tailwindVersion"
              value="3"
              checked={preferences.tailwindVersion === '3'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePreference('tailwindVersion', e.target.value as '3' | '4')
              }
            />{' '}
            Tailwind 3
          </label>
          <label>
            <input
              type="radio"
              name="tailwindVersion"
              value="4"
              checked={preferences.tailwindVersion === '4'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePreference('tailwindVersion', e.target.value as '3' | '4')
              }
            />{' '}
            Tailwind 4
          </label>
        </div>
      </div>
      <div className="my-8 richtext">
        <h3 className="t-gamma">Color format</h3>
        <p>Select how colors should be exported.</p>
        <select
          className="mt-2 border rounded p-2 focus-visible:outline-none focus:ring-1 focus:ring-teal-500"
          value={preferences.colorFormat}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            updatePreference('colorFormat', e.target.value)
          }
        >
          <option value="hex">Hex (#rrggbb)</option>
          <option value="rgba">RGBA</option>
          <option value="hsl">HSL</option>
          <option value="oklch">OKLCH</option>
        </select>
      </div>
      <div className="flex justify-end mt-8">
        <Link to="/colors" className="button button--green">
          Next
        </Link>
      </div>
    </>
  )
}

export default Preferences
