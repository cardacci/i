export const TECH_CATEGORIES = {
	BUILD_TOOLS: 'Build Tools',
	FRONTEND: 'Frontend',
	LANGUAGES: 'Languages',
	MOBILE: 'Mobile',
	STATE_MANAGEMENT: 'State Management',
	STYLING: 'Styling',
	TOOLS: 'Tools',
	WEB_TECHNOLOGIES: 'Web Technologies'
} as const;

export type TechCategory = (typeof TECH_CATEGORIES)[keyof typeof TECH_CATEGORIES];
