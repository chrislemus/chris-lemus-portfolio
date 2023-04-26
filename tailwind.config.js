/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  daisyui: {
    themes: [
      {
        emerald: {
          ...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
          // primary: '#a991f7',
          'primary-content': '#ffff',
        },
      },
    ],
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
//       mytheme: {
//         primary: '#a991f7',
//         secondary: '#f6d860',
//         accent: '#37cdbe',
//         neutral: '#3d4451',
//         'base-100': '#ffffff',
//       },
//     },
