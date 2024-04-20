export default async function() {
  // eslint-disable-next-line
  const textStyles = await figma.getLocalTextStylesAsync();
  const fontSizes = [];
  const fontFamilies = [];
  const finalSizes = [];
  const finalFamilies = [];

  textStyles.forEach((style) => {
    const { family } = style.fontName;
    const { fontSize } = style;

    fontFamilies.push(family);
    fontSizes.push(fontSize);
  });

  // Get unique values
  const singleSizes = Array.from(new Set(fontSizes)).sort((a, b) => a - b);
  const singleFamilies = Array.from(new Set(fontFamilies));

  // Clean sizes
  singleSizes.forEach((size) => {
    const name = '';
    // Pass everything as a string
    const value = size.toString();
    const result = { name, value };
    finalSizes.push(result);
  });

  // Clean families
  singleFamilies.forEach((family) => {
    const name = family.replace(/\s+/g, '-').toLowerCase();
    const value = family;
    const result = { name, value };
    finalFamilies.push(result);
  });

  // Make objects
  return { finalSizes, finalFamilies };
}
