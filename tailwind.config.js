/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyUi: {
		themes: ['dark', 'light']
	},
	theme: {
		extend: {
			screens: {
				'3xl': '2560px'
			},
			fontFamily: {
				handwriting: ['Delius Unicase', 'sans-serif'],
				serif: ['Roboto Slab Variable', 'serif'],
				sans: ['Raleway Variable', 'sans-serif']
			},
			padding: {
				layout: '40px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
