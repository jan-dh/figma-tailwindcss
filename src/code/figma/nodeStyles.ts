interface NodeStylesResult {
  finalRadii: { name: string; value: number }[]
}

export default async function getNodeStyles(): Promise<NodeStylesResult> {
  await figma.loadAllPagesAsync()

  const filteredNodes = figma.root.findAll(
    (n): n is SceneNode & { cornerRadius: number } =>
      'cornerRadius' in n && typeof (n as any).cornerRadius === 'number'
  )

  const radii = new Set<number>()

  filteredNodes.forEach((n) => {
    const cornerRadius = (n as any).cornerRadius as number
    if (typeof cornerRadius === 'number') {
      const value = cornerRadius < 99 ? cornerRadius : 999
      radii.add(value)
    }
  })

  const radiiArray = [...radii].sort((a, b) => a - b)
  const finalRadii: { name: string; value: number }[] = []

  radiiArray.forEach((radius) => {
    const value = Number(radius)
    const name = ''
    finalRadii.push({ name, value })
  })

  // Add default none
  finalRadii.unshift({ name: 'none', value: 0 })

  return { finalRadii }
}
