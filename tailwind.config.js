/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      /* ─── Brand Colors ─── */
      colors: {
        brand: {
          orange: '#f97316',
          'orange-light': '#fb923c',
          'orange-dark': '#ea580c',
          lime: '#a3e635',
          'lime-dark': '#84cc16',
          green: '#22c55e',
          black: '#000000',
          dark: '#0a0a0a',
          'dark-card': '#111111',
          'dark-surface': '#171717',
          'dark-border': '#262626',
        },
      },

      /* ─── Typography ─── */
      fontFamily: {
        heading: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1' }],
        'section-title': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15' }],
      },

      /* ─── Spacing ─── */
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
        'section-sm': 'clamp(3rem, 6vw, 5rem)',
      },

      /* ─── Container ─── */
      maxWidth: {
        container: '80rem', // 1280px
        content: '64rem',   // 1024px
        narrow: '48rem',     // 768px
      },

      /* ─── Border Radius ─── */
      borderRadius: {
        card: '1.25rem',
        'card-lg': '1.5rem',
        button: '0.75rem',
      },

      /* ─── Shadows ─── */
      boxShadow: {
        'glow-orange': '0 0 60px rgba(249, 115, 22, 0.15)',
        'glow-orange-lg': '0 0 100px rgba(249, 115, 22, 0.2)',
        'glow-lime': '0 0 40px rgba(163, 230, 53, 0.2)',
        card: '0 4px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 50px rgba(249, 115, 22, 0.15)',
      },

      /* ─── Animations ─── */
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'text-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-left': 'slide-left 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slide-right 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'text-reveal': 'text-reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        float: 'float 6s ease-in-out infinite',
      },

      /* ─── Transitions ─── */
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        athletic: 'cubic-bezier(0.77, 0, 0.175, 1)',
      },

      /* ─── Backdrop Blur ─── */
      backdropBlur: {
        nav: '20px',
      },
    },
  },
  plugins: [],
};