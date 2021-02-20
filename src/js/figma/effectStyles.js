import { makeRgb }  from '../helpers/helpers';

export default function() {
    // eslint-disable-next-line
  const effectStyles = figma.getLocalEffectStyles();
  const shadows = [];

  effectStyles.forEach((style) => {
    const shadowStyle = {};
    const {effects, name} = style;
    const styleString = [];
    // Generate css string for each shadow
    effects.forEach(effect => {
      const {color,offset,radius, spread, type} = effect;
      const {r,g,b,a} = makeRgb(color);
      const colorString = `${r},${g},${b},${a}`;
      styleString.push(`${type === 'INNER_SHADOW' ? 'inset ':''}${offset.x}px ${offset.y}px ${radius}px ${spread}px rgba(${colorString})`);
    });
    // Create object & push it to shadows
    if(shadowStyle){
      shadowStyle.name = name;
      shadowStyle.value = styleString.join(', ');
      shadows.push(shadowStyle);
    }
  });

  return {shadows};
}
