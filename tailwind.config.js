/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ==========================================
      // CUSTOM COLORS 
      // ==========================================
      colors: {
        // Warna oranye utama & turunannya  
        brand: {
          50: '#FFF5F2',
          100: '#FFE6DE',
          200: '#FFCEB8',
          300: '#FFAC87',
          400: '#FF7E4D',
          500: '#FF623E', // Primary Main Brand Color
          600: '#E64B27',
          700: '#B83416',
          800: '#8A220B',
          900: '#5C1203',
        },
        // Warna netral untuk background dan panel (Light/Dark mode)
        neutral: {
          950: '#090B0F', // buat dark:bg-zinc-950 atau bg-neutral-950 
        },
        // Shortcut warna teks & panel penunjang hero
        textMain: '#0A0D12',
        textMuted: '#717680',
      },

      // ==========================================
      // TYPOGRAPHY 
      // ==========================================
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      fontSize: {
        'display-hero': ['56px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },

      borderRadius: {
        'brand-lg': '16px',
        'brand-xl': '24px',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}