/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  daisyui: {
    themes: [
      {
        emerald: {
          ...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
          'primary-content': '#ffff',
          'base-100': '#e0f2fe',
          'base-200': '#bae6fd',
          'base-300': '#7dd3fc',
          'base-content': '#082f49',
        },
      },
    ],
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
