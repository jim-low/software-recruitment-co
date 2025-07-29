/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js,html}'],
  theme: {
    extend: {
      fontSize: {
        'sm': '13px',
        'base': '16px',
        'md': '19px',
        'title-small': '30px',
        'title-medium': '56px',
        'title-large': '66px',
      },
      colors: {
        brand: {
          black: '#451B09',
          white: '#ffffff',
          yellow: '#FCDF69',
          orange: '#F99D76',
          blue: '#064EA4',
          skyblue: '#D7E7FB',
          darkblue: '#0E2152',
          auxiliary: '#686868',
        },
      },
    }
  },
  plugins: [],
}
