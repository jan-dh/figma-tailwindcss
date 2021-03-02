# Figma Tailwindcss

A plugin that tries to bridge the gap between design and code. Figma Tailwindcss lets you export aspects of a design made in Figma to a javascript `theme` file that can easily be used with Tailwindcss.

---

## Table of Contents

-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [License](#license)

## Usage

### Creating your theme

The plugin gets it's info from the Local Styles. At this point it picks up:

-   colors
-   font-families
-   text-sizes
-   box-Shadow

#### Colors

Colors are taken from the Figma Local Paint Styles. Colors can be grouped in the export step. If you want to group codes,prefix them with the same name.

#### Font-families

The plugin will pick up all font-families used in the Local Text Styles.

#### Text-sizes

All the different font-sizes used in the Local Text Styles will be picked up by the plugin. Pick a base font-size and the rest of the font-size names are calculated accordingly. The logic used:

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

The font-sizes the plugin spits out will also be converted into a rem based scale.

#### Box-shadows
Taken from the effectStyles from your document.

### Importing your theme

Import the `theme.js` file in to your `tailwind.config.js` configuration file to use it:

**Require syntax**

`const myTheme = require(./theme);`

the require syntax will make sure your custom values get picked up by the [Intelligent Tailwind CSS plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). If you want to use this syntax, remove the `export default theme` statement from your theme file

**Import syntax**

`import 'myTheme' from './theme`

#### Extending the default theme

You can extend the default theme like so:

```
module.exports = {
    theme: {
        extend: {
            colors: myTheme.colors
        }
    }
```

More info on extending the default theme:
- https://tailwindcss.com/docs/theme#extending-the-default-theme
- https://www.youtube.com/watch?v=0l0Gx8gWPHk&ab_channel=TailwindLabs

## Contributing

All feedback is welcome. Feel free to submit [issues or suggestions](https://github.com/jan-dh/figma-tailwindcss/issues).

The plugin shows you some random messages when you're missing one of the exportable properties. If you want to add your own, feel free to make a Pull Request for [this file](https://github.com/jan-dh/figma-tailwindcss/blob/master/src/js/helpers/randomMessages.js).

## Roadmap

-  line-height
-  border-radius

## License

This project is licensed under the terms of the MIT license.
