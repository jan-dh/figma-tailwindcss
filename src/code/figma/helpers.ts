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

export function makeRgb(color: RGB | RGBA): { r: number; g: number; b: number; a: number } {
  const r = Math.round(255 * color.r)
  const g = Math.round(255 * color.g)
  const b = Math.round(255 * color.b)
  const a = 'a' in color ? Math.round(100 * color.a) / 100 : 1
  return { r, g, b, a }
}
