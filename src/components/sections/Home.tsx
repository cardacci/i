/* ===== Imports ===== */
import type { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

import {
	LuArrowRight,
	LuBitcoin,
	LuBookOpen,
	LuChevronDown,
	LuCode,
	LuDisc3,
	LuFileText,
	LuGauge,
	LuLayers,
	LuPalette,
	LuPlane,
	LuTrendingUp
} from 'react-icons/lu';

import profileImage from '@/assets/images/profile_1.png';
import { BaseView, Reveal } from '@/components/common';
import { SETS, Skills, SocialNetwork, books, getTotalCountriesVisited } from '@/utils/constants';
import { ROUTES } from '@/utils/constants/routes';
import { useCountUp, useSocialLinks } from '@/utils/hooks';

/* ===== Constants & Enums ===== */
const CAREER_START_YEAR = 2015;

const EXPERTISE_AREAS: ExpertiseArea[] = [
	{
		description:
			'Scalable component systems, state management and routing strategies that keep large React codebases fast to work in.',
		gradient: 'from-blue-500 to-cyan-500',
		icon: LuLayers,
		title: 'Frontend Architecture'
	},
	{
		description:
			'Design tokens, accessible components and a consistent visual language that bridges the gap between design and engineering.',
		gradient: 'from-violet-500 to-fuchsia-500',
		icon: LuPalette,
		title: 'UI Engineering & Design Systems'
	},
	{
		description:
			'Code splitting, rendering optimization and buttery-smooth interactions. Performance treated as a feature, not an afterthought.',
		gradient: 'from-emerald-500 to-teal-500',
		icon: LuGauge,
		title: 'Performance & Web Vitals'
	}
];

const EXPLORE_SECTIONS: ExploreSection[] = [
	{
		description: 'Career path, skills, education and side projects.',
		gradient: 'from-blue-500 to-cyan-500',
		icon: LuFileText,
		label: 'Resume',
		path: ROUTES.RESUME.path
	},
	{
		description: 'Frontend & backend system design deep dives.',
		gradient: 'from-violet-500 to-purple-500',
		icon: LuCode,
		label: 'Software Engineering',
		path: ROUTES.SOFTWARE_ENGINEERING.path
	},
	{
		description: 'Bitcoin history and fair value analysis.',
		gradient: 'from-amber-500 to-orange-500',
		icon: LuBitcoin,
		label: 'Crypto',
		path: ROUTES.CRYPTO.path
	},
	{
		description: 'Market cycles and when to make money.',
		gradient: 'from-emerald-500 to-teal-500',
		icon: LuTrendingUp,
		label: 'Economics',
		path: ROUTES.ECONOMICS.path
	},
	{
		description: 'Sets, gear and a track classifier tool.',
		gradient: 'from-fuchsia-500 to-pink-500',
		icon: LuDisc3,
		label: 'DJing',
		path: ROUTES.DJING.path
	},
	{
		description: 'An interactive world map and travel timeline.',
		gradient: 'from-sky-500 to-indigo-500',
		icon: LuPlane,
		label: 'Travel',
		path: ROUTES.TRAVEL.path
	},
	{
		description: 'Books that shaped how I think and work.',
		gradient: 'from-rose-500 to-red-500',
		icon: LuBookOpen,
		label: 'Books',
		path: ROUTES.BOOKS.path
	}
];

const MARQUEE_SKILLS: string[] = [
	Skills.TYPESCRIPT,
	Skills.REACT,
	Skills.REACT_NATIVE,
	Skills.JAVASCRIPT,
	Skills.HTML_CSS,
	Skills.GRAPHQL,
	Skills.REDUX,
	Skills.ZUSTAND,
	Skills.STORYBOOK,
	Skills.JEST,
	Skills.PLAYWRIGHT,
	Skills.PERFORMANCE_OPTIMIZATION,
	Skills.PROGRESSIVE_WEB_APPS,
	Skills.CI_CD,
	Skills.DOCKER,
	Skills.WEBPACK
];

/* ===== Types & Interfaces ===== */
interface ExpertiseArea {
	description: string;
	gradient: string;
	icon: IconType;
	title: string;
}

interface ExploreSection {
	description: string;
	gradient: string;
	icon: IconType;
	label: string;
	path: string;
}

interface StatCounterProps {
	label: string;
	suffix?: string;
	value: number;
}

/* ===== StatCounter Component ===== */
const StatCounter = ({ label, suffix = '', value }: StatCounterProps) => {
	/* ===== Hooks ===== */
	const { elementRef, value: displayValue } = useCountUp(value);

	/* ===== JSX Return ===== */
	return (
		<div className='text-center' ref={elementRef}>
			<p className='font-display text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent tabular-nums'>
				{displayValue}
				{suffix}
			</p>

			<p className='text-sm text-slate-500 font-medium mb-0'>{label}</p>
		</div>
	);
};

/* ===== Component Function ===== */
const Home = () => {
	/* ===== Hooks ===== */
	const { socialLinks } = useSocialLinks([SocialNetwork.GITHUB, SocialNetwork.INSTAGRAM, SocialNetwork.LINKEDIN, SocialNetwork.YOUTUBE]);

	/* ===== Derived Values ===== */
	const totalBooks = books.length;
	const totalCountries = getTotalCountriesVisited();
	const totalSets = SETS.length;
	const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

	/* ===== Functions ===== */
	function renderExpertiseCard(area: ExpertiseArea, index: number) {
		const Icon = area.icon;

		return (
			<Reveal className='h-full' delay={index * 120} key={area.title}>
				<div className='group h-full p-6 md:p-7 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-200/80'>
					<div
						className={`inline-flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-gradient-to-br ${area.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
					>
						<Icon className='w-6 h-6' />
					</div>

					<h3 className='text-lg font-semibold text-slate-800 mb-2'>{area.title}</h3>

					<p className='text-sm text-slate-600 leading-relaxed mb-0'>{area.description}</p>
				</div>
			</Reveal>
		);
	}

	function renderExploreCard(section: ExploreSection, index: number) {
		const Icon = section.icon;

		return (
			<Reveal className='h-full' delay={(index % 4) * 90} key={section.path}>
				<Link
					className='group flex h-full flex-col p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-md shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-300/40 hover:border-slate-200 cursor-pointer'
					to={section.path}
				>
					<div className='flex items-center gap-3 mb-3'>
						<span
							className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${section.gradient} text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}
						>
							<Icon className='w-5 h-5' />
						</span>

						<span className='font-display font-semibold text-slate-800'>{section.label}</span>

						<LuArrowRight className='w-4 h-4 ml-auto text-slate-300 transition-all duration-300 group-hover:text-blue-600 group-hover:translate-x-1' />
					</div>

					<p className='text-sm text-slate-500 leading-relaxed mb-0'>{section.description}</p>
				</Link>
			</Reveal>
		);
	}

	function renderSectionHeader(eyebrow: string, title: string) {
		return (
			<Reveal>
				<p className='text-xs font-semibold tracking-widest text-blue-600 uppercase mb-2'>{eyebrow}</p>

				<h2 className='text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8'>{title}</h2>
			</Reveal>
		);
	}

	/* ===== JSX Return ===== */
	return (
		<BaseView id='home'>
			{/* ===== Hero ===== */}
			<div className='relative flex min-h-[calc(100svh-16rem)] md:min-h-[calc(100svh-14rem)] flex-col justify-center'>
				<div className='flex flex-col md:flex-row items-center gap-10 md:gap-14'>
					{/* Profile Image */}
					<div className='md:w-1/3 flex justify-center'>
						<div
							className='relative group animate-scale-in'
							style={{ animationDelay: '80ms', animationFillMode: 'both' }}
						>
							{/* Offset gradient backdrop */}
							<div className='absolute -bottom-5 -right-5 w-full h-full rounded-[2rem] bg-gradient-to-br from-blue-500 to-violet-600 opacity-90 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1' />

							{/* Soft ambient glow */}
							<div className='absolute -inset-6 bg-gradient-to-br from-blue-400/30 to-violet-500/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500' />

							{/* Framed portrait */}
							<div className='relative p-1.5 rounded-[2rem] bg-gradient-to-br from-white to-slate-100 shadow-2xl shadow-blue-900/20'>
								<img
									alt='Gabriel Cardacci'
									className='rounded-[1.6rem] w-56 h-56 md:w-64 md:h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]'
									src={profileImage}
								/>
							</div>

							{/* Floating glass badge */}
							<div className='absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg shadow-slate-900/10 ring-1 ring-slate-200/80 whitespace-nowrap'>
								<span className='relative flex h-2 w-2'>
									<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping' />
									<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
								</span>
								<span className='text-xs font-semibold text-slate-700'>Available for work</span>
							</div>
						</div>
					</div>

					{/* Content */}
					<div className='md:w-2/3 text-center md:text-left'>
						{/* Eyebrow */}
						<div
							className='inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-sm animate-slide-up'
							style={{ animationDelay: '120ms', animationFillMode: 'both' }}
						>
							<span className='relative flex h-2 w-2'>
								<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping' />
								<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
							</span>

							<span className='text-xs font-semibold tracking-wide text-slate-600 uppercase'>Senior Frontend Engineer</span>
						</div>

						{/* Headline */}
						<h1
							className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5 animate-slide-up'
							style={{ animationDelay: '200ms', animationFillMode: 'both' }}
						>
							<span className='bg-gradient-to-r from-slate-900 via-blue-800 to-violet-700 bg-clip-text text-transparent'>
								Building high-quality digital products for the web.
							</span>
						</h1>

						<p
							className='text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-slide-up'
							style={{ animationDelay: '280ms', animationFillMode: 'both' }}
						>
							Here you&apos;ll find a selection of professional work, side projects, explorations in crypto and blockchain, my
							journey as a DJ, and experiences shaped by travel, curiosity, and constant learning.
						</p>

						<p
							className='text-slate-700 font-medium mb-8 animate-slide-up'
							style={{ animationDelay: '340ms', animationFillMode: 'both' }}
						>
							Feel free to explore and connect.
						</p>

						{/* Call to action + social links */}
						<div
							className='flex flex-wrap gap-3 justify-center md:justify-start animate-slide-up'
							style={{ animationDelay: '420ms', animationFillMode: 'both' }}
						>
							<Link
								className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
								to={ROUTES.RESUME.path}
							>
								View resume

								<LuArrowRight className='w-4 h-4' />
							</Link>

							{socialLinks.map((link) => (
								<a
									className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${link.className}`}
									href={link.url}
									key={link.name}
									rel='noopener noreferrer'
									target='_blank'
								>
									{link.icon && link.icon}

									{!link.icon && <span className='font-bold'>{link.name.substring(0, 2).toUpperCase()}</span>}

									{link.name}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Scroll cue — fades away with a CSS scroll-driven animation. */}
				<div className='fade-out-on-scroll absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400'>
					<span className='text-[0.65rem] font-semibold tracking-widest uppercase'>Scroll to explore</span>

					<LuChevronDown className='w-5 h-5 animate-bounce-soft' />
				</div>
			</div>

			{/* ===== Expertise ===== */}
			<div className='mt-20 md:mt-28'>
				{renderSectionHeader('What I do', 'Frontend engineering, end to end.')}

				<div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6'>
					{EXPERTISE_AREAS.map(renderExpertiseCard)}
				</div>
			</div>

			{/* ===== Skills Marquee ===== */}
			<div className='mt-20 md:mt-24'>
				<Reveal direction='fade'>
					<div aria-label='Technologies I work with' className='marquee py-2' role='marquee'>
						<div className='marquee-track'>
							{[false, true].map((isDuplicate) => (
								<div aria-hidden={isDuplicate || undefined} className='flex gap-3.5' key={String(isDuplicate)}>
									{MARQUEE_SKILLS.map((skill) => (
										<span
											className='whitespace-nowrap px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 text-sm font-medium text-slate-600 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:text-blue-700'
											key={skill}
										>
											{skill}
										</span>
									))}
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</div>

			{/* ===== Stats ===== */}
			<div className='mt-20 md:mt-24'>
				<Reveal direction='scale'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-lg shadow-slate-200/50'>
						<StatCounter label='Years in software' suffix='+' value={yearsOfExperience} />

						<StatCounter label='Countries explored' value={totalCountries} />

						<StatCounter label='DJ sets produced' value={totalSets} />

						<StatCounter label='Books recommended' value={totalBooks} />
					</div>
				</Reveal>
			</div>

			{/* ===== Explore ===== */}
			<div className='mt-20 md:mt-28'>
				{renderSectionHeader('Beyond the code', 'Explore the rest of the site.')}

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5'>
					{EXPLORE_SECTIONS.map(renderExploreCard)}
				</div>
			</div>

			{/* ===== Closing CTA ===== */}
			<div className='mt-20 md:mt-28'>
				<Reveal direction='up'>
					<div className='animated-gradient relative overflow-hidden rounded-3xl p-8 md:p-14 text-center shadow-xl shadow-blue-900/20'>
						{/* Soft radial highlight for depth */}
						<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_60%)]' />

						<div className='relative'>
							<h2 className='text-2xl md:text-4xl font-bold text-white tracking-tight mb-3'>
								Let&apos;s build something great together.
							</h2>

							<p className='text-blue-100/90 max-w-xl mx-auto mb-8'>
								Open to senior frontend roles, technical leadership and interesting product challenges.
							</p>

							<div className='flex flex-wrap justify-center gap-3'>
								<Link
									className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer'
									to={ROUTES.RESUME.path}
								>
									View resume

									<LuArrowRight className='w-4 h-4' />
								</Link>

								<a
									className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 text-white font-semibold border border-white/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25 cursor-pointer'
									href='https://linkedin.com/in/cardacci'
									rel='noopener noreferrer'
									target='_blank'
								>
									Connect on LinkedIn
								</a>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</BaseView>
	);
};

/* ===== Exports ===== */
export default Home;
