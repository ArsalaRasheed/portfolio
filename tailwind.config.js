/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic colors driven by CSS variables (see src/index.css)
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        // Single brand accent — deep editorial emerald
        accent: {
          50: '#F1F7F4',
          100: '#DCEBE3',
          200: '#B9D9C9',
          300: '#88BEA4',
          400: '#51A07C',
          500: '#258463',
          600: '#0F7A5A',
          700: '#0B624A',
          800: '#0A4E3C',
          900: '#083F31',
          950: '#03251D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(19 28 25 / 0.04), 0 10px 30px -18px rgb(19 28 25 / 0.18)',
        lift: '0 1px 2px rgb(19 28 25 / 0.05), 0 22px 44px -24px rgb(19 28 25 / 0.28)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
