export default function() {
  // eslint-disable-next-line
  const colorStyles = figma.getLocalPaintStyles();
  const colors = []; // array of hex values and their names
  const gradientColors = [];

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

  function makeRgb(color) {
    const r = Math.round(255 * color.r);
    const g = Math.round(255 * color.g);
    const b = Math.round(255 * color.b);
    return {r, g, b}
  }

  colorStyles.forEach((style) => {
    /* Only work with solid colors */
    if (style.paints[0].color){
      const { name } = style;
      const {r, g, b} = makeRgb(style.paints[0].color);
      const value = makeHex(r, g, b);
      const result = { name, value };
      colors.push(result);  
    } 
     /* Add gradients as a suggestion */
    else if(style.paints[0].gradientStops.length > 0 ){
      style.paints[0].gradientStops.forEach(stop => {
        const {r, g, b} = makeRgb(stop.color);
        const value = makeHex(r, g, b);
        gradientColors.push(value);
      })
    }
  });


  return {colors, gradientColors};
}
