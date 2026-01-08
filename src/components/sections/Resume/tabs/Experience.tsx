import React from 'react';

import aspenSkiingCompanyLogo from '@/assets/images/experience/aspen-skiing-company-logo.jpg';
import intaLogo from '@/assets/images/experience/inta-logo.jpg';
import intiveLogo from '@/assets/images/experience/intive-logo.jpg';
import klioLogo from '@/assets/images/experience/klio-logo.jpg';
import quadionTechnologiesLogo from '@/assets/images/experience/quadion-technologies-logo.jpg';
import universidadFastaLogo from '@/assets/images/experience/universidad-fasta-logo.jpg';
import { SectionTitle } from '@/utils';
import { Companies, Skills } from '@/utils/constants';

/* ===== Types & Interfaces ===== */
interface ExperienceDescription {
	bullets?: string[];
	title: string;
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
		company: Companies.KLIO,
		companyLogo: klioLogo,
		current: true,
		descriptions: [
			{
				title: 'Lead frontend architecture and engineering practices across the organization, combining hands-on technical leadership with people management. Drive technical strategy, system design, and delivery standards while partnering closely with product and business stakeholders to scale the platform sustainably.'
			}
		],
		id: 9,
		location: 'Argentina',
		period: 'Oct 2020 - Present',
		skills: [
			Skills.FRONTEND_ARCHITECTURE,
			Skills.SOFTWARE_ARCHITECTURE,
			Skills.TECHNICAL_LEADERSHIP,
			Skills.TEAM_MANAGEMENT,
			Skills.HIRING_AND_INTERVIEWING,
			Skills.REACT,
			Skills.TYPESCRIPT,
			Skills.PROGRESSIVE_WEB_APPS,
			Skills.MENTORING,
			Skills.CAPACITOR
		],
		title: 'Principal Frontend Engineer & Engineering Lead'
	},
	{
		company: Companies.KLIO,
		companyLogo: klioLogo,
		descriptions: [
			{
				title: 'Owned frontend architecture and delivery for a growing product, leading complex UI systems, performance improvements, and cross-team integrations. Acted as technical reference for frontend practices while progressively taking on leadership and mentoring responsibilities.'
			}
		],
		id: 8,
		location: 'Argentina',
		period: 'Nov 2017 - Oct 2020',
		skills: [
			Skills.FRONTEND_ARCHITECTURE,
			Skills.SOFTWARE_ARCHITECTURE,
			Skills.TECHNICAL_LEADERSHIP,
			Skills.REACT,
			Skills.PROGRESSIVE_WEB_APPS,
			Skills.PERFORMANCE_OPTIMIZATION,
			Skills.WEBSOCKETS,
			Skills.MENTORING,
			Skills.REDUX_SAGA
		],
		title: 'Senior Frontend Engineer & Engineering Lead'
	},
	{
		company: Companies.KLIO,
		companyLogo: klioLogo,
		descriptions: [
			{
				title: 'Joined klio at its earliest stage as part of the founding team, building the first frontend architecture and core product features while collaborating closely with backend and product to shape the initial platform.'
			}
		],
		id: 7,
		location: 'Argentina',
		period: 'Jun 2017 - Nov 2017',
		skills: [Skills.REACT, Skills.JAVASCRIPT, Skills.REDUX, Skills.REST_APIS, Skills.HTML_CSS, Skills.PRODUCT_DEVELOPMENT],
		title: 'Frontend Engineer & Founding Team Member'
	},
	{
		company: Companies.INTIVE,
		companyLogo: intiveLogo,
		descriptions: [
			{
				title: 'Contributed to the development of production web applications for multiple clients, working across the full stack with a strong focus on frontend architecture, component-based UIs, and API integrations within distributed teams.'
			}
		],
		id: 6,
		location: 'Argentina',
		period: 'May 2016 - Jun 2017',
		skills: [Skills.REACT, Skills.JAVASCRIPT, Skills.REDUX, Skills.HTML_CSS, Skills.GIT, Skills.DOCKER, Skills.CSHARP],
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
		id: 5,
		location: 'Argentina',
		period: 'Aug 2014 - Apr 2017',
		title: 'Computer Forensics Researcher'
	},
	{
		company: Companies.QUADION_TECHNOLOGIES,
		companyLogo: quadionTechnologiesLogo,
		descriptions: [
			{
				title: 'Worked as a full-stack developer building and maintaining production web applications, contributing across frontend, backend, APIs, and database design within a collaborative agile team.'
			}
		],
		id: 4,
		location: 'Argentina',
		period: 'Aug 2015 - May 2016',
		skills: [Skills.JAVASCRIPT, Skills.REST_APIS, Skills.HTML_CSS, Skills.GIT, Skills.CSHARP, Skills.ASP_NET_MVC, Skills.MICROSOFT_SQL_SERVER],
		title: 'Full Stack Developer'
	},
	{
		company: Companies.ASPEN_SKIING_COMPANY,
		companyLogo: aspenSkiingCompanyLogo,
		descriptions: [
			{
				title: 'Customer-facing role in a fast-paced, English-speaking environment.'
			}
		],
		id: 3,
		location: 'United States',
		period: 'Dec 2013 - Mar 2014',
		skills: [Skills.ENGLISH],
		title: 'Busser'
	},
	{
		company: Companies.INTA,
		companyLogo: intaLogo,
		descriptions: [
			{
				title: 'Maintained internal network infrastructure and provided technical support, including configuration of routers, switches, firewalls, and secure remote access (VPN).'
			}
		],
		id: 2,
		location: 'Argentina',
		period: 'Jun 2013 - Nov 2013',
		title: 'Network Administrator & Technical Support'
	},
	{
		company: Companies.FASTA_UNIVERSITY,
		companyLogo: universidadFastaLogo,
		descriptions: [
			{
				title: 'Provided on-site and remote technical support for academic and administrative staff, troubleshooting hardware, software, and network issues.'
			}
		],
		id: 1,
		location: 'Argentina',
		period: 'Jul 2010 - Dec 2010',
		title: 'IT Support Analyst'
	}
];

const Experience: React.FC = () => {
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
				<div className={`border-l-4 pl-6 ${isGroupCurrent ? 'border-blue-500' : 'border-gray-400'}`} key={`group-${groupIndex}`}>
					{/* Company Header - shown once per company */}
					<div className='flex items-start gap-4 mb-4'>
						{/* Company Logo */}
						{firstExp.companyLogo && (
							<div className='flex-shrink-0 w-16 h-16 rounded-lg border border-gray-200 bg-white p-2 flex items-center justify-center overflow-hidden'>
								<img alt={`${firstExp.company} logo`} className='w-full h-full object-contain' src={firstExp.companyLogo} />
							</div>
						)}

						<div className='flex-1'>
							<h4 className='text-xl font-bold text-gray-900 mb-1'>{firstExp.company}</h4>

							<p className='text-sm text-gray-500'>{firstExp.location}</p>
						</div>
					</div>

					{/* Positions within the company */}
					<div className='space-y-6'>
						{group.map((exp, expIndex) => {
							const { current, descriptions, id, period, skills, title } = exp;
							const isLastInGroup = expIndex === group.length - 1;

							return (
								<div className='relative' key={id}>
									{/* Connector line for positions after the first */}
									{expIndex > 0 && <div className='absolute left-0 -top-3 w-px h-3 bg-gray-300' style={{ marginLeft: '-1.5rem' }}></div>}

									{/* Position content */}
									<div className={`${!isLastInGroup ? 'pb-0' : ''}`}>
										<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-1'>
											<h5 className='text-lg font-semibold text-gray-900'>{title}</h5>

											<span
												className={`${current ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} text-sm font-medium px-3 py-1 rounded-full`}
											>
												{period}
											</span>
										</div>

										<ul className='text-gray-600 space-y-2 mb-2'>
											{descriptions?.map((d, index) => {
												const { bullets, title } = d;

												return (
													<li key={index}>
														{title}

														{bullets && (
															<ul className='list-disc list-inside ml-4'>
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
											<div className='mt-3'>
												<div className='flex flex-wrap gap-1.5'>
													{skills.map((skill, skillIndex) => (
														<span
															className='inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs'
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

			<div className='space-y-8'>{getExperiences()}</div>
		</div>
	);
};

export default Experience;
