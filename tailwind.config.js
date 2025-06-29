/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		base: true,
		darkTheme: 'light',
		logs: false,
		prefix: '',
		styled: true,
		themeRoot: ':root',
		themes: ['light'],
		utils: true
	},
	plugins: [
		function ({ addUtilities }) {
			// Utilities básicas de daisyUI para componentes que necesitas
			addUtilities({
				// Alert styles
				'.alert': {
					'align-items': 'center',
					border: '1px solid transparent',
					'border-radius': '0.5rem',
					display: 'flex',
					gap: '0.5rem',
					padding: '1rem'
				},
				'.alert-error': {
					'background-color': 'rgb(254 242 242)',
					'border-color': 'rgb(252 165 165)',
					color: 'rgb(153 27 27)'
				},

				// Badge styles
				'.badge': {
					'align-items': 'center',
					'background-color': 'rgb(229 231 235)',
					'border-radius': '9999px',
					color: 'rgb(31 41 55)',
					display: 'inline-flex',
					'font-size': '0.75rem',
					'font-weight': '600',
					'justify-content': 'center',
					padding: '0.25rem 0.5rem'
				},
				'.badge-lg': {
					'font-size': '0.875rem',
					padding: '0.375rem 0.75rem'
				},

				// Button styles
				'.btn': {
					'align-items': 'center',
					border: '1px solid transparent',
					'border-radius': '0.5rem',
					cursor: 'pointer',
					display: 'inline-flex',
					'font-weight': '600',
					'justify-content': 'center',
					padding: '0.5rem 1rem',
					'text-decoration': 'none',
					transition: 'all 0.2s ease-in-out'
				},
				'.btn-primary': {
					'background-color': 'rgb(59 130 246)',
					color: 'white'
				},
				'.btn-primary:hover': {
					'background-color': 'rgb(37 99 235)'
				},
				'.btn-secondary': {
					'background-color': 'rgb(107 114 128)',
					color: 'white'
				},
				'.btn-secondary:hover': {
					'background-color': 'rgb(75 85 99)'
				},
				'.btn-sm': {
					'font-size': '0.875rem',
					padding: '0.25rem 0.75rem'
				},

				// Loading styles
				'.loading': {
					animation: 'spin 1s linear infinite',
					display: 'inline-block'
				},
				'.loading-sm': {
					height: '1rem',
					width: '1rem'
				},
				'.loading-spinner': {
					border: '2px solid transparent',
					'border-radius': '50%',
					'border-top': '2px solid currentColor'
				},
				'.loading-xl': {
					height: '2rem',
					width: '2rem'
				},
				'.loading-xs': {
					height: '0.75rem',
					width: '0.75rem'
				},

				// Table styles
				'.table': {
					'border-collapse': 'collapse',
					'text-align': 'left',
					width: '100%'
				},
				'.table-zebra tbody tr:nth-child(even)': {
					'background-color': 'rgb(248 250 252)'
				}
			});

			// Añadir animación de spin
			addUtilities({
				'@keyframes spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			});
		}
	],
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
