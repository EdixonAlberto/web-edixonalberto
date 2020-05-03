const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem'
      },
      borderWidth: {
        '14': '14px'
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)'
      },

      color: {
        primary: 'var(--text-color-primary)',
        secondary: 'var(--text-color-secondary)'
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)'
      },

      transparent: 'transparent',

      /* COLORS */
      black: colors.black,
      white: colors.white,
      green: colors.teal,
      gray: colors.gray
    },
    fill: (theme) => theme('colors'), // To change the color in a svg image dynamically
    fontFamily: {
      sans: [
        'Roboto',
        'Nunito Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
};
