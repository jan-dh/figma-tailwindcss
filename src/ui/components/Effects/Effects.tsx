import { Link } from 'react-router-dom'
import { useThemeStore } from '../../store/themeStore'
import Shadow from './Shadow'
import BorderRadius from './BorderRadius'
import messages from '../../helpers/randomMessages'

const Effects = () => {
  const shadows = useThemeStore((s) => s.boxShadow)
  const borderRadii = useThemeStore((s) => s.borderRadius)

  const hasShadows = shadows.length > 0
  const hasBorderRadii = borderRadii.length > 0

  const feedbackShadows =
    messages.emptyShadows[Math.floor(Math.random() * messages.emptyShadows.length)]
  const feedbackBorderRadii =
    messages.emptyBorderRadii[
      Math.floor(Math.random() * messages.emptyBorderRadii.length)
    ]

  return (
    <>
      <div className="w-full border-b border-gray-200 py-4">
        <h2 className="t-beta">Effects</h2>
        <p className="intro">Effect Styles we found in your Figma file</p>
      </div>
      <h3 className="t-gamma my-4">Border-radius</h3>
      {hasBorderRadii ? (
        <div className="grid grid-cols-4 gap-4">
          {borderRadii.map((radius, i) => (
            <BorderRadius key={i} {...radius} />
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <div className="richtext">
            <p>{feedbackBorderRadii}</p>
          </div>
        </div>
      )}
      <h3 className="t-gamma my-4">Shadows</h3>
      {hasShadows ? (
        <div className="grid grid-cols-4 gap-4">
          {shadows.map((shadow, i) => (
            <Shadow key={i} {...shadow} />
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <div className="richtext">
            <p>{feedbackShadows}</p>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-8">
        <Link to="/typography" className="button button--green">
          Previous
        </Link>
        <Link to="/export" className="button button--green">
          Next
        </Link>
      </div>
    </>
  )
}

export default Effects
