module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'postcss-nested': {},
    'autoprefixer': {},
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false
  }
};
