/* ===== Types & Interfaces ===== */
export interface Skill {
	name: string;
}

export interface SkillCategory {
	color: string;
	skills: Skill[];
	title: string;
}

/* ===== Skills Data ===== */
export const ARCHITECTURE_LEADERSHIP_SKILLS: Skill[] = [
	{ name: 'Frontend Architecture' },
	{ name: 'Software Architecture' },
	{ name: 'Technical Leadership' },
	{ name: 'Team Management' },
	{ name: 'Hiring and Interviewing' },
	{ name: 'Mentoring' },
	{ name: 'Product Development' }
];

export const FRONTEND_SKILLS: Skill[] = [
	{ name: 'React' },
	{ name: 'TypeScript' },
	{ name: 'JavaScript' },
	{ name: 'Redux' },
	{ name: 'Redux-Saga' },
	{ name: 'HTML + CSS' },
	{ name: 'Performance Optimization' }
];

export const BACKEND_SKILLS: Skill[] = [{ name: 'REST APIs' }, { name: 'C#' }, { name: 'ASP.NET MVC' }, { name: 'Microsoft SQL Server' }];

export const MOBILE_WEB_SKILLS: Skill[] = [
	{ name: 'Progressive Web Applications (PWAs)' },
	{ name: 'Capacitor' },
	{ name: 'WebSockets' },
	{ name: 'Service Workers' }
];

export const TOOLS_SKILLS: Skill[] = [{ name: 'Git' }, { name: 'Docker' }];

export const LANGUAGES_SKILLS: Skill[] = [{ name: 'English' }, { name: 'Spanish' }];

/* ===== Skill Categories ===== */
export const SKILL_CATEGORIES: SkillCategory[] = [
	{ color: 'red', skills: ARCHITECTURE_LEADERSHIP_SKILLS, title: 'Architecture & Leadership' },
	{ color: 'blue', skills: FRONTEND_SKILLS, title: 'Frontend Development' },
	{ color: 'purple', skills: MOBILE_WEB_SKILLS, title: 'Mobile & Web Technologies' },
	{ color: 'green', skills: BACKEND_SKILLS, title: 'Backend Development' },
	{ color: 'gray', skills: TOOLS_SKILLS, title: 'Tools & DevOps' },
	{ color: 'indigo', skills: LANGUAGES_SKILLS, title: 'Languages' }
];

/* ===== All Skills (flat list for easy lookup) ===== */
export const ALL_SKILLS = [
	...ARCHITECTURE_LEADERSHIP_SKILLS,
	...FRONTEND_SKILLS,
	...BACKEND_SKILLS,
	...MOBILE_WEB_SKILLS,
	...TOOLS_SKILLS,
	...LANGUAGES_SKILLS
];

/* ===== Skill Names (for type safety) ===== */
export const SKILL_NAMES = ALL_SKILLS.map((skill) => skill.name);

/* ===== Type for skill names ===== */
export type SkillName = (typeof SKILL_NAMES)[number];
