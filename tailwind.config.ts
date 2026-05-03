import type { Config } from 'tailwindcss';

/** Tailwind is used only for its pipeline; brand colours live in `app/globals.css` (:root). */
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
