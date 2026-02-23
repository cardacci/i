import type { IconType } from 'react-icons';

import { BiData } from 'react-icons/bi';
import {
	HiOutlineAcademicCap,
	HiOutlineArchiveBox,
	HiOutlineBolt,
	HiOutlineBriefcase,
	HiOutlineCodeBracket,
	HiOutlineCog6Tooth,
	HiOutlineCpuChip,
	HiOutlineCube,
	HiOutlineGlobeAlt,
	HiOutlinePaintBrush,
	HiOutlinePuzzlePiece,
	HiOutlineRocketLaunch,
	HiOutlineShieldCheck,
	HiOutlineSignal,
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
import {
	TbApi,
	TbBrain,
	TbBrandReactNative,
	TbBroadcast,
	TbGitBranch,
	TbPackage,
	TbRobot,
	TbSparkles,
	TbTimeline
} from 'react-icons/tb';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';

/* ===== Constants & Enums ===== */
export enum SkillCategory {
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
	// Frontend → CSS, Design Systems, HTML, JavaScript, Performance
	// CSS → Stylus, Tailwind CSS
	// JavaScript → React, TypeScript
	// React → Redux → Redux-Saga
	// Performance → Code Splitting, Memoization, Web Workers
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Frontend,
		tree: {
			isCategory: true,
			label: '⚛️ Frontend',
			children: [
				{
					icon: SiCss3,
					label: 'CSS',
					children: [
						{ icon: SiStylus, label: 'Stylus' },
						{ icon: SiTailwindcss, label: 'Tailwind CSS' }
					]
				},
				{ icon: HiOutlinePaintBrush, label: 'Design Systems' },
				{ icon: SiHtml5, label: 'HTML' },
				{
					icon: SiJavascript,
					label: 'JavaScript',
					children: [
						{
							icon: SiReact,
							label: 'React',
							children: [
								{
									icon: SiRedux,
									label: 'Redux',
									children: [{ icon: TbTimeline, label: 'Redux-Saga' }]
								}
							]
						},
						{ icon: SiTypescript, label: 'TypeScript' }
					]
				},
				{
					icon: MdOutlineSpeed,
					label: 'Performance',
					children: [
						{ icon: HiOutlinePuzzlePiece, label: 'Code Splitting' },
						{ icon: TbBrain, label: 'Memoization' },
						{ icon: HiOutlineBolt, label: 'Web Workers' }
					]
				}
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 2: MOBILE & WEB
	// PWAs → Service Workers → Workbox
	// Real-Time → SSE, WebSockets
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Mobile,
		tree: {
			isCategory: true,
			label: '📱 Mobile & Web',
			children: [
				{ icon: TbBrandReactNative, label: 'Capacitor' },
				{
					icon: HiOutlineGlobeAlt,
					label: 'PWAs',
					children: [
						{
							icon: HiOutlineCog6Tooth,
							label: 'Service Workers',
							children: [{ icon: HiOutlineArchiveBox, label: 'Workbox' }]
						}
					]
				},
				{
					icon: HiOutlineSignal,
					label: 'Real-Time',
					children: [
						{ icon: TbBroadcast, label: 'SSE' },
						{ icon: HiOutlineCpuChip, label: 'WebSockets' }
					]
				}
			]
		}
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 3: BACKEND
	// ══════════════════════════════════════════════════════════════
	{
		category: SkillCategory.Backend,
		tree: {
			isCategory: true,
			label: '🔮 Backend',
			children: [
				{ icon: HiOutlineCodeBracket, label: 'ASP.NET MVC' },
				{ icon: SiSharp, label: 'C#' },
				{ icon: TbApi, label: 'REST APIs' },
				{ icon: BiData, label: 'SQL Server' }
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
				{ icon: VscAzure, label: 'Azure Pipelines' },
				{ icon: SiGithubactions, label: 'GitHub Actions' }
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
				{ icon: HiOutlineUserPlus, label: 'Hiring & Interviewing' },
				{ icon: HiOutlineUserGroup, label: 'Leadership' },
				{ icon: HiOutlineAcademicCap, label: 'Mentoring' },
				{ icon: HiOutlineCube, label: 'Software Arch' },
				{ icon: HiOutlineBriefcase, label: 'Team Management' }
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
				{
					icon: TbPackage,
					label: 'Bundlers',
					children: [
						{ icon: SiVite, label: 'Vite' },
						{ icon: SiWebpack, label: 'Webpack' }
					]
				},
				{ icon: SiDocker, label: 'Docker' },
				{
					icon: HiOutlineShieldCheck,
					label: 'Linting & Formatting',
					children: [
						{ icon: SiEslint, label: 'ESLint' },
						{ icon: SiPrettier, label: 'Prettier' }
					]
				}
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
