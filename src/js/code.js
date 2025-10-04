/* eslint-disable */
import getPaintStyles from './figma/paintStyles.js';
import getTextStyles from './figma/textStyles.js';
import getEffectStyles from './figma/effectStyles.js';
import getNodeStyles from './figma/nodeStyles.js';
import preferences from './settings/preferences.js';

// theme
const theme = {
  colors: [],
  gradientColors: [],
  fontSize: [],
  fontFamily: [],
  boxShadow: [],
  borderRadius: [],
  baseFontSize: false,
  groupColor: false,
  preferences,
};

// Gather all different properties
const paintStyles = getPaintStyles();
const textStyles = getTextStyles();
const effectStyles = getEffectStyles();
const nodeStyles = getNodeStyles();

// options
const options = {
  width: 740,
  height: 600,
};

Promise.all([paintStyles, textStyles, effectStyles, nodeStyles])
  .then((values) => {
    theme.colors.push(...values[0].colors);
    theme.gradientColors.push(...values[0].gradientColors);
    theme.fontSize.push(...values[1].finalSizes);
    theme.fontFamily.push(...values[1].finalFamilies);
    theme.boxShadow.push(...values[2].shadows);
    theme.borderRadius.push(...values[3].finalRadii);
  })
  .then(() => {
    // showUi
    figma.showUI(__html__, options);
    // pass theme
    figma.ui.postMessage(theme);
  });
