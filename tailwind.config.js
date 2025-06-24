/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
	},
	plugins: [
		function ({ addUtilities }) {
			// Utilities básicas de daisyUI para componentes que necesitas
			addUtilities({
				// Table styles
				'.table': {
					'border-collapse': 'collapse',
					width: '100%',
					'text-align': 'left'
				},
				'.table-zebra tbody tr:nth-child(even)': {
					'background-color': 'rgb(248 250 252)'
				},

				// Button styles
				'.btn': {
					display: 'inline-flex',
					'align-items': 'center',
					'justify-content': 'center',
					'border-radius': '0.5rem',
					padding: '0.5rem 1rem',
					'font-weight': '600',
					'text-decoration': 'none',
					cursor: 'pointer',
					border: '1px solid transparent',
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
					padding: '0.25rem 0.75rem',
					'font-size': '0.875rem'
				},

				// Loading styles
				'.loading': {
					display: 'inline-block',
					animation: 'spin 1s linear infinite'
				},
				'.loading-spinner': {
					border: '2px solid transparent',
					'border-top': '2px solid currentColor',
					'border-radius': '50%'
				},
				'.loading-sm': {
					width: '1rem',
					height: '1rem'
				},
				'.loading-xs': {
					width: '0.75rem',
					height: '0.75rem'
				},
				'.loading-xl': {
					width: '2rem',
					height: '2rem'
				},

				// Badge styles
				'.badge': {
					display: 'inline-flex',
					'align-items': 'center',
					'justify-content': 'center',
					padding: '0.25rem 0.5rem',
					'font-size': '0.75rem',
					'font-weight': '600',
					'border-radius': '9999px',
					'background-color': 'rgb(229 231 235)',
					color: 'rgb(31 41 55)'
				},
				'.badge-lg': {
					padding: '0.375rem 0.75rem',
					'font-size': '0.875rem'
				},

				// Alert styles
				'.alert': {
					display: 'flex',
					'align-items': 'center',
					gap: '0.5rem',
					padding: '1rem',
					'border-radius': '0.5rem',
					border: '1px solid transparent'
				},
				'.alert-error': {
					'background-color': 'rgb(254 242 242)',
					'border-color': 'rgb(252 165 165)',
					color: 'rgb(153 27 27)'
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
	daisyui: {
		themes: ['light'],
		darkTheme: 'light',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: false,
		themeRoot: ':root'
	}
};
