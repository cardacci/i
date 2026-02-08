import type { IconType } from 'react-icons';

import { BiData } from 'react-icons/bi';
import { HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineGlobeAlt, HiOutlineRocketLaunch, HiOutlineUserGroup } from 'react-icons/hi2';
import { MdLanguage, MdOutlineSpeed } from 'react-icons/md';
import {
	SiCss3,
	SiDocker,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiReact,
	SiRedux,
	SiSharp,
	SiStylus,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si';
import { TbApi, TbBrandReactNative, TbGitBranch, TbRobot, TbSparkles } from 'react-icons/tb';

import type { Edge, Node } from '@xyflow/react';

/* ===== Types ===== */
export interface SkillNodeData {
	[key: string]: unknown;
	category: 'ai' | 'architecture' | 'backend' | 'frontend' | 'languages' | 'mobile' | 'tools' | 'vcs';
	icon?: IconType;
	isCategory?: boolean;
	label: string;
}

export type SkillNode = Node<SkillNodeData>;
export type SkillEdge = Edge;

/* ===== Category Colors ===== */
export const CATEGORY_COLORS: Record<SkillNodeData['category'], { bg: string; border: string; glow: string }> = {
	ai: { bg: '#ec4899', border: '#db2777', glow: 'rgba(236, 72, 153, 0.4)' },
	architecture: { bg: '#ef4444', border: '#dc2626', glow: 'rgba(239, 68, 68, 0.4)' },
	backend: { bg: '#8b5cf6', border: '#7c3aed', glow: 'rgba(139, 92, 246, 0.4)' },
	frontend: { bg: '#3b82f6', border: '#2563eb', glow: 'rgba(59, 130, 246, 0.4)' },
	languages: { bg: '#06b6d4', border: '#0891b2', glow: 'rgba(6, 182, 212, 0.4)' },
	mobile: { bg: '#f59e0b', border: '#d97706', glow: 'rgba(245, 158, 11, 0.4)' },
	tools: { bg: '#64748b', border: '#475569', glow: 'rgba(100, 116, 139, 0.4)' },
	vcs: { bg: '#22c55e', border: '#16a34a', glow: 'rgba(34, 197, 94, 0.4)' }
};

/* ===== Node Positions (Optimized Vertical Layout) ===== */
const X_CENTER = 250;
const Y_GAP = 85;
const Y_START = 0;

/* ===== Nodes ===== */
export const initialNodes: SkillNode[] = [
	// ══════════════════════════════════════════════════════════════
	// SECTION 1: FRONTEND CORE (Rows 0-4)
	// ══════════════════════════════════════════════════════════════

	// Row 0: Root
	{
		data: { category: 'frontend', isCategory: true, label: '⚛️ Frontend' },
		id: 'frontend',
		position: { x: X_CENTER, y: Y_START },
		type: 'skillNode'
	},

	// Row 1: Fundamentals (HTML, CSS, JavaScript)
	{
		data: { category: 'frontend', icon: SiHtml5, label: 'HTML' },
		id: 'html',
		position: { x: X_CENTER - 120, y: Y_START + Y_GAP },
		type: 'skillNode'
	},
	{
		data: { category: 'frontend', icon: SiCss3, label: 'CSS' },
		id: 'css',
		position: { x: X_CENTER, y: Y_START + Y_GAP },
		type: 'skillNode'
	},
	{
		data: { category: 'frontend', icon: SiJavascript, label: 'JavaScript' },
		id: 'javascript',
		position: { x: X_CENTER + 120, y: Y_START + Y_GAP },
		type: 'skillNode'
	},

	// Row 2: CSS Preprocessors + TypeScript
	{
		data: { category: 'frontend', icon: SiStylus, label: 'Stylus' },
		id: 'stylus',
		position: { x: X_CENTER - 60, y: Y_START + Y_GAP * 2 },
		type: 'skillNode'
	},
	{
		data: { category: 'frontend', icon: SiTailwindcss, label: 'Tailwind' },
		id: 'tailwind',
		position: { x: X_CENTER + 60, y: Y_START + Y_GAP * 2 },
		type: 'skillNode'
	},
	{
		data: { category: 'frontend', icon: SiTypescript, label: 'TypeScript' },
		id: 'typescript',
		position: { x: X_CENTER + 180, y: Y_START + Y_GAP * 2 },
		type: 'skillNode'
	},

	// Row 3: React + Performance
	{
		data: { category: 'frontend', icon: SiReact, label: 'React' },
		id: 'react',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 3 },
		type: 'skillNode'
	},
	{
		data: { category: 'frontend', icon: MdOutlineSpeed, label: 'Performance' },
		id: 'performance',
		position: { x: X_CENTER + 140, y: Y_START + Y_GAP * 3 },
		type: 'skillNode'
	},

	// Row 4: State Management
	{
		data: { category: 'frontend', icon: SiRedux, label: 'Redux' },
		id: 'redux',
		position: { x: X_CENTER - 70, y: Y_START + Y_GAP * 4 },
		type: 'skillNode'
	},
	{
		data: { category: 'frontend', icon: SiRedux, label: 'Redux-Saga' },
		id: 'redux-saga',
		position: { x: X_CENTER + 70, y: Y_START + Y_GAP * 4 },
		type: 'skillNode'
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 2: MOBILE & WEB (Rows 5-6)
	// ══════════════════════════════════════════════════════════════

	// Row 5: Mobile Category
	{
		data: { category: 'mobile', isCategory: true, label: '📱 Mobile & Web' },
		id: 'mobile',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 5.5 },
		type: 'skillNode'
	},

	// Row 6: Mobile Skills
	{
		data: { category: 'mobile', icon: HiOutlineGlobeAlt, label: 'PWAs' },
		id: 'pwa',
		position: { x: X_CENTER - 120, y: Y_START + Y_GAP * 6.5 },
		type: 'skillNode'
	},
	{
		data: { category: 'mobile', icon: TbBrandReactNative, label: 'Capacitor' },
		id: 'capacitor',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 6.5 },
		type: 'skillNode'
	},
	{
		data: { category: 'mobile', icon: HiOutlineCpuChip, label: 'WebSockets' },
		id: 'websockets',
		position: { x: X_CENTER + 120, y: Y_START + Y_GAP * 6.5 },
		type: 'skillNode'
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 3: BACKEND (Rows 7-9)
	// ══════════════════════════════════════════════════════════════

	// Row 7: Backend Category
	{
		data: { category: 'backend', isCategory: true, label: '� Backend' },
		id: 'backend',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 8 },
		type: 'skillNode'
	},

	// Row 8: Backend Core Skills
	{
		data: { category: 'backend', icon: SiSharp, label: 'C#' },
		id: 'csharp',
		position: { x: X_CENTER - 120, y: Y_START + Y_GAP * 9 },
		type: 'skillNode'
	},
	{
		data: { category: 'backend', icon: HiOutlineCodeBracket, label: 'ASP.NET MVC' },
		id: 'aspnet',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 9 },
		type: 'skillNode'
	},
	{
		data: { category: 'backend', icon: TbApi, label: 'REST APIs' },
		id: 'rest-apis',
		position: { x: X_CENTER + 120, y: Y_START + Y_GAP * 9 },
		type: 'skillNode'
	},

	// Row 9: Database
	{
		data: { category: 'backend', icon: BiData, label: 'SQL Server' },
		id: 'sql-server',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 10 },
		type: 'skillNode'
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 4: VERSION CONTROL (Rows 10-11)
	// ══════════════════════════════════════════════════════════════

	// Row 10: VCS Category
	{
		data: { category: 'vcs', icon: TbGitBranch, isCategory: true, label: '📂 Version Control' },
		id: 'vcs',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 11.5 },
		type: 'skillNode'
	},

	// Row 11: VCS Skills
	{
		data: { category: 'vcs', icon: SiGit, label: 'Git' },
		id: 'git',
		position: { x: X_CENTER - 70, y: Y_START + Y_GAP * 12.5 },
		type: 'skillNode'
	},
	{
		data: { category: 'vcs', icon: SiGithub, label: 'GitHub' },
		id: 'github',
		position: { x: X_CENTER + 70, y: Y_START + Y_GAP * 12.5 },
		type: 'skillNode'
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 5: ARCHITECTURE & LEADERSHIP (Rows 12-13)
	// ══════════════════════════════════════════════════════════════

	// Row 12: Architecture Category
	{
		data: { category: 'architecture', isCategory: true, label: '🎯 Architecture & Leadership' },
		id: 'architecture',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 14 },
		type: 'skillNode'
	},

	// Row 13: Architecture Skills
	{
		data: { category: 'architecture', icon: HiOutlineRocketLaunch, label: 'Frontend Arch' },
		id: 'frontend-arch',
		position: { x: X_CENTER - 120, y: Y_START + Y_GAP * 15 },
		type: 'skillNode'
	},
	{
		data: { category: 'architecture', icon: HiOutlineUserGroup, label: 'Leadership' },
		id: 'leadership',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 15 },
		type: 'skillNode'
	},
	{
		data: { category: 'architecture', icon: HiOutlineUserGroup, label: 'Mentoring' },
		id: 'mentoring',
		position: { x: X_CENTER + 120, y: Y_START + Y_GAP * 15 },
		type: 'skillNode'
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 6: AI ASSISTED CODING (Rows 14-15)
	// ══════════════════════════════════════════════════════════════

	// Row 14: AI Category
	{
		data: { category: 'ai', icon: TbSparkles, isCategory: true, label: '🤖 AI Assisted Coding' },
		id: 'ai',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 16.5 },
		type: 'skillNode'
	},

	// Row 15: AI Skills
	{
		data: { category: 'ai', icon: TbRobot, label: 'Claude Code' },
		id: 'claude-code',
		position: { x: X_CENTER, y: Y_START + Y_GAP * 17.5 },
		type: 'skillNode'
	},

	// ══════════════════════════════════════════════════════════════
	// SECTION 7: TOOLS & LANGUAGES (Rows 16-17)
	// ══════════════════════════════════════════════════════════════

	// Row 16: Tools Category
	{
		data: { category: 'tools', isCategory: true, label: '🛠️ Tools' },
		id: 'tools',
		position: { x: X_CENTER - 80, y: Y_START + Y_GAP * 19 },
		type: 'skillNode'
	},

	// Row 16: Languages Category (side by side)
	{
		data: { category: 'languages', isCategory: true, label: '🌐 Languages' },
		id: 'languages',
		position: { x: X_CENTER + 80, y: Y_START + Y_GAP * 19 },
		type: 'skillNode'
	},

	// Row 17: Tools Skills
	{
		data: { category: 'tools', icon: SiDocker, label: 'Docker' },
		id: 'docker',
		position: { x: X_CENTER - 80, y: Y_START + Y_GAP * 20 },
		type: 'skillNode'
	},

	// Row 17: Languages Skills
	{
		data: { category: 'languages', icon: MdLanguage, label: 'English' },
		id: 'english',
		position: { x: X_CENTER + 40, y: Y_START + Y_GAP * 20 },
		type: 'skillNode'
	},
	{
		data: { category: 'languages', icon: MdLanguage, label: 'Spanish' },
		id: 'spanish',
		position: { x: X_CENTER + 140, y: Y_START + Y_GAP * 20 },
		type: 'skillNode'
	}
];

/* ===== Edges ===== */
export const initialEdges: SkillEdge[] = [
	// ══════════════════════════════════════════════════════════════
	// FRONTEND CORE FLOW
	// ══════════════════════════════════════════════════════════════

	// Frontend → Fundamentals
	{ animated: true, id: 'e-frontend-html', source: 'frontend', target: 'html' },
	{ animated: true, id: 'e-frontend-css', source: 'frontend', target: 'css' },
	{ animated: true, id: 'e-frontend-js', source: 'frontend', target: 'javascript' },

	// CSS → Preprocessors
	{ id: 'e-css-stylus', source: 'css', target: 'stylus' },
	{ id: 'e-css-tailwind', source: 'css', target: 'tailwind' },

	// JavaScript → TypeScript → React
	{ id: 'e-js-ts', source: 'javascript', target: 'typescript' },
	{ id: 'e-ts-react', source: 'typescript', target: 'react' },
	{ id: 'e-ts-perf', source: 'typescript', target: 'performance' },

	// React → State Management
	{ id: 'e-react-redux', source: 'react', target: 'redux' },
	{ id: 'e-react-saga', source: 'react', target: 'redux-saga' },

	// ══════════════════════════════════════════════════════════════
	// MOBILE & WEB FLOW (from React)
	// ══════════════════════════════════════════════════════════════

	{ animated: true, id: 'e-react-mobile', source: 'react', target: 'mobile' },
	{ id: 'e-mobile-pwa', source: 'mobile', target: 'pwa' },
	{ id: 'e-mobile-capacitor', source: 'mobile', target: 'capacitor' },
	{ id: 'e-mobile-websockets', source: 'mobile', target: 'websockets' },

	// ══════════════════════════════════════════════════════════════
	// BACKEND FLOW (from Frontend root)
	// ══════════════════════════════════════════════════════════════

	{ animated: true, id: 'e-frontend-backend', source: 'frontend', target: 'backend' },
	{ id: 'e-backend-csharp', source: 'backend', target: 'csharp' },
	{ id: 'e-backend-aspnet', source: 'backend', target: 'aspnet' },
	{ id: 'e-backend-rest', source: 'backend', target: 'rest-apis' },
	{ id: 'e-aspnet-sql', source: 'aspnet', target: 'sql-server' },

	// ══════════════════════════════════════════════════════════════
	// VERSION CONTROL FLOW (from Frontend root)
	// ══════════════════════════════════════════════════════════════

	{ animated: true, id: 'e-frontend-vcs', source: 'frontend', target: 'vcs' },
	{ id: 'e-vcs-git', source: 'vcs', target: 'git' },
	{ id: 'e-vcs-github', source: 'vcs', target: 'github' },

	// ══════════════════════════════════════════════════════════════
	// ARCHITECTURE FLOW (from Frontend root)
	// ══════════════════════════════════════════════════════════════

	{ animated: true, id: 'e-frontend-arch', source: 'frontend', target: 'architecture' },
	{ id: 'e-arch-frontend-arch', source: 'architecture', target: 'frontend-arch' },
	{ id: 'e-arch-leadership', source: 'architecture', target: 'leadership' },
	{ id: 'e-arch-mentoring', source: 'architecture', target: 'mentoring' },

	// ══════════════════════════════════════════════════════════════
	// AI FLOW (from Frontend root)
	// ══════════════════════════════════════════════════════════════

	{ animated: true, id: 'e-frontend-ai', source: 'frontend', target: 'ai' },
	{ id: 'e-ai-claude', source: 'ai', target: 'claude-code' },

	// ══════════════════════════════════════════════════════════════
	// TOOLS & LANGUAGES FLOW (from Frontend root)
	// ══════════════════════════════════════════════════════════════

	{ animated: true, id: 'e-frontend-tools', source: 'frontend', target: 'tools' },
	{ animated: true, id: 'e-frontend-languages', source: 'frontend', target: 'languages' },
	{ id: 'e-tools-docker', source: 'tools', target: 'docker' },
	{ id: 'e-languages-english', source: 'languages', target: 'english' },
	{ id: 'e-languages-spanish', source: 'languages', target: 'spanish' }
];

/* ===== Default Edge Options ===== */
export const defaultEdgeOptions = {
	style: {
		stroke: '#94a3b8',
		strokeWidth: 2
	},
	type: 'smoothstep'
};
