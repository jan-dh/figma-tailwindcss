module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        code: {
          black: 'var(--color-code-black)',
          green: 'var(--color-code-green)',
          yellow: 'var(--color-code-yellow)',
          purple: 'var(--color-code-purple)',
          red: 'var(--color-code-red)',
          blue: 'var(--color-code-blue)',
          white: 'var(--color-code-white)'
        },
        tailwind: '#2e3748'
      }
    }
  },
  variants: {}
};
