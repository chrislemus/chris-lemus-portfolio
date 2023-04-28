/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  daisyui: {
    themes: [
      {
        emerald: {
          ...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
          primary: '#047AFF',
          'primary-content': '#F9FAFB',
          secondary: '#463AA2',
          'secondary-content': '#F9FAFB',
          neutral: '#021431',
          'base-content': '#394E6A',
          'base-100': '#FFFFFF',
          'base-200': '#F2F7FF',
          'base-300': '#E3E9F4',
          // accent: '#37cdbe',
          // neutral: '#3d4451',
          // 'base-100': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
