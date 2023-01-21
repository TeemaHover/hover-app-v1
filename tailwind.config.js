// tailwind.config.js
module.exports = {
  content: ['./App.js', './components/**/*.js', './screens/**/*.js'],
  theme: {
    extend: {},
    colors: {
      darkBlue: '#152238',
      white: '#ffffff',
      bb: '#990000',
    },
    fontSize: {
      base: '15px',
      custom: '35px',
    },
  },
  plugins: [],
  // assets: ['./assets/fonts/'],
}
