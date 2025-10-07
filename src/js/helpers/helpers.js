import { formatColor } from './colorFormatter.js';

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
        if (cleanName === name) {
            groupedColors[key] = value;
        } else {
            const newItem = {};
            newItem[cleanName] = value;
            groupedColors[key] = Object.assign(groupedColors[key], {
                ...newItem,
            });
        }
    });
    return groupedColors;
}

export function cleanupTheme(theme, colorFormat, grouped) {
    const cleanTheme = {};
    const allowedKeys = [
        'colors',
        'fontFamily',
        'fontSize',
        'boxShadow',
        'borderRadius',
    ];

    Object.entries(theme).forEach(([key, values]) => {
        // Check to remove simple global state items
        if (
            !Array.isArray(values) ||
            !allowedKeys.includes(key) ||
            Object.keys(values).length === 0
        )
            return;
        if (key === 'colors') {
            const formattedColors = values.map(({ name, value }) => ({
                name,
                value: formatColor(value, colorFormat),
            }));
            cleanTheme[key] = grouped
                ? groupColors(formattedColors)
                : Object.assign(
                      {},
                      ...formattedColors.map((c) => ({ [c.name]: c.value }))
                  );
        } else {
            const cleanArray = values.map(({ name, value }) => {
                switch (key) {
                    case 'fontSize':
                        return { [name]: `${value / 16}rem` };
                    default:
                        return { [name]: value };
                }
            });
            cleanTheme[key] = Object.assign({}, ...cleanArray);
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
    return { r, g, b, a };
}

export function formatTailwind4Theme(cleanTheme) {
    const prefixMap = {
        colors: 'color',
        fontFamily: 'font',
        fontSize: 'text',
        fontWeight: 'font-weight',
        letterSpacing: 'tracking',
        lineHeight: 'leading',
        borderRadius: 'radius',
        boxShadow: 'shadow',
    };

    const lines = [];

    const flattenColors = (obj) => {
        for (const [colorName, value] of Object.entries(obj)) {
            if (typeof value === 'string') {
                lines.push(`  --color-${colorName}: ${value};`);
            } else if (typeof value === 'object' && value !== null) {
                for (const [variant, val] of Object.entries(value)) {
                    const safeVariant = variant.replace('/', '-');
                    lines.push(
                        `  --color-${colorName}-${safeVariant}: ${val};`
                    );
                }
            }
        }
    };

    for (const [section, values] of Object.entries(cleanTheme)) {
        const ns = prefixMap[section];
        if (!ns || typeof values !== 'object') continue;

        if (section === 'colors') {
            flattenColors(values);
            continue;
        }

        if (section === 'boxShadow') {
            for (const [key, val] of Object.entries(values)) {
                if (!val) continue;
                const cleanKey = key.replace(/^shadow-/, '');
                lines.push(`  --shadow-${cleanKey}: ${val};`);
            }
            continue;
        }

        if (section === 'borderRadius') {
            for (const [key, val] of Object.entries(values)) {
                lines.push(`  --radius-${key}: ${val};`);
            }
            continue;
        }

        for (const [key, val] of Object.entries(values)) {
            lines.push(`  --${ns}-${key}: ${val};`);
        }
    }

    return `@theme {\n${lines.join('\n')}\n}`;
}
