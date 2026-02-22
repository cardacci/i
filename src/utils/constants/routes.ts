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
	SOFTWARE_ENGINEERING: {
		BACKEND: 'BACKEND',
		FRONTEND: 'FRONTEND',
		PROJECT: 'PROJECT'
	},
	SOFTWARE_ENGINEERING_FRONTEND: {
		COMPONENT_ARCHITECTURE: 'COMPONENT_ARCHITECTURE',
		DATA_FETCHING: 'DATA_FETCHING',
		DESIGN_SYSTEM: 'DESIGN_SYSTEM',
		FRONTEND_INFRASTRUCTURE: 'FRONTEND_INFRASTRUCTURE',
		PERFORMANCE_OPTIMIZATION: 'PERFORMANCE_OPTIMIZATION',
		REAL_WORLD_EXAMPLES: 'REAL_WORLD_EXAMPLES',
		RENDERING_PATTERNS: 'RENDERING_PATTERNS',
		ROUTING_AND_NAVIGATION: 'ROUTING_AND_NAVIGATION',
		STATE_MANAGEMENT: 'STATE_MANAGEMENT'
	},
	TRAVEL: {
		MAP: 'MAP',
		TIMELINE: 'TIMELINE'
	}
} as const;

// Base route definitions.
const BASE_ROUTES = {
	BOOKS: {
		icon: '📚',
		id: 'books',
		label: 'Books',
		path: '/books'
	},
	CRYPTO: {
		icon: '🪙',
		id: 'crypto',
		label: 'Crypto',
		path: '/crypto'
	},
	DJING: {
		icon: '🎧',
		id: 'djing',
		label: 'DJing',
		path: '/djing'
	},
	ECONOMICS: {
		icon: '📊',
		id: 'economics',
		label: 'Economics',
		path: '/economics'
	},
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
	SOFTWARE_ENGINEERING: {
		icon: '💻',
		id: 'software-engineering',
		label: 'Software Engineering',
		path: '/software-engineering'
	},
	TRAVEL: {
		icon: '✈️',
		id: 'travel',
		label: 'Travel',
		path: '/travel'
	}
} as const;

// Frontend System Design topic routes (ordered basic → advanced for tab display).
export const FRONTEND_TOPICS = {
	id: 'frontend',
	label: 'Frontend System Design',
	path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend`,
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.COMPONENT_ARCHITECTURE]: {
		id: 'component-architecture',
		label: 'Component Architecture',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/component-architecture`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.STATE_MANAGEMENT]: {
		id: 'state-management',
		label: 'State Management',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/state-management`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.ROUTING_AND_NAVIGATION]: {
		id: 'routing-and-navigation',
		label: 'Routing & Navigation',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/routing-and-navigation`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.DATA_FETCHING]: {
		id: 'data-fetching',
		label: 'Data Fetching',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/data-fetching`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.RENDERING_PATTERNS]: {
		id: 'rendering-patterns',
		label: 'Rendering Patterns',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/rendering-patterns`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.PERFORMANCE_OPTIMIZATION]: {
		id: 'performance-optimization',
		label: 'Performance',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/performance-optimization`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.DESIGN_SYSTEM]: {
		id: 'design-system',
		label: 'Design Systems',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/design-system`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.FRONTEND_INFRASTRUCTURE]: {
		id: 'frontend-infrastructure',
		label: 'Infrastructure',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/frontend-infrastructure`
	},
	[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.REAL_WORLD_EXAMPLES]: {
		id: 'real-world-examples',
		label: 'Real-World Examples',
		path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend/real-world-examples`
	}
} as const;

// Complete route structure with nested routes.
export const ROUTES = {
	BOOKS: {
		...BASE_ROUTES.BOOKS
	},

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

	SOFTWARE_ENGINEERING: {
		...BASE_ROUTES.SOFTWARE_ENGINEERING,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING.BACKEND]: {
			group: 'System Design',
			id: 'backend',
			label: 'Backend',
			path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/backend`
		},
		[ROUTE_KEYS.SOFTWARE_ENGINEERING.FRONTEND]: {
			group: 'System Design',
			id: 'frontend',
			label: 'Frontend',
			path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/frontend`
		},
		[ROUTE_KEYS.SOFTWARE_ENGINEERING.PROJECT]: {
			id: 'project',
			label: 'Project Technologies',
			path: `${BASE_ROUTES.SOFTWARE_ENGINEERING.path}/project`
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
