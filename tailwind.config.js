import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'bar-top': {
          '0%, 100%': { transform: 'scale(0, 1)' },
          '50%': { transform: 'scale(1, 1)' },
        },
        'bar-right': {
          '0%, 100%': { transform: 'scale(1, 0)' },
          '50%': { transform: 'scale(1, 1)' },
        },
        'bar-bottom': {
          '0%, 100%': { transform: 'scale(0, 1)' },
          '50%': { transform: 'scale(1, 1)' },
        },
        'bar-left': {
          '0%, 100%': { transform: 'scale(1, 0)' },
          '50%': { transform: 'scale(1, 1)' },
        },
        "hexagon-clip": {
          "0%": { clipPath: " polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" },
        },
      },
    },
    animation: {
      'bar-top': 'bar-top 3.2s linear infinite',
      'bar-right': 'bar-right 3.2s linear infinite',
      'bar-bottom': 'bar-bottom 3.2s linear infinite',
      'bar-left': 'bar-left 3.2s linear infinite',
      "hexagon-clip": "hexagon-clip 0.1s forwards",

    },

    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
    },
    animation: {
      float: "float 3s ease-in-out infinite",
    },



    // Custom clip-path for hexagon

  },

  plugins: [forms],
};


