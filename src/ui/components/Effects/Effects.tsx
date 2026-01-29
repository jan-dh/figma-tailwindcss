import { Link } from 'react-router-dom'
import { useThemeStore } from '../../store/themeStore'
import Shadow from './Shadow'
import BorderRadius from './BorderRadius'
import messages from '../../helpers/randomMessages'

const Effects = () => {
  const shadows = useThemeStore((s) => s.boxShadow)
  const borderRadii = useThemeStore((s) => s.borderRadius)
  const defaultBorderRadiusIndex = useThemeStore((s) => s.defaultBorderRadiusIndex)
  const setDefaultBorderRadiusIndex = useThemeStore((s) => s.setDefaultBorderRadiusIndex)
  const useRem = useThemeStore((s) => s.preferences.useRem)

  const hasShadows = shadows.length > 0
  const hasBorderRadii = borderRadii.length > 0

  const handleSelectDefault = (index: number) => {
    // Toggle off if clicking the same one
    if (defaultBorderRadiusIndex === index) {
      setDefaultBorderRadiusIndex(null)
    } else {
      setDefaultBorderRadiusIndex(index)
    }
  }

  const feedbackShadows =
    messages.emptyShadows[Math.floor(Math.random() * messages.emptyShadows.length)]
  const feedbackBorderRadii =
    messages.emptyBorderRadii[
      Math.floor(Math.random() * messages.emptyBorderRadii.length)
    ]

  return (
    <>
      <div className="w-full border-b border-slate-200 py-3">
        <h2 className="t-beta">Effects</h2>
        <p className="intro">Effect Styles we found in your Figma file</p>
      </div>
      <h3 className="t-gamma my-3">Border-radius</h3>
      {hasBorderRadii && (
        <p className="text-xs text-slate-500 mb-2">
          Click a radius to set it as DEFAULT (used for <code className="bg-slate-100 px-1 rounded">rounded</code> class)
        </p>
      )}
      {hasBorderRadii ? (
        <div className="flex flex-wrap gap-4">
          {borderRadii.map((radius, i) => (
            <BorderRadius
              key={i}
              index={i}
              value={radius.value}
              isDefault={defaultBorderRadiusIndex === i}
              defaultIndex={defaultBorderRadiusIndex}
              total={borderRadii.length}
              useRem={useRem}
              onSelect={() => handleSelectDefault(i)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-2">
          <div className="richtext">
            <p>{feedbackBorderRadii}</p>
          </div>
        </div>
      )}
      <h3 className="t-gamma my-3">Shadows</h3>
      {hasShadows ? (
        <div className="flex flex-wrap gap-4">
          {shadows.map((shadow, i) => (
            <Shadow key={i} {...shadow} />
          ))}
        </div>
      ) : (
        <div className="mt-2">
          <div className="richtext">
            <p>{feedbackShadows}</p>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-4">
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
