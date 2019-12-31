# Figma Tailwindcss

A plugin that tries to bridge the gap between design and code. Figma Tailwindcss lets you export aspects of a design made in Figma to a javascript `theme` file that can easily be used with Tailwindcss.

---

## Table of Contents

-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [License](#license)

## Usage

### Creating your theme

The plugin gets it's info from the Local Paint Styles and Local Text Styles. At this point it picks up:

-   colors
-   font-families
-   text-sizes

#### Colors

Colors are taken from the Figma Local Paint Styles. Colors can be grouped in the export step. If you want to group codes,prefix them with the same name.

#### Font-families

The plugin will pick up all font-families used in your Local Text Styles.

#### Text-sizes

All the different font-sizes you use in the Local Text Styles will be picked up by the plugin. You can pick a base font-size and the rest of the font-size names are calculated accordingly. The logic used:

```javascript
...
'3xs'
'2xs'
'xs'
'sm'
'base'
'lg'
'xl'
'2xl'
'3xl'
...
```

The font-sizes the plugin spits out will also be converted into a rem based scale (with 16 as your base).

### Importing your theme

Import the `theme.js` file in to your `tailwind.config.js` configuration file to use it:

`import theme from './theme';`

#### Overriding the default theme

To override an option in the default theme, create a theme section in your config and add the key you would like to override.

```
module.exports = {
    theme: {
        colors: {
            theme.colors
    }
```

#### Overriding the default theme

Using the spread operator at the end of each property you can add your theme values to an existing config or to the default tailwind config.

```
module.exports = {
    theme: {
        colors: {
            ...theme.colors
    }
```

## Contributing

All feedback is welcome. Feel free to submit [issues or suggestions](https://github.com/jan-dh/figma-tailwindcss/issues).

## Roadmap

-   🚀 Add more possible exports

## License

This project is licensed under the terms of the MIT license.
