import type { IconType } from 'react-icons';

import { BiData } from 'react-icons/bi';
import {
	HiOutlineBolt,
	HiOutlineCodeBracket,
	HiOutlineCog6Tooth,
	HiOutlineCpuChip,
	HiOutlineGlobeAlt,
	HiOutlineRocketLaunch,
	HiOutlineUserGroup,
	HiOutlineUserPlus
} from 'react-icons/hi2';
import { MdOutlineSpeed } from 'react-icons/md';
import {
	SiCss3,
	SiDocker,
	SiEslint,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiGithubcopilot,
	SiHtml5,
	SiJavascript,
	SiPrettier,
	SiReact,
	SiRedux,
	SiSharp,
	SiStylus,
	SiTailwindcss,
	SiTypescript,
	SiVite,
	SiWebpack
} from 'react-icons/si';
import { TbApi, TbBrandReactNative, TbGitBranch, TbRobot, TbSparkles } from 'react-icons/tb';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';

/* ===== Constants & Enums ===== */
enum SkillCategory {
	AI = 'ai',
	Architecture = 'architecture',
	Backend = 'backend',
	CI_CD = 'cicd',
	Frontend = 'frontend',
	Languages = 'languages',
	Mobile = 'mobile',
	Tools = 'tools',
	VCS = 'vcs'
}

export const CATEGORY_COLORS: Record<SkillCategory, { bg: string; border: string; glow: string }> = {
	[SkillCategory.AI]: { bg: '#ec4899', border: '#db2777', glow: 'rgba(236, 72, 153, 0.4)' },
	[SkillCategory.Architecture]: { bg: '#ef4444', border: '#dc2626', glow: 'rgba(239, 68, 68, 0.4)' },
	[SkillCategory.Backend]: { bg: '#8b5cf6', border: '#7c3aed', glow: 'rgba(139, 92, 246, 0.4)' },
	[SkillCategory.CI_CD]: { bg: '#0ea5e9', border: '#0284c7', glow: 'rgba(14, 165, 233, 0.4)' },
	[SkillCategory.Frontend]: { bg: '#3b82f6', border: '#2563eb', glow: 'rgba(59, 130, 246, 0.4)' },
	[SkillCategory.Languages]: { bg: '#06b6d4', border: '#0891b2', glow: 'rgba(6, 182, 212, 0.4)' },
	[SkillCategory.Mobile]: { bg: '#f59e0b', border: '#d97706', glow: 'rgba(245, 158, 11, 0.4)' },
	[SkillCategory.Tools]: { bg: '#64748b', border: '#475569', glow: 'rgba(100, 116, 139, 0.4)' },
	[SkillCategory.VCS]: { bg: '#22c55e', border: '#16a34a', glow: 'rgba(34, 197, 94, 0.4)' }
};

/* ===== Types & Interfaces ===== */
export interface SkillTreeNode {
	children?: SkillTreeNode[];
	icon?: IconType;
	isCategory?: boolean;
	label: string;
}

export interface SkillTreeSection {
	category: SkillCategory;
	tree: SkillTreeNode;
}

/* ===== Skill Tree Sections ===== */
export const skillSections: SkillTreeSection[] = [
	// ══════════════════════════════════════════════════════════════
	// SECTION 1: FRONTEND (tree with parent-child connections)
	// Frontend → HTML, CSS, JavaScript
	// CSS → Stylus, Tailwind CSS
	// JavaScript → TypeScript, React
	// React → Performance, Redux
	// Redux → Redux-Saga
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Frontend,
		tree: {
			isCategory: true,
			label: '⚛️ Frontend',
			children: [
				{ icon: SiHtml5, label: 'HTML' },
				{
					icon: SiCss3,
					label: 'CSS',
					children: [
						{ icon: SiStylus, label: 'Stylus' },
						{ icon: SiTailwindcss, label: 'Tailwind CSS' }
					]
				},
				{
					icon: SiJavascript,
					label: 'JavaScript',
					children: [
						{ icon: SiTypescript, label: 'TypeScript' },
						{
							icon: SiReact,
							label: 'React',
							children: [
								{
									icon: MdOutlineSpeed,
									label: 'Performance',
									children: [{ icon: HiOutlineBolt, label: 'Web Workers' }]
								},
								{
									icon: SiRedux,
									label: 'Redux',
									children: [{ icon: SiRedux, label: 'Redux-Saga' }]
								}
							]
						}
					]
				}
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 2: MOBILE & WEB
	// PWAs → Service Workers
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Mobile,
		tree: {
			isCategory: true,
			label: '📱 Mobile & Web',
			children: [
				{
					icon: HiOutlineGlobeAlt,
					label: 'PWAs',
					children: [
						{
							icon: HiOutlineCog6Tooth,
							label: 'Service Workers',
							children: [{ icon: HiOutlineCog6Tooth, label: 'Workbox' }]
						}
					]
				},
				{ icon: TbBrandReactNative, label: 'Capacitor' },
				{ icon: HiOutlineCpuChip, label: 'WebSockets' }
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 3: BACKEND
	// ASP.NET MVC → SQL Server
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Backend,
		tree: {
			isCategory: true,
			label: '🔮 Backend',
			children: [
				{ icon: SiSharp, label: 'C#' },
				{
					icon: HiOutlineCodeBracket,
					label: 'ASP.NET MVC',
					children: [{ icon: BiData, label: 'SQL Server' }]
				},
				{ icon: TbApi, label: 'REST APIs' }
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 4: CI/CD
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.CI_CD,
		tree: {
			icon: VscAzureDevops,
			isCategory: true,
			label: 'CI/CD',
			children: [
				{ icon: SiGithubactions, label: 'GitHub Actions' },
				{ icon: VscAzure, label: 'Azure Pipelines' }
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 5: VERSION CONTROL
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.VCS,
		tree: {
			icon: TbGitBranch,
			isCategory: true,
			label: 'Version Control',
			children: [
				{ icon: SiGit, label: 'Git' },
				{ icon: SiGithub, label: 'GitHub' }
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 6: ARCHITECTURE & LEADERSHIP
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Architecture,
		tree: {
			isCategory: true,
			label: '🎯 Architecture & Leadership',
			children: [
				{ icon: HiOutlineRocketLaunch, label: 'Frontend Arch' },
				{ icon: HiOutlineRocketLaunch, label: 'Software Arch' },
				{ icon: HiOutlineUserGroup, label: 'Leadership' },
				{ icon: HiOutlineUserGroup, label: 'Team Management' },
				{ icon: HiOutlineUserGroup, label: 'Mentoring' },
				{ icon: HiOutlineUserPlus, label: 'Hiring & Interviewing' }
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 7: AI ASSISTED CODING
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.AI,
		tree: {
			icon: TbSparkles,
			isCategory: true,
			label: 'AI Assisted Coding',
			children: [
				{ icon: TbRobot, label: 'Claude Code' },
				{ icon: SiGithubcopilot, label: 'GitHub Copilot' }
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 8: TOOLS
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Tools,
		tree: {
			isCategory: true,
			label: '🛠️ Tools',
			children: [
				{ icon: SiDocker, label: 'Docker' },
				{ icon: SiVite, label: 'Vite' },
				{ icon: SiWebpack, label: 'Webpack' },
				{ icon: SiEslint, label: 'ESLint' },
				{ icon: SiPrettier, label: 'Prettier' }
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 9: LANGUAGES
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Languages,
		tree: {
			isCategory: true,
			label: '🌐 Languages',
			children: [{ label: '🇬🇧 English' }, { label: '🇪🇸 Spanish' }]
		}
	}
];
