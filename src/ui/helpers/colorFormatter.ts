// Converts sRGB (0-255) to linear RGB (0-1)
function sRGBToLinear(c: number): number {
  c /= 255
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

// RGB string to array
function parseRGB(input: string | number[]): [number, number, number, number] {
  if (typeof input === 'string' && input.startsWith('#')) {
    let hex = input.slice(1)
    if (hex.length === 3)
      hex = hex
        .split('')
        .map((h) => h + h)
        .join('')
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return [r, g, b, 1]
  }
  if (typeof input === 'string' && input.startsWith('rgb')) {
    const nums = input.match(/[\d.]+/g)?.map(Number) || [0, 0, 0, 1]
    return nums.length === 3
      ? [nums[0] ?? 0, nums[1] ?? 0, nums[2] ?? 0, 1]
      : [nums[0] ?? 0, nums[1] ?? 0, nums[2] ?? 0, nums[3] ?? 1]
  }
  if (Array.isArray(input)) {
    return input.length === 3
      ? [input[0] ?? 0, input[1] ?? 0, input[2] ?? 0, 1]
      : [input[0] ?? 0, input[1] ?? 0, input[2] ?? 0, input[3] ?? 1]
  }
  return [0, 0, 0, 1]
}

// RGB -> HSL
function rgbToHsl([r, g, b]: [number, number, number]): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h = 0,
    s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return [h * 360, s * 100, l * 100]
}

// RGB -> OKLab
function rgbToOklab([r, g, b]: [number, number, number]): [number, number, number] {
  // convert sRGB -> linear
  const R = sRGBToLinear(r),
    G = sRGBToLinear(g),
    B = sRGBToLinear(b)
  // linear RGB -> LMS
  const L = 0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B
  const M = 0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B
  const S = 0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B
  // LMS -> OKLab
  const l_ = Math.cbrt(L * 0.8189330101 + M * 0.3618667424 - S * 0.1288597137)
  const m_ = Math.cbrt(L * 0.0329845436 + M * 0.9293118715 + S * 0.0361456387)
  const s_ = Math.cbrt(L * 0.0482003018 + M * 0.2643662691 + S * 0.633851707)
  const L_ok = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_
  const a_ok = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_
  const b_ok = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_
  return [L_ok, a_ok, b_ok]
}

// OKLab -> OKLCH
function oklabToOklch([L, a, b]: [number, number, number]): [number, number, number] {
  const C = Math.sqrt(a * a + b * b)
  let H = Math.atan2(b, a) * (180 / Math.PI)
  if (H < 0) H += 360
  return [L, C, H]
}

// Main format function
export function formatColor(input: string | number[], format: string = 'hex'): string {
  const [r, g, b, alpha] = parseRGB(input)
  switch (format) {
    case 'rgba':
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    case 'hsl': {
      const [h, s, l] = rgbToHsl([r, g, b])
      return `hsl(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%)`
    }
    case 'oklab': {
      const [L, a, b_] = rgbToOklab([r, g, b])
      return `oklab(${L.toFixed(3)}, ${a.toFixed(3)}, ${b_.toFixed(3)})`
    }
    case 'oklch': {
      const oklch = oklabToOklch(rgbToOklab([r, g, b]))
      return `oklch(${oklch[0].toFixed(3)}, ${oklch[1].toFixed(3)}, ${oklch[2].toFixed(0)})`
    }
    case 'hex':
    default:
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }
}
