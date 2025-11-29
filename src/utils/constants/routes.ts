// Route key constants for consistent usage across components.
export const ROUTE_KEYS = {
	CRYPTO: {
		BITCOIN: 'BITCOIN',
		FAIR_VALUE_ANALYSIS: 'FAIR_VALUE_ANALYSIS'
	},
	DJING: {
		CLASSIFIER: 'CLASSIFIER',
		INFO: 'INFO',
		SETS: 'SETS'
	},
	ECONOMICS: {
		PERIODS_WHEN_TO_MAKE_MONEY: 'PERIODS_WHEN_TO_MAKE_MONEY',
		REAL_ESTATE_CYCLE: 'REAL_ESTATE_CYCLE'
	},
	RESUME: {
		EDUCATION: 'EDUCATION',
		EXPERIENCE: 'EXPERIENCE',
		PERSONAL: 'PERSONAL',
		PROJECTS: 'PROJECTS',
		SKILLS: 'SKILLS'
	},
	TECH: {
		PROJECT: 'PROJECT'
	},
	TRAVEL: {
		MAP: 'MAP',
		TIMELINE: 'TIMELINE'
	}
} as const;

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
	ECONOMICS: {
		icon: '📊',
		id: 'economics',
		label: 'Economics',
		path: '/economics'
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
		[ROUTE_KEYS.CRYPTO.BITCOIN]: {
			id: 'bitcoin',
			path: `${BASE_ROUTES.CRYPTO.path}/bitcoin`,
			label: 'Bitcoin History'
		},
		[ROUTE_KEYS.CRYPTO.FAIR_VALUE_ANALYSIS]: {
			id: 'fair-value-analysis',
			path: `${BASE_ROUTES.CRYPTO.path}/fair-value-analysis`,
			label: 'Fair Value Analysis'
		}
	},

	DJING: {
		...BASE_ROUTES.DJING,
		[ROUTE_KEYS.DJING.INFO]: {
			id: 'info',
			path: `${BASE_ROUTES.DJING.path}/info`,
			label: 'DJ Info'
		},
		[ROUTE_KEYS.DJING.SETS]: {
			id: 'sets',
			path: `${BASE_ROUTES.DJING.path}/sets`,
			label: 'Sets'
		},
		[ROUTE_KEYS.DJING.CLASSIFIER]: {
			id: 'classifier',
			path: `${BASE_ROUTES.DJING.path}/classifier`,
			label: 'Track Classifier'
		}
	},

	ECONOMICS: {
		...BASE_ROUTES.ECONOMICS,
		[ROUTE_KEYS.ECONOMICS.REAL_ESTATE_CYCLE]: {
			id: 'real-estate-cycle',
			path: `${BASE_ROUTES.ECONOMICS.path}/real-estate-cycle`,
			label: '18 Year Real Estate Cycle'
		},
		[ROUTE_KEYS.ECONOMICS.PERIODS_WHEN_TO_MAKE_MONEY]: {
			id: 'periods-when-to-make-money',
			path: `${BASE_ROUTES.ECONOMICS.path}/periods-when-to-make-money`,
			label: 'Periods When to Make Money'
		}
	},

	HOME: BASE_ROUTES.HOME,

	RESUME: {
		...BASE_ROUTES.RESUME,
		[ROUTE_KEYS.RESUME.PERSONAL]: {
			id: 'personal',
			path: `${BASE_ROUTES.RESUME.path}/personal`,
			label: 'Personal'
		},
		[ROUTE_KEYS.RESUME.EDUCATION]: {
			id: 'education',
			path: `${BASE_ROUTES.RESUME.path}/education`,
			label: 'Education'
		},
		[ROUTE_KEYS.RESUME.EXPERIENCE]: {
			id: 'experience',
			path: `${BASE_ROUTES.RESUME.path}/experience`,
			label: 'Experience'
		},
		[ROUTE_KEYS.RESUME.SKILLS]: {
			id: 'skills',
			path: `${BASE_ROUTES.RESUME.path}/skills`,
			label: 'Skills'
		},
		[ROUTE_KEYS.RESUME.PROJECTS]: {
			id: 'projects',
			path: `${BASE_ROUTES.RESUME.path}/projects`,
			label: 'Projects'
		}
	},

	TECH: {
		...BASE_ROUTES.TECH,
		[ROUTE_KEYS.TECH.PROJECT]: {
			id: 'project',
			label: 'Project Technologies',
			path: `${BASE_ROUTES.TECH.path}/project`
		}
	},

	TRAVEL: {
		...BASE_ROUTES.TRAVEL,
		[ROUTE_KEYS.TRAVEL.MAP]: {
			id: 'map',
			label: 'World Map',
			path: `${BASE_ROUTES.TRAVEL.path}/map`
		},
		[ROUTE_KEYS.TRAVEL.TIMELINE]: {
			id: 'timeline',
			label: 'Timeline',
			path: `${BASE_ROUTES.TRAVEL.path}/timeline`
		}
	}
} as const;
