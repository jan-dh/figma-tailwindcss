import { formatColor } from './colorFormatter'
import type { ThemeState, CleanTheme, ColorItem } from '../../shared/types'

export function calculatePosition(index: number, basePosition: number, length: number): string {
  let value = ''
  if (index === basePosition) {
    value = 'base'
  }
  if (index === basePosition - 1) {
    value = 'sm'
  } else if (index === basePosition - 2) {
    value = 'xs'
  } else if (index === basePosition + 1) {
    value = 'lg'
  } else if (index === basePosition + 2) {
    value = 'xl'
  } else if (index < basePosition - 2) {
    const numberOfSmaller = length - (length - (basePosition - 2))
    const position = -(index - (numberOfSmaller + 1))
    value = `${position}xs`
  } else if (index > basePosition + 2) {
    const numberOfBigger = length - (basePosition + 3)
    const position = numberOfBigger - (length - (index + 2))
    value = `${position}xl`
  }
  return value
}

export function getBorderRadiusName(
  index: number,
  defaultIndex: number | null,
  total: number
): string {
  // If no default selected, use numeric naming
  if (defaultIndex === null) {
    return String(index)
  }

  const offset = index - defaultIndex

  if (offset === 0) return 'DEFAULT'
  if (offset === -1) return 'sm'
  if (offset === -2) return 'xs'
  if (offset === 1) return 'lg'
  if (offset === 2) return 'xl'
  if (offset === 3) return '2xl'
  if (offset === 4) return '3xl'

  // For values smaller than xs
  if (offset < -2) {
    const xsCount = Math.abs(offset) - 1
    return `${xsCount}xs`
  }

  // For values larger than 3xl
  if (offset > 4) {
    return `${offset - 1}xl`
  }

  return String(index)
}

export function getPart(name: string, i: number): string {
  let cleanName = name
  const parts = name.split('/')
  if (name.indexOf('/') !== -1) {
    cleanName = parts[parts.length - i] ?? name
  }
  return cleanName
}

export function groupColors(colors: ColorItem[]): Record<string, string | Record<string, string>> {
  const groupedColors: Record<string, string | Record<string, string>> = {}
  colors.forEach((color) => {
    const { name, value } = color
    const key = getPart(name, 2)
    if (!groupedColors[key]) {
      groupedColors[key] = {}
    }
    const cleanName = getPart(name, 1)
    if (cleanName === name) {
      groupedColors[key] = value
    } else {
      const current = groupedColors[key]
      if (typeof current === 'object') {
        current[cleanName] = value
      }
    }
  })
  return groupedColors
}

export function cleanupTheme(
  theme: ThemeState,
  colorFormat: string,
  grouped: boolean,
  useRem: boolean = true,
  defaultBorderRadiusIndex: number | null = null
): CleanTheme {
  const cleanTheme: CleanTheme = {}

  // Handle colors
  if (theme.colors.length > 0) {
    const formattedColors = theme.colors.map(({ name, value }) => ({
      name,
      value: formatColor(value, colorFormat),
    }))
    cleanTheme.colors = grouped
      ? groupColors(formattedColors)
      : Object.assign({}, ...formattedColors.map((c) => ({ [c.name]: c.value })))
  }

  // Handle fontFamily
  if (theme.fontFamily.length > 0) {
    cleanTheme.fontFamily = Object.assign(
      {},
      ...theme.fontFamily.map(({ name, value }) => ({ [name]: value }))
    )
  }

  // Handle fontSize
  if (theme.fontSize.length > 0) {
    cleanTheme.fontSize = Object.assign(
      {},
      ...theme.fontSize.map(({ name, value }) => ({
        [name]: useRem ? `${Number(value) / 16}rem` : `${value}px`,
      }))
    )
  }

  // Handle boxShadow
  if (theme.boxShadow.length > 0) {
    cleanTheme.boxShadow = Object.assign(
      {},
      ...theme.boxShadow.map(({ name, value }) => ({ [name]: value }))
    )
  }

  // Handle borderRadius
  if (theme.borderRadius.length > 0) {
    cleanTheme.borderRadius = Object.assign(
      {},
      ...theme.borderRadius.map(({ name, value }, index) => {
        const radiusName =
          name || getBorderRadiusName(index, defaultBorderRadiusIndex, theme.borderRadius.length)
        // Convert to rem or keep as px based on preference
        const numValue = typeof value === 'number' ? value : parseFloat(String(value))
        const radiusValue = useRem ? `${numValue / 16}rem` : `${numValue}px`
        return { [radiusName]: radiusValue }
      })
    )
  }

  return cleanTheme
}

export function rgbToHex(int: number): string {
  let hex = Number(int).toString(16)
  if (hex.length < 2) {
    hex = `0${hex}`
  }
  return hex
}

export function makeHex(r: number, g: number, b: number): string {
  const red = rgbToHex(r)
  const green = rgbToHex(g)
  const blue = rgbToHex(b)
  return `#${red}${green}${blue}`
}

export function makeRgb(color: { r: number; g: number; b: number; a?: number }): {
  r: number
  g: number
  b: number
  a: number
} {
  const r = Math.round(255 * color.r)
  const g = Math.round(255 * color.g)
  const b = Math.round(255 * color.b)
  const a = Math.round(100 * (color.a ?? 1)) / 100
  return { r, g, b, a }
}

export function formatTailwind4Theme(cleanTheme: CleanTheme): string {
  const prefixMap: Record<string, string> = {
    colors: 'color',
    fontFamily: 'font',
    fontSize: 'text',
    fontWeight: 'font-weight',
    letterSpacing: 'tracking',
    lineHeight: 'leading',
    borderRadius: 'radius',
    boxShadow: 'shadow',
  }

  const lines: string[] = []

  const flattenColors = (obj: Record<string, string | Record<string, string>>) => {
    for (const [colorName, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        lines.push(`  --color-${colorName}: ${value};`)
      } else if (typeof value === 'object' && value !== null) {
        for (const [variant, val] of Object.entries(value)) {
          const safeVariant = variant.replace('/', '-')
          lines.push(`  --color-${colorName}-${safeVariant}: ${val};`)
        }
      }
    }
  }

  for (const [section, values] of Object.entries(cleanTheme)) {
    const ns = prefixMap[section]
    if (!ns || typeof values !== 'object') continue

    if (section === 'colors') {
      flattenColors(values as Record<string, string | Record<string, string>>)
      continue
    }

    if (section === 'boxShadow') {
      for (const [key, val] of Object.entries(values)) {
        if (!val) continue
        const cleanKey = key.replace(/^shadow-/, '')
        lines.push(`  --shadow-${cleanKey}: ${val};`)
      }
      continue
    }

    if (section === 'borderRadius') {
      for (const [key, val] of Object.entries(values)) {
        // DEFAULT becomes --radius (no suffix), others get the key as suffix
        const varName = key === 'DEFAULT' ? '--radius' : `--radius-${key}`
        lines.push(`  ${varName}: ${val};`)
      }
      continue
    }

    for (const [key, val] of Object.entries(values)) {
      lines.push(`  --${ns}-${key}: ${val};`)
    }
  }

  return `@theme {\n${lines.join('\n')}\n}`
}

export function formatTailwind3Theme(cleanTheme: CleanTheme): string {
  const themeObj: Record<string, unknown> = {}

  if (cleanTheme.colors) {
    themeObj.colors = cleanTheme.colors
  }
  if (cleanTheme.fontFamily) {
    themeObj.fontFamily = cleanTheme.fontFamily
  }
  if (cleanTheme.fontSize) {
    themeObj.fontSize = cleanTheme.fontSize
  }
  if (cleanTheme.boxShadow) {
    themeObj.boxShadow = cleanTheme.boxShadow
  }
  if (cleanTheme.borderRadius) {
    themeObj.borderRadius = cleanTheme.borderRadius
  }

  const formatValue = (val: unknown, indent = 2): string => {
    if (typeof val === 'string') {
      return `'${val}'`
    }
    if (typeof val === 'number') {
      return String(val)
    }
    if (Array.isArray(val)) {
      return `[${val.map((v) => formatValue(v)).join(', ')}]`
    }
    if (typeof val === 'object' && val !== null) {
      const entries = Object.entries(val)
      if (entries.length === 0) return '{}'
      const spaces = ' '.repeat(indent)
      const innerSpaces = ' '.repeat(indent + 2)
      const lines = entries.map(([k, v]) => {
        const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`
        return `${innerSpaces}${key}: ${formatValue(v, indent + 2)}`
      })
      return `{\n${lines.join(',\n')}\n${spaces}}`
    }
    return String(val)
  }

  return `module.exports = {
  theme: {
    extend: ${formatValue(themeObj, 4)}
  }
}`
}
