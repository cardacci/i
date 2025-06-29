// Base route definitions.
const BASE_ROUTES = {
	HOME: {
		icon: '🏠',
		id: 'home',
		label: 'Home',
		path: '/'
	},
	RESUME: {
		icon: '📄',
		id: 'resume',
		label: 'Resume',
		path: '/resume'
	},
	CRYPTO: {
		icon: '🪙',
		id: 'crypto',
		label: 'Crypto',
		path: '/crypto'
	},
	TECH: {
		icon: '💻',
		id: 'tech',
		label: 'Technology',
		path: '/tech'
	},
	DJING: {
		icon: '🎧',
		id: 'djing',
		label: 'DJing',
		path: '/djing'
	},
	TRAVEL: {
		icon: '✈️',
		id: 'travel',
		label: 'Travel',
		path: '/travel'
	}
} as const;

// Complete route structure with nested routes.
export const ROUTES = {
	CRYPTO: {
		...BASE_ROUTES.CRYPTO,
		BITCOIN: {
			id: 'bitcoin',
			path: `${BASE_ROUTES.CRYPTO.path}/bitcoin`,
			label: 'Bitcoin History'
		},
		FAIR_VALUE_ANALYSIS: {
			id: 'fair-value-analysis',
			path: `${BASE_ROUTES.CRYPTO.path}/fair-value-analysis`,
			label: 'Fair Value Analysis'
		}
	},

	DJING: {
		...BASE_ROUTES.DJING,
		INFO: {
			id: 'info',
			path: `${BASE_ROUTES.DJING.path}/info`,
			label: 'DJ Info'
		},
		CLASSIFIER: {
			id: 'classifier',
			path: `${BASE_ROUTES.DJING.path}/classifier`,
			label: 'Track Classifier'
		}
	},

	HOME: BASE_ROUTES.HOME,

	RESUME: BASE_ROUTES.RESUME,

	TECH: {
		...BASE_ROUTES.TECH,
		SKILLS: {
			id: 'skills',
			path: `${BASE_ROUTES.TECH.path}/skills`,
			label: 'My Skills'
		},
		PROJECT: {
			id: 'project',
			path: `${BASE_ROUTES.TECH.path}/project`,
			label: 'Project Technologies'
		}
	},

	TRAVEL: BASE_ROUTES.TRAVEL
} as const;
