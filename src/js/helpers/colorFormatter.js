import * as culori from 'culori';

export function formatColor(c, format) {
    const col = culori.parse(c);
    switch (format) {
        case 'rgba':
            return culori.formatRgb(col);
        case 'hsl':
            return culori.formatHsl(col);
        case 'oklch':
            return culori.formatOklch(col);
        case 'oklab':
            return culori.formatOklab(col);
        case 'hex':
        default:
            return culori.formatHex(col);
    }
}

export function parseColorToHex(input) {
    try {
        const col = culori.parse(input);
        if (!col) return null;
        return culori.formatHex(col).toLowerCase();
    } catch {
        return null;
    }
}
