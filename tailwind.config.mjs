/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2d5a8e',
          dark: '#0f1f3a',
        },
        accent: {
          DEFAULT: '#d4a537',
          light: '#e8c56d',
          dark: '#b8902e',
        },
        bg: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
          tertiary: '#f1f5f9',
        },
        text: {
          DEFAULT: '#0f172a',
          secondary: '#475569',
          muted: '#94a3b8',
        },
        border: {
          DEFAULT: '#e2e8f0',
          focus: '#1e3a5f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgb(0 0 0 / 0.08)',
        medium: '0 8px 24px -4px rgb(0 0 0 / 0.1)',
        strong: '0 20px 40px -8px rgb(0 0 0 / 0.12)',
      },
    },
  },
  plugins: [],
};