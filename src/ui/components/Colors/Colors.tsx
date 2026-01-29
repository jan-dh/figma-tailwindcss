import { Link } from 'react-router-dom'
import { useThemeStore } from '../../store/themeStore'
import Color from './Color'
import Gradient from './Gradient'
import NewColor from './NewColor'
import messages from '../../helpers/randomMessages'
import type { ColorItem } from '../../../shared/types'

const Colors = () => {
  const colors = useThemeStore((s) => s.colors)
  const gradients = useThemeStore((s) => s.gradientColors)
  const preferences = useThemeStore((s) => s.preferences)
  const updateColor = useThemeStore((s) => s.updateColor)
  const removeColor = useThemeStore((s) => s.removeColor)
  const setColors = useThemeStore((s) => s.setColors)

  const nextIndex = colors.length
  const hasColor = colors.length > 0
  const hasGradients = gradients.length > 0
  const feedbackItem =
    messages.emptyColors[Math.floor(Math.random() * messages.emptyColors.length)]

  const { colorFormat } = preferences

  const handleColorChange = (color: ColorItem, i: number) => {
    if (i >= colors.length) {
      // Adding new color
      setColors([...colors, color])
    } else {
      updateColor(i, color)
    }
  }

  const handleRemoveColor = (i: number) => {
    removeColor(i)
  }

  return (
    <>
      <div className="w-full border-b border-slate-200 py-3">
        <h2 className="t-beta">Colors</h2>
        <p className="intro">Pick and choose the colors you want to use</p>
      </div>
      <div className="my-4 richtext">
        <p>
          Colors are taken from the Figma Local Paint Styles. Colors can be grouped in
          the export step. If you want to group codes, prefix them with the same name
          (only the last two parts will be used).
        </p>
      </div>
      {hasColor ? (
        colors.map((color, i) => (
          <Color
            key={i}
            index={i}
            onChange={handleColorChange}
            removeColor={handleRemoveColor}
            colorFormat={colorFormat}
            {...color}
          />
        ))
      ) : (
        <div className="richtext">
          <p>{feedbackItem}</p>
        </div>
      )}
      {hasGradients ? (
        <div className="my-4">
          <div className="richtext">
            <h3 className="t-gamma">Gradients</h3>
            <p>
              We found some gradients in the document. Make sure to add the colors if
              you want to use them in your theme.
            </p>
          </div>
          {gradients.map((color, i) => (
            <Gradient key={i} hex={color} />
          ))}
        </div>
      ) : null}
      <NewColor key={nextIndex} index={nextIndex} onChange={handleColorChange} />
      <div className="flex justify-between mt-4">
        <Link to="/" className="button button--green">
          Previous
        </Link>
        <Link to="/typography" className="button button--green">
          Next
        </Link>
      </div>
    </>
  )
}

export default Colors
