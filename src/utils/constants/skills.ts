/* ===== Skills Enum ===== */
export enum Skills {
	// Architecture & Leadership.
	FRONTEND_ARCHITECTURE = 'Frontend Architecture',
	HIRING_AND_INTERVIEWING = 'Hiring and Interviewing',
	MENTORING = 'Mentoring',
	PRODUCT_DEVELOPMENT = 'Product Development',
	SOFTWARE_ARCHITECTURE = 'Software Architecture',
	TEAM_MANAGEMENT = 'Team Management',
	TECHNICAL_LEADERSHIP = 'Technical Leadership',

	// Frontend.
	ANGULAR = 'Angular',
	GRAPHQL = 'GraphQL',
	HTML_CSS = 'HTML + CSS',
	JAVASCRIPT = 'JavaScript',
	PERFORMANCE_OPTIMIZATION = 'Performance Optimization',
	REACT = 'React',
	REACT_NATIVE = 'React Native',
	REDUX = 'Redux',
	REDUX_SAGA = 'Redux-Saga',
	STORYBOOK = 'Storybook',
	TYPESCRIPT = 'TypeScript',
	ZUSTAND = 'Zustand',

	// Backend.
	ASP_NET_MVC = 'ASP.NET MVC',
	CSHARP = 'C#',
	MICROSOFT_SQL_SERVER = 'Microsoft SQL Server',
	REST_APIS = 'REST APIs',

	// Mobile & Web.
	CAPACITOR = 'Capacitor',
	PROGRESSIVE_WEB_APPS = 'Progressive Web Applications (PWAs)',
	SERVICE_WORKERS = 'Service Workers',
	WEBSOCKETS = 'WebSockets',

	// Tools.
	CI_CD = 'CI/CD',
	DOCKER = 'Docker',
	GIT = 'Git',
	GITHUB_ACTIONS = 'GitHub Actions',
	STYLUS = 'Stylus',
	WEBPACK = 'Webpack',

	// Languages.
	ENGLISH = 'English',
}

/* ===== Types & Interfaces ===== */
export interface Skill {
	name: Skills;
}

export interface SkillCategory {
	color: string;
	skills: Skill[];
	title: string;
}
