/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // ==========================================
    // GLOBAL CONTAINER CONFIGURATION (Sesuai Figma 1440px)
    // ==========================================
    container: {
      center: true, // Auto center (mx-auto)
      screens: {
        sm: '100%',     // Full width di HP
        md: '100%',     // Full width di Tablet kecil
        lg: '100%',     // Full width di Tablet gede / Laptop kecil
        xl: '1440px',   // Mengunci lebar maksimal persis sesuai Figma lo di layar lebar
        '2xl': '1440px',
      },
      padding: {
        DEFAULT: '1rem',   // Padding 16px kiri-kanan di layar HP (px-4)
        sm: '2rem',        // Padding 32px kiri-kanan di layar Tablet (px-8)
        lg: '4rem',        // Padding 64px kiri-kanan di layar Desktop/Laptop (px-16)
        xl: '5rem',        // Padding 80px kiri-kanan di monitor ultra-wide (px-20)
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