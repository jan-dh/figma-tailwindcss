import Color from 'colorjs.io';

export function formatColor(input, format) {
  try {
    const c = new Color(input);

    switch (format) {
      case 'rgba':
        return c.to('srgb').toString({ format: 'rgb' });
      case 'hsl':
        return c.to('hsl').toString();
      case 'oklch':
        return c.to('oklch').toString();
      case 'oklab':
        return c.to('oklab').toString();
      case 'hex':
      default:
        return c.to('srgb').toString({ format: 'hex' });
    }
  } catch {
    return null; // invalid input
  }
}

export function parseColorToHex(input) {
  try {
    return new Color(input)
      .to('srgb')
      .toString({ format: 'hex' })
      .toLowerCase();
  } catch {
    return null;
  }
}
