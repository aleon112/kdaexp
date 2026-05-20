/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark:         '#18181B',
          accent:       '#0A7986',
          'accent-light': '#E8F4F5',
          canvas:       '#FDFBF7',
          white:        '#FFFFFF',
          'gray-light': '#F5F5F3',
          'gray-med':   '#E2E8F0',
          'gray-text':  '#71717A',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        diffuse: '0 20px 60px -15px rgba(0,0,0,0.07)',
        card:    '0 4px 24px -8px rgba(0,0,0,0.08)',
        pill:    '0 8px 32px -4px rgba(0,0,0,0.12)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.32, 0.72, 0, 1)',
        expo:   'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

