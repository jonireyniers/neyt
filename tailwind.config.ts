/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        border: '#e5e7eb',
        background: '#ffffff',
        foreground: '#000000',
        primary: '#3b82f6',
        secondary: '#1e40af',
        accent: '#f97316',
      },
    },
  },
  plugins: [],
}