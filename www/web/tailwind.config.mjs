import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Onest Variable', ..._fontFamily.sans],
			},
			animation: {
				marquee: 'marquee 60s linear infinite',
				marquee2: 'marquee2 60s linear infinite',
				border: 'border 4s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				border: {
					to: { '--border-angle': '360deg' },
				},
			},
			height: {
				navbar: '70px',
				footer: '120px',
				hero: 'calc(100vh - 256px)',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
		require('./src/plugins/text-shadow'),
	],
};
