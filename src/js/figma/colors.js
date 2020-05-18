export default function() {
  // eslint-disable-next-line
  const colorStyles = figma.getLocalPaintStyles();
  const hexValueAndName = []; // array of hex values and their names

  function rgbToHex(int) {
    let hex = Number(int).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  }

  function makeHex(r, g, b) {
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return `#${red}${green}${blue}`;
  }

  colorStyles.forEach((style) => {
    /* Only work with solid colors */
    if (style.paints[0].color){
      const { name } = style;
      const r = Math.round(255 * style.paints[0].color.r);
      const g = Math.round(255 * style.paints[0].color.g);
      const b = Math.round(255 * style.paints[0].color.b);
      const value = makeHex(r, g, b);
      const result = { name, value };
      hexValueAndName.push(result);  
    }
  });

  return hexValueAndName;
}
