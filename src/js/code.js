/* eslint-disable */
import getPaintStyles from './figma/paintStyles';
import getTextStyles from './figma/textStyles';
import getEffectStyles from './figma/effectStyles';
import getNodeStyles from './figma/nodeStyles';

// theme
const theme = {
  colors: [],
  gradientColors:[],
  fontSize: [],
  fontFamily: [],
  boxShadow: [],
  baseFontSize: false,
  groupColor: false
};

// Gather all different properties
const {colors, gradientColors} = getPaintStyles();
const {finalSizes, finalFamilies} = getTextStyles();
const {shadows} = getEffectStyles();
const {radius} = getNodeStyles();

console.log(radius);

// Create theme
theme.colors.push(...colors);
theme.gradientColors.push(...gradientColors);
theme.fontSize.push(...finalSizes);
theme.fontFamily.push(...finalFamilies);
theme.boxShadow.push(...shadows);

// options
const options = {
  width: 740,
  height: 600
};

// showUi
figma.showUI(__html__, options);
// pass theme
figma.ui.postMessage(theme);
