module.exports = {
  plugins: {
    'tailwindcss': {},
    'postcss-import': {},
    'postcss-nested': {},
    'autoprefixer': {},
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false
  }
};
