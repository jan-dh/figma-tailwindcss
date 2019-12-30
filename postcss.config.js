module.exports = ({ options }) => ({
  plugins: {
    "postcss-import": {},
    tailwindcss: "tailwind.config.js",
    "postcss-nested": {},
    autoprefixer: {},
    cssnano: options.isProduction ? {} : false
  }
});
