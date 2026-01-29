import { makeHex, makeRgb } from './helpers'

interface ColorResult {
  colors: { name: string; value: string }[]
  gradientColors: string[]
}

export default async function getPaintStyles(): Promise<ColorResult> {
  const colorStyles = await figma.getLocalPaintStylesAsync()
  const colors: { name: string; value: string }[] = []
  const gradientColors: string[] = []

  colorStyles.forEach((style) => {
    const paint = style.paints[0] || null
    if (paint) {
      if (paint.type === 'SOLID') {
        const { name } = style
        const { r, g, b } = makeRgb(paint.color)
        const value = makeHex(r, g, b)
        colors.push({ name, value })
      } else if (
        paint.type === 'GRADIENT_LINEAR' ||
        paint.type === 'GRADIENT_RADIAL' ||
        paint.type === 'GRADIENT_ANGULAR' ||
        paint.type === 'GRADIENT_DIAMOND'
      ) {
        const gradientStops = paint.gradientStops
        if (gradientStops && gradientStops.length > 0) {
          gradientStops.forEach((stop) => {
            const { r, g, b } = makeRgb(stop.color)
            const value = makeHex(r, g, b)
            gradientColors.push(value)
          })
        }
      }
    }
  })

  return { colors, gradientColors }
}
