/* eslint-disable */
import getPaintStyles from './figma/paintStyles';
import getTextStyles from './figma/textStyles';
import getEffectStyles from './figma/effectStyles';
import getNodeStyles from './figma/nodeStyles';

// theme
const theme = {
  colors: [],
  gradientColors: [],
  fontSize: [],
  fontFamily: [],
  boxShadow: [],
  borderRadius: [],
  baseFontSize: false,
  groupColor: false
};

// Gather all different properties
const paintStyles = getPaintStyles();
const textStyles = getTextStyles();
const effectStyles = getEffectStyles();
const nodeStyles = getNodeStyles();

// options
const options = {
  width: 740,
  height: 600
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
