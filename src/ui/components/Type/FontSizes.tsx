import type { ChangeEvent } from 'react'
import { useThemeStore } from '../../store/themeStore'
import FontSize from './FontSize'
import { calculatePosition } from '../../helpers/helpers'

const FontSizes = () => {
  const fontSizes = useThemeStore((s) => s.fontSize)
  const baseFontSize = useThemeStore((s) => s.baseFontSize)
  const borderRadii = useThemeStore((s) => s.borderRadius)
  const setFontSize = useThemeStore((s) => s.setFontSize)
  const setBaseFontSize = useThemeStore((s) => s.setBaseFontSize)
  const setBorderRadius = useThemeStore((s) => s.setBorderRadius)

  const updateBorderRadii = (base: number) => {
    const newRadii = borderRadii.map((radius, i) => ({
      name: `rounded-${i}`,
      value: `${Number(radius.value) / base}rem`,
    }))
    setBorderRadius(newRadii)
  }

  const updateFontSizes = (e: ChangeEvent<HTMLSelectElement>) => {
    const basePosition = fontSizes.findIndex((x) => x.value === e.target.value)
    const size = fontSizes.length

    const newFontSizes = fontSizes.map((item, i) => ({
      ...item,
      name: calculatePosition(i, basePosition, size),
    }))

    setBaseFontSize(Number(e.target.value))
    updateBorderRadii(Number(e.target.value))
    setFontSize(newFontSizes)
  }

  return (
    <>
      <label htmlFor="sizeSelect" className="block mt-4">
        Pick a base font-size
      </label>
      <select
        className="mt-2 border rounded p-2 focus-visible:outline-none focus:ring-1 focus:ring-teal-500"
        value={baseFontSize || ''}
        onChange={updateFontSizes}
      >
        <option value="">-</option>
        {fontSizes.map((size, i) => (
          <option value={size.value} key={i}>
            {size.value}px
          </option>
        ))}
      </select>
      <div className="mt-4 code-block">
        {fontSizes.map((size, i) => (
          <FontSize key={i} {...size} />
        ))}
      </div>
    </>
  )
}

export default FontSizes
