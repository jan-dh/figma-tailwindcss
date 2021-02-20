import { useGlobal } from 'reactn';

export function calculatePosition(index, basePosition, length) {
  let value = '';
  if (index === basePosition) {
    value = 'base';
  }
  if (index === basePosition - 1) {
    value = 'sm';
  } else if (index === basePosition - 2) {
    value = 'xs';
  } else if (index === basePosition + 1) {
    value = 'lg';
  } else if (index === basePosition + 2) {
    value = 'xl';
  } else if (index < basePosition - 2) {
    const numberOfSmaller = length - (length - (basePosition - 2));
    const position = -(index - (numberOfSmaller + 1));
    value = `${position}xs`;
  } else if (index > basePosition + 2) {
    const numberOfBigger = length - (basePosition + 3);
    const position = numberOfBigger - (length - (index + 2));
    value = `${position}xl`;
  }
  return value;
}

export function getPart(name, i) {
  let cleanName = name;
  const parts = name.split('/');
  if (name.indexOf('/') !== -1) {
    cleanName = parts[parts.length - i];
  }
  return cleanName;
}

export function groupColors(colors) {
  const groupedColors = {};
  colors.forEach((color) => {
    const { name, value } = color;
    const key = getPart(name, 2);
    if (!groupedColors[key]) {
      groupedColors[key] = {};
    }
    const cleanName = getPart(name, 1);
    if(cleanName === name){
      groupedColors[key] = value;
    } else{
      const newItem = {};
      newItem[cleanName] = value;
      groupedColors[key] = Object.assign(groupedColors[key], { ...newItem });
    }
  });
  return groupedColors;
}

export function cleanupTheme(theme) {
  const cleanTheme = {};
  // Specify what keys to output in theme
  const allowedKeys = ['colors','fontFamily','fontSize','boxShadow'];
  const [grouped] = useGlobal('groupColor');
  Object.entries(theme).forEach(([key, values]) => {
    // Check to remove simple global state items
    if (Array.isArray(values) && allowedKeys.includes(key)) {
      // Theme item
      const themeItem = {};
      // Make a key/value pair
      const cleanArray = values.map(({ name, value }) => {
        const cleanItem = {};
        // Custom transforms, based on type
        switch (key) {
          case 'fontSize':
            cleanItem[name] = `${value / 16}rem`;
            break;
          default:
            cleanItem[name] = value;
        }
        return cleanItem;
      });
      // Return
      const cleanValues = Object.assign({}, ...cleanArray);
      if (key === 'colors' && grouped) {
        themeItem[key] = groupColors(values);
      } else {
        themeItem[key] = cleanValues;
      }
      Object.assign(cleanTheme, themeItem);
    }
  });
  return cleanTheme;
}

export function rgbToHex(int) {
  let hex = Number(int).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
}

export function makeHex(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return `#${red}${green}${blue}`;
}

export function makeRgb(color) {
  const r = Math.round(255 * color.r);
  const g = Math.round(255 * color.g);
  const b = Math.round(255 * color.b);
  // TODO * 100 and round
  const a = Math.round(100 * color.a) / 100;
  return {r, g, b, a}
}
