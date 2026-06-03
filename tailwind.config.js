/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    container: {
      center: true, 
      screens: {
        sm: '100%',    
        md: '100%',     
        lg: '100%',     
        xl: '1440px',   
        '2xl': '1440px',
      },
      padding: {
        DEFAULT: '1rem',   
        sm: '2rem',        
        lg: '4rem',        
        xl: '5rem',       
      },
    },

    extend: {
      colors: {
        brand: {
          50: '#FFF5F2',
          100: '#FFE6DE',
          200: '#FFCEB8',
          300: '#FFAC87',
          400: '#FF7E4D',
          500: '#FF623E',
          600: '#E64B27',
          700: '#B83416',
          800: '#8A220B',
          900: '#5C1203',
        },
        neutral: {
          950: '#090B0F',
        },
        textMain: '#0A0D12',
        textMuted: '#717680',
      },

      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },

      fontSize: {
        'display-hero': ['56px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },

      borderRadius: {
        'brand-lg': '16px',
        'brand-xl': '24px',
      },
    },
  },
  plugins: [],
}