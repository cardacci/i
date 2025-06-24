/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// Enable future compatibility and performance optimizations
	future: {
		hoverOnlyWhenSupported: true
	},
	plugins: [],
	theme: {
		extend: {
			animation: {
				blink: 'blink 1s step-end infinite'
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			}
		}
	}
};
