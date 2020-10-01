module.exports = {
  theme: {
    fontFamily: {
      play: ['Play', 'system-ui', '-apple-system', 'sans-serif'],
      body: ['"Source Sans Pro"', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'doodle-pattern': "url('images/doodles.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
