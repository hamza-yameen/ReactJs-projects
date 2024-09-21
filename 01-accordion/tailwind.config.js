// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: {
        100: '#c5c5c5',
      },
      h1: '#142850',
    },
    extend: {
      backgroundImage: {
        'home-custom-gradient':
          'linear-gradient(15deg, #142850, #14365f, #13476f, #125d80, #107792, #0d96a5, #09b8b4, #04ccb1)',
      },
    },
  },
  plugins: [],
}
