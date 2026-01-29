import { makeRgb } from './helpers'

interface EffectStylesResult {
  shadows: { name: string; value: string }[]
}

export default async function getEffectStyles(): Promise<EffectStylesResult> {
  const effectStyles = await figma.getLocalEffectStylesAsync()
  const shadows: { name: string; value: string }[] = []

  effectStyles.forEach((style) => {
    const { effects, name } = style
    const styleString: string[] = []

    effects.forEach((effect) => {
      if (effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW') {
        const { color, offset, radius, spread } = effect
        const { r, g, b, a } = makeRgb(color)
        const colorString = `${r},${g},${b},${a}`
        styleString.push(
          `${effect.type === 'INNER_SHADOW' ? 'inset ' : ''}${offset.x}px ${offset.y}px ${radius}px ${spread}px rgba(${colorString})`
        )
      }
    })

    if (styleString.length > 0) {
      shadows.push({
        name,
        value: styleString.join(', '),
      })
    }
  })

  return { shadows }
}
