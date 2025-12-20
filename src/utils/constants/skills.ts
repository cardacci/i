/* ===== Skills Enum ===== */
export enum Skills {
	// Architecture & Leadership.
	FRONTEND_ARCHITECTURE = 'Frontend Architecture',
	SOFTWARE_ARCHITECTURE = 'Software Architecture',
	TECHNICAL_LEADERSHIP = 'Technical Leadership',
	TEAM_MANAGEMENT = 'Team Management',
	HIRING_AND_INTERVIEWING = 'Hiring and Interviewing',
	MENTORING = 'Mentoring',
	PRODUCT_DEVELOPMENT = 'Product Development',

	// Frontend.
	REACT = 'React',
	TYPESCRIPT = 'TypeScript',
	JAVASCRIPT = 'JavaScript',
	REDUX = 'Redux',
	REDUX_SAGA = 'Redux-Saga',
	HTML_CSS = 'HTML + CSS',
	PERFORMANCE_OPTIMIZATION = 'Performance Optimization',

	// Backend.
	REST_APIS = 'REST APIs',
	CSHARP = 'C#',
	ASP_NET_MVC = 'ASP.NET MVC',
	MICROSOFT_SQL_SERVER = 'Microsoft SQL Server',

	// Mobile & Web.
	PROGRESSIVE_WEB_APPS = 'Progressive Web Applications (PWAs)',
	CAPACITOR = 'Capacitor',
	WEBSOCKETS = 'WebSockets',
	SERVICE_WORKERS = 'Service Workers',

	// Tools.
	GIT = 'Git',
	DOCKER = 'Docker',

	// Languages.
	ENGLISH = 'English',
	SPANISH = 'Spanish'
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

/* ===== Skills Data ===== */
export const ARCHITECTURE_LEADERSHIP_SKILLS: Skill[] = [
	{ name: Skills.FRONTEND_ARCHITECTURE },
	{ name: Skills.SOFTWARE_ARCHITECTURE },
	{ name: Skills.TECHNICAL_LEADERSHIP },
	{ name: Skills.TEAM_MANAGEMENT },
	{ name: Skills.HIRING_AND_INTERVIEWING },
	{ name: Skills.PRODUCT_DEVELOPMENT },
	{ name: Skills.MENTORING }
];

export const FRONTEND_SKILLS: Skill[] = [
	{ name: Skills.REACT },
	{ name: Skills.TYPESCRIPT },
	{ name: Skills.JAVASCRIPT },
	{ name: Skills.REDUX },
	{ name: Skills.PERFORMANCE_OPTIMIZATION },
	{ name: Skills.HTML_CSS },
	{ name: Skills.REDUX_SAGA }
];

export const BACKEND_SKILLS: Skill[] = [
	{ name: Skills.REST_APIS },
	{ name: Skills.CSHARP },
	{ name: Skills.ASP_NET_MVC },
	{ name: Skills.MICROSOFT_SQL_SERVER }
];

export const MOBILE_WEB_SKILLS: Skill[] = [
	{ name: Skills.PROGRESSIVE_WEB_APPS },
	{ name: Skills.WEBSOCKETS },
	{ name: Skills.SERVICE_WORKERS },
	{ name: Skills.CAPACITOR }
];

export const TOOLS_SKILLS: Skill[] = [{ name: Skills.GIT }, { name: Skills.DOCKER }];

export const LANGUAGES_SKILLS: Skill[] = [{ name: Skills.ENGLISH }, { name: Skills.SPANISH }];

/* ===== Skill Categories ===== */
export const SKILL_CATEGORIES: SkillCategory[] = [
	{ color: 'red', skills: ARCHITECTURE_LEADERSHIP_SKILLS, title: 'Architecture & Leadership' },
	{ color: 'blue', skills: FRONTEND_SKILLS, title: 'Frontend Development' },
	{ color: 'purple', skills: MOBILE_WEB_SKILLS, title: 'Mobile & Web Technologies' },
	{ color: 'green', skills: BACKEND_SKILLS, title: 'Backend Development' },
	{ color: 'gray', skills: TOOLS_SKILLS, title: 'Tools & DevOps' },
	{ color: 'indigo', skills: LANGUAGES_SKILLS, title: 'Languages' }
];
