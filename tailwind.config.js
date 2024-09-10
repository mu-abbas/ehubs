import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#F8F8FB',
        gray: '#E0E4EA',
        darkGray: '#6C6C6C',
        offWhite: '#F6F6F6',
        lightBlue: '#D9E5F9',
        green: '#67CB65',
        orange: '#FF9533',
        red: '#E74444',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
  plugins: [],
};
