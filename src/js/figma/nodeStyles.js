import { calculatePosition } from '../helpers/helpers';

export default async function() {
  // eslint-disable-next-line no-undef
  await figma.loadAllPagesAsync();
  // eslint-disable-next-line no-undef
  const filterdNodes = figma.root.findAll((n) => n.cornerRadius);
  const radii = new Set();
  Array.from(filterdNodes).forEach((n) => {
    if (typeof n.cornerRadius === 'number') {
      const value = n.cornerRadius < 99 ? n.cornerRadius : 999;
      radii.add(value);
    }
  });
  const radiiArray = [...radii].sort((a, b) => a - b);
  const finalRadii = [];

  radiiArray.forEach((radius, i) => {
    const n = calculatePosition(i, 2, radiiArray.length);
    // Rename base to default
    const value = radius > 98 ? '9999px' : `${radius / 16}rem`;
    let name = n === 'base' ? 'default' : n;
    // Rename full
    if (radius > 98) {
      name = 'full';
    }
    finalRadii.push({ name, value });
  });

  // Add default none
  finalRadii.unshift({ name: 'none', value: '0' });

  return { finalRadii };
}
