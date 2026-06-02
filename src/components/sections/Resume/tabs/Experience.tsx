import casheaLogo from '@/assets/images/experience/cashea-logo.jpg';
import intiveLogo from '@/assets/images/experience/intive-logo.jpg';
import klioLogo from '@/assets/images/experience/klio-logo.jpg';
import quadionTechnologiesLogo from '@/assets/images/experience/quadion-technologies-logo.jpg';
import universidadFastaLogo from '@/assets/images/experience/universidad-fasta-logo.jpg';
import { SectionTitle } from '@/components/common';
import { Companies, Skills } from '@/utils/constants';

/* ===== Types & Interfaces ===== */
interface ExperienceDescription {
	bullets?: string[];
	title?: string;
}

interface ExperienceInterface {
	company: Companies;
	companyLogo?: string;
	current?: boolean;
	descriptions?: ExperienceDescription[];
	id: number;
	location: string;
	period: string;
	skills?: Skills[];
	title: string;
}

const EXPERIENCES: ExperienceInterface[] = [
	{
		company: Companies.CASHEA,
		companyLogo: casheaLogo,
		current: true,
		descriptions: [
			{
				bullets: [
					'Contribute to component architecture, rendering performance, and the GraphQL data layer in production.',
					'Built a Storybook-powered component library from the design system in Figma, published as an internal package and consumed across multiple projects.',
					'Set up CI/CD workflows with GitHub Actions to automate builds and deployments.'
				],
				title: 'Building reliable, performant mobile experiences at scale for a React Native platform serving 10M+ users across Latin America.'
			}
		],
		id: 6,
		location: 'Remote',
		period: 'Jan 2026 - Present',
		skills: [
			Skills.CI_CD,
			Skills.FRONTEND_ARCHITECTURE,
			Skills.GITHUB_ACTIONS,
			Skills.GRAPHQL,
			Skills.REACT_NATIVE,
			Skills.SOFTWARE_ARCHITECTURE,
			Skills.STORYBOOK,
			Skills.TYPESCRIPT,
			Skills.ZUSTAND
		],
		title: 'Senior Frontend Engineer'
	},
	{
		company: Companies.KLIO,
		companyLogo: klioLogo,
		descriptions: [
			{
				bullets: [
					'Lead frontend architecture and engineering practices across an 8-engineer organization, managing a cross-functional team of 8 (frontend, backend, and QA). Drive technical strategy, system design, and delivery standards while partnering closely with product and business stakeholders to scale the platform sustainably.',
					'Reduced bundle size by 50% through native code replacements and significantly improved perceived load times with an offline-first caching strategy. Established coding standards for both developers and AI agents, and built internal shared libraries adopted across all company projects. Interviewed 30+ candidates, hired 8, and mentored junior engineers through to senior-level promotions.'
				]
			}
		],
		id: 6,
		location: 'Argentina',
		period: 'Oct 2020 - Jan 2026',
		skills: [
			Skills.CAPACITOR,
			Skills.CI_CD,
			Skills.FRONTEND_ARCHITECTURE,
			Skills.HIRING_AND_INTERVIEWING,
			Skills.MENTORING,
			Skills.PROGRESSIVE_WEB_APPS,
			Skills.REACT,
			Skills.REDUX,
			Skills.REDUX_SAGA,
			Skills.SERVICE_WORKERS,
			Skills.SOFTWARE_ARCHITECTURE,
			Skills.STYLUS,
			Skills.TEAM_MANAGEMENT,
			Skills.TECHNICAL_LEADERSHIP,
			Skills.TYPESCRIPT,
			Skills.WEBPACK,
			Skills.WEBSOCKETS
		],
		title: 'Principal Frontend Engineer / Engineering Lead'
	},
	{
		company: Companies.KLIO,
		companyLogo: klioLogo,
		descriptions: [
			{
				title: 'Owned frontend architecture and delivery for a growing product, leading complex UI systems, performance improvements, and cross-team integrations. Acted as technical reference for frontend practices while progressively taking on leadership and mentoring responsibilities.'
			}
		],
		id: 5,
		location: 'Argentina',
		period: 'Nov 2017 - Oct 2020',
		skills: [
			Skills.FRONTEND_ARCHITECTURE,
			Skills.MENTORING,
			Skills.PERFORMANCE_OPTIMIZATION,
			Skills.PROGRESSIVE_WEB_APPS,
			Skills.REACT,
			Skills.REDUX,
			Skills.REDUX_SAGA,
			Skills.SOFTWARE_ARCHITECTURE,
			Skills.TECHNICAL_LEADERSHIP,
			Skills.WEBSOCKETS
		],
		title: 'Senior Frontend Engineer / Engineering Lead'
	},
	{
		company: Companies.KLIO,
		companyLogo: klioLogo,
		descriptions: [
			{
				title: 'Joined klio as part of the founding team, building the frontend architecture and core product features from the ground up. Shaped early technical decisions that became the foundation for the platform\'s long-term growth, while collaborating closely with backend and product to ship the initial product.'
			}
		],
		id: 4,
		location: 'Argentina',
		period: 'Jun 2017 - Nov 2017',
		skills: [
			Skills.HTML_CSS,
			Skills.JAVASCRIPT,
			Skills.PRODUCT_DEVELOPMENT,
			Skills.REACT,
			Skills.REDUX,
			Skills.REST_APIS
		],
		title: 'Frontend Engineer / Founding Team Member'
	},
	{
		company: Companies.INTIVE,
		companyLogo: intiveLogo,
		descriptions: [
			{
				title: 'Contributed to the development of production web applications for multiple clients, working across the full stack with a strong focus on frontend architecture, component-based UIs, and API integrations within distributed teams.'
			}
		],
		id: 3,
		location: 'Argentina',
		period: 'May 2016 - Jun 2017',
		skills: [
			Skills.ANGULAR,
			Skills.CSHARP,
			Skills.DOCKER,
			Skills.GIT,
			Skills.HTML_CSS,
			Skills.JAVASCRIPT,
			Skills.REACT,
			Skills.REDUX
		],
		title: 'Software Developer Engineer'
	},
	{
		company: Companies.FASTA_UNIVERSITY,
		companyLogo: universidadFastaLogo,
		descriptions: [
			{
				title: 'Conducted applied research in mobile forensics as part of my Computer Science Engineering thesis, focusing on Android internals and data extraction techniques.'
			}
		],
		id: 2,
		location: 'Argentina',
		period: 'Aug 2014 - Apr 2017',
		title: 'Computer Forensics Researcher'
	},
	{
		company: Companies.QUADION_TECHNOLOGIES,
		companyLogo: quadionTechnologiesLogo,
		descriptions: [
			{
				title: 'Worked as a full-stack developer building and maintaining production web applications, contributing across frontend, backend, APIs, and database design.'
			}
		],
		id: 1,
		location: 'Argentina',
		period: 'Aug 2015 - May 2016',
		skills: [
			Skills.ANGULAR,
			Skills.ASP_NET_MVC,
			Skills.CSHARP,
			Skills.GIT,
			Skills.HTML_CSS,
			Skills.JAVASCRIPT,
			Skills.MICROSOFT_SQL_SERVER,
			Skills.REST_APIS
		],
		title: 'Full Stack Developer'
	}
];

const Experience = () => {
	/* ===== Functions ===== */
	const getExperiences = () => {
		// Group consecutive experiences by company
		const groupedExperiences: ExperienceInterface[][] = [];
		let currentGroup: ExperienceInterface[] = [];

		EXPERIENCES.forEach((exp, index) => {
			if (index === 0) {
				currentGroup.push(exp);
			} else {
				const prevExp = EXPERIENCES[index - 1];

				if (exp.company === prevExp.company) {
					currentGroup.push(exp);
				} else {
					groupedExperiences.push(currentGroup);
					currentGroup = [exp];
				}
			}
		});

		// Push the last group.
		if (currentGroup.length > 0) {
			groupedExperiences.push(currentGroup);
		}

		return groupedExperiences.map((group, groupIndex) => {
			const isGroupCurrent = group.some((exp) => exp.current);
			const firstExp = group[0];

			return (
				<div
					className={`relative pl-8 border-l-4 ${isGroupCurrent ? 'border-blue-500' : 'border-slate-300'} transition-all duration-300 hover:border-blue-400`}
					key={`group-${groupIndex}`}
				>
					{/* Decorative dot */}
					<div
						className={`absolute left-0 top-0 w-4 h-4 -translate-x-[10px] rounded-full border-4 ${
							isGroupCurrent ? 'border-blue-500 bg-white' : 'border-slate-300 bg-white'
						}`}
					/>

					{/* Company Header - shown once per company */}
					<div className='flex items-start gap-4 mb-6'>
						{/* Company Logo */}
						{firstExp.companyLogo && (
							<div className='flex-shrink-0 w-16 h-16 rounded-xl border border-slate-200 bg-white p-2 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
								<img alt={`${firstExp.company} logo`} className='w-full h-full object-contain' src={firstExp.companyLogo} />
							</div>
						)}

						<div className='flex-1'>
							<h4 className='text-xl font-bold text-slate-800 mb-1'>{firstExp.company}</h4>

							<p className='text-sm text-slate-500 flex items-center gap-1'>
								<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
									/>
									<path
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
									/>
								</svg>
								{firstExp.location}
							</p>
						</div>
					</div>

					{/* Positions within the company */}
					<div className='space-y-8'>
						{group.map((exp, expIndex) => {
							const { current, descriptions, id, period, skills, title } = exp;
							const isLastInGroup = expIndex === group.length - 1;

							return (
								<div className='relative group' key={id}>
									{/* Connector line for positions after the first */}
									{expIndex > 0 && (
										<div className='absolute left-0 -top-4 w-px h-4 bg-slate-200' style={{ marginLeft: '-2rem' }}></div>
									)}

									{/* Position content */}
									<div
										className={`${!isLastInGroup ? 'pb-0' : ''} bg-slate-50/50 rounded-xl p-4 -ml-2 transition-all duration-300 hover:bg-slate-100/50`}
									>
										<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
											<h5 className='text-lg font-semibold text-slate-800'>{title}</h5>

											<span
												className={`${
													current
														? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm shadow-blue-500/25'
														: 'bg-slate-200/80 text-slate-600'
												} text-sm font-medium px-4 py-1.5 rounded-full mt-2 md:mt-0`}
											>
												{period}
											</span>
										</div>

										<ul className='text-slate-600 space-y-2 mb-3 leading-relaxed'>
											{descriptions?.map((d, index) => {
												const { bullets, title } = d;

												return (
													<li key={index}>
														{title}

														{bullets && (
															<ul className='list-disc list-inside ml-4 mt-2 text-slate-500'>
																{bullets.map((bullet, bulletIndex) => (
																	<li key={bulletIndex}>{bullet}</li>
																))}
															</ul>
														)}
													</li>
												);
											})}
										</ul>

										{skills && skills.length > 0 && (
											<div className='mt-4'>
												<div className='flex flex-wrap gap-2'>
													{skills.map((skill, skillIndex) => (
														<span
															className='inline-flex items-center px-2.5 py-1 bg-white text-slate-600 rounded-lg text-xs font-medium border border-slate-200 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors duration-200'
															key={skillIndex}
														>
															{skill}
														</span>
													))}
												</div>
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			);
		});
	};

	return (
		<div>
			<SectionTitle level='h3'>Experience</SectionTitle>

			<div className='space-y-10'>{getExperiences()}</div>
		</div>
	);
};

export default Experience;
