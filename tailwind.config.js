/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: '#a991f7',
  //         secondary: '#f6d860',
  //         accent: '#37cdbe',
  //         neutral: '#3d4451',
  //         'base-100': '#ffffff',
  //       },
  //     },
  //     // 'dark',
  //     // 'cupcake',
  //   ],
  // },
  // theme: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
