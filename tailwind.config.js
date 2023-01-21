// tailwind.config.js
module.exports = {
  content: [
    './App.js',
    './src/**/*.js',
    './screens/**/*.js',
    './layout/**/*.js',
  ],
  theme: {
    extend: {},

    fontSize: {
      base: '12px',
      custom: '35px',
    },
  },
  plugins: [],
  // assets: ['./assets/fonts/'],
};
