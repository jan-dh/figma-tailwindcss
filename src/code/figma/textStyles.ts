interface TextStylesResult {
  finalSizes: { name: string; value: string }[]
  finalFamilies: { name: string; value: string }[]
}

export default async function getTextStyles(): Promise<TextStylesResult> {
  const textStyles = await figma.getLocalTextStylesAsync()
  const fontSizes: number[] = []
  const fontFamilies: string[] = []
  const finalSizes: { name: string; value: string }[] = []
  const finalFamilies: { name: string; value: string }[] = []

  textStyles.forEach((style) => {
    const { family } = style.fontName
    const { fontSize } = style

    fontFamilies.push(family)
    fontSizes.push(fontSize)
  })

  // Get unique values
  const singleSizes = Array.from(new Set(fontSizes)).sort((a, b) => a - b)
  const singleFamilies = Array.from(new Set(fontFamilies))

  // Clean sizes
  singleSizes.forEach((size) => {
    const name = ''
    const value = size.toString()
    finalSizes.push({ name, value })
  })

  // Clean families
  singleFamilies.forEach((family) => {
    const name = family.replace(/\s+/g, '-').toLowerCase()
    const value = family
    finalFamilies.push({ name, value })
  })

  return { finalSizes, finalFamilies }
}
