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
      colors: {
        primary: '#ff6384',
        secondary: '#36a1f6',
        green: {
          200: 'rgb(28 17 17)',
        },
        bghover: 'rgba(0, 0, 0, 0.4)',
        bgbackdrop: 'rgba(0, 0, 0, 0.8)',
        white: 'white',
      },
      fontFamily: {
        sans: ['sans-serif'],
        serif: ['serif'],
        mono: ['monospace'],
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
    },
  },
  plugins: [],
}
