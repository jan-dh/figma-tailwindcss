/* eslint-disable */
import getColors from './figma/colors';
import getTypes from './figma/types';

// Const theme
const theme = {
  colors: [],
  fontSize: [],
  fontFamily: [],
  baseFontSize: false,
  groupColor: false
};

// Gather all different properties
const colors = getColors();
const fonts = getTypes();

// Create theme
theme.colors.push(...colors);
theme.fontSize.push(...fonts[0]);
theme.fontFamily.push(...fonts[1]);

// options
const options = {
  width: 740,
  height: 600
};

// showUi
figma.showUI(__html__, options);
// pass theme
figma.ui.postMessage(theme);
