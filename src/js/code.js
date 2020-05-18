/* eslint-disable */
import getColors from './figma/colors';
import getTypes from './figma/types';

// theme
const theme = {
  colors: [],
  gradientColors:[],
  fontSize: [],
  fontFamily: [],
  baseFontSize: false,
  groupColor: false
};

// Gather all different properties
const {colors, gradientColors} = getColors();
const {finalSizes, finalFamilies} = getTypes();

// Create theme
theme.colors.push(...colors);
theme.gradientColors.push(...gradientColors);
theme.fontSize.push(...finalSizes);
theme.fontFamily.push(...finalFamilies);

// options
const options = {
  width: 740,
  height: 600
};

// showUi
figma.showUI(__html__, options);
// pass theme
figma.ui.postMessage(theme);
