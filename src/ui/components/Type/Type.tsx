import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { useThemeStore } from '../../store/themeStore'
import FontFamilies from './FontFamilies'
import FontSizes from './FontSizes'
import messages from '../../helpers/randomMessages'

const Type = () => {
  const fontSizes = useThemeStore((s) => s.fontSize)
  const fontFamilies = useThemeStore((s) => s.fontFamily)
  const baseFontSize = useThemeStore((s) => s.baseFontSize)

  const hasFamilies = fontFamilies.length > 0
  const hasSizes = fontSizes.length > 0

  const emptyFamily =
    messages.emptyFamilies[Math.floor(Math.random() * messages.emptyFamilies.length)]

  const emptySize =
    messages.emptySizes[Math.floor(Math.random() * messages.emptySizes.length)]

  const validateFontSize = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!baseFontSize && fontSizes.length > 0) {
      e.preventDefault()
    }
  }

  const buttonClass =
    baseFontSize || !hasSizes
      ? 'button button--green'
      : 'button button--green opacity-50'

  return (
    <>
      <div className="w-full border-b border-slate-200 py-3">
        <h2 className="t-beta">Typography</h2>
        <p className="intro">Font families and font sizes</p>
      </div>
      <h3 className="t-gamma mt-3">Font families</h3>
      {hasFamilies ? (
        <FontFamilies />
      ) : (
        <div className="richtext mt-2">
          <p>{emptyFamily}</p>
        </div>
      )}
      <div className="mt-4">
        <h3 className="t-gamma">Font sizes</h3>
        {hasSizes ? (
          <FontSizes />
        ) : (
          <div className="richtext mt-2">
            <p>{emptySize}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <Link to="/colors" className="button button--green">
          Previous
        </Link>
        <Link to="/effects" className={buttonClass} onClick={validateFontSize}>
          Next
        </Link>
      </div>
    </>
  )
}

export default Type
