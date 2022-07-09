/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    container: false
  },
  content: ["./src/**/*.{html, js}"],
  theme: {
    colors: {
      'pm': {
        DEFAULT: '#F23202',
        'd1': '#DE2E02',
        'd2': '#CA2A02',
        'l1': '#FD3D0D',
        'l2': '#FD4D21',
      },
      'sec': {
        DEFAULT: '#2176FF',
        'd1': '#0A68FF',
        'd2': '#005EF5',
        'l1': '#3381FF',
        'l2': '#478EFF',
      },
      'tx':{
        DEFAULT: '#3B3D40',
        'light': '#4E5155',
        'dark': '#27292A',
      },
      'h': {
        DEFAULT: '#1F1F1F',
        'light': '#292929',
        'dark': '#141414',
      },
      'w': '#fff',
      'g':{
        'lt': '#F8F8F8',
        'md': '#E8EBED', //Border Light
        'dk': '#B9C2CA',
        'edk': '#979A9B', //Label Dark
      },
      'd':{
        DEFAULT: '#DB3400',
        'lt': '#FFD2C4',
        'dk': '#B82B00'
      },
      's':{
        DEFAULT: '#00C300',
        'lt': '#96FF96',
        'dk': '#007A00'
      },
      'wa':{
        DEFAULT: '#FFC300',
        'lt': '#FFD95C',
        'dk': '#795D00'
      }
    }, //Declaring default colors
    fontSize: {
      'xxs': '0.5rem', //8px
      'xs': '0.75rem', //12px
      'sm': '0.875rem', //14px
      DEFAULT: '1rem', //16px
      '1.125base': '1.125rem', //
      '1.25base': '1.25rem',
      '1.5base': '1.5rem',
      '1.875base': '1.875rem',
      '2base': '2rem',
      '2.125base': '2.125rem',
      '2.25base': '2.25rem',
      '2.5base': '2.5rem',
      '2.875base': '2.875rem',
      '3base': '3rem',
      '3.125base': '3.125rem',
      '3.25base': '3.25rem',
      '3.5base': '3.5rem',
      '3.875base': '3.875rem',
    }, // Declaring custom Font Size
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'banner': "url('../images/banner.png')",
      },
      lineHeight: {
        '1.3': '1.3',
        '1.35': '1.35',
        '1.4': '1.4',
        '1.5': '1.5',
        '1': '1',
        '1.6': '1.6'
      },
      fontFamily: {
        'heading': ['Roboto', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
      spacing: {
        '0': '0',
        '0.25': '4px',
        '0.5': '8px',
        '0.75': '12px',
        '1': '16px',
        '1.25': '20px',
        '1.5': '24px',
        '1.75': '28px',
        '2': '32px',
        '2.25': '36px',
        '2.5': '40px',
        '2.75': '44px',
        '3': '48px',
        '3.25': '52px',
        '3.5': '56px',
        '3.75': '60px',
        '4': '64px',
      }, //Declaring Padding and Margin
      borderRadius: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        DEFAULT: '16px',
        'lg': '20px',
        'xl': '24px'
      }//Declaring Border Radius
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          maxWidth: '100%',
          padding: '1em',
          '@screen sm': {//640px
            maxWidth: '600px',
          },
          '@screen md': { //768px
            maxWidth: '700px',
          },
          '@screen lg': { //1024px
            maxWidth: '980px',
          },
          '@screen xl': { //1280px
            maxWidth: '1200px',
          },
          '@screen 2xl': { //1536px
            maxWidth: '1400px',
          },
        }
      })
    }
  ],
}
