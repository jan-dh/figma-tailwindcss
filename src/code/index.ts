import getPaintStyles from './figma/paintStyles'
import getTextStyles from './figma/textStyles'
import getEffectStyles from './figma/effectStyles'
import getNodeStyles from './figma/nodeStyles'

interface Theme {
  colors: { name: string; value: string }[]
  gradientColors: string[]
  fontSize: { name: string; value: string }[]
  fontFamily: { name: string; value: string }[]
  boxShadow: { name: string; value: string }[]
  borderRadius: { name: string; value: number }[]
  baseFontSize: false
  preferences: {
    tailwindVersion: '4'
    colorFormat: 'hex'
    grouped: false
  }
}

const theme: Theme = {
  colors: [],
  gradientColors: [],
  fontSize: [],
  fontFamily: [],
  boxShadow: [],
  borderRadius: [],
  baseFontSize: false,
  preferences: {
    tailwindVersion: '4',
    colorFormat: 'hex',
    grouped: false,
  },
}

const options = {
  width: 740,
  height: 600,
}

// Gather all different properties
const paintStyles = getPaintStyles()
const textStyles = getTextStyles()
const effectStyles = getEffectStyles()
const nodeStyles = getNodeStyles()

Promise.all([paintStyles, textStyles, effectStyles, nodeStyles])
  .then((values) => {
    theme.colors.push(...values[0].colors)
    theme.gradientColors.push(...values[0].gradientColors)
    theme.fontSize.push(...values[1].finalSizes)
    theme.fontFamily.push(...values[1].finalFamilies)
    theme.boxShadow.push(...values[2].shadows)
    theme.borderRadius.push(...values[3].finalRadii)
  })
  .then(() => {
    // Show UI
    figma.showUI(__html__, options)
    // Pass theme to UI
    figma.ui.postMessage(theme)
  })
