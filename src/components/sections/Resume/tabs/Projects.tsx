import intiveLogo from '@/assets/images/experience/intive-logo.jpg';
import klioLogo from '@/assets/images/experience/klio-logo.jpg';
import quadionTechnologiesLogo from '@/assets/images/experience/quadion-technologies-logo.jpg';
import universidadFastaLogo from '@/assets/images/experience/universidad-fasta-logo.jpg';
import { SectionTitle } from '@/components/common';
import { Companies, Skills } from '@/utils/constants';

/* ===== Types & Interfaces ===== */
interface ProjectInterface {
	company?: Companies;
	description: string;
	period: string;
	skills?: Skills[];
	title: string;
	urls?: string[];
}

const PROJECTS: ProjectInterface[] = [
	{
		company: Companies.KLIO,
		description:
			'Co-founded and led the frontend development of klio, a financial platform for personal and business money management. Built and evolved the frontend architecture from the ground up, scaling it to support complex financial features while leading engineering practices, technical strategy, and cross-functional collaboration.',
		period: 'Jun 2017 - Jan 2026',
		skills: [
			Skills.FRONTEND_ARCHITECTURE,
			Skills.HIRING_AND_INTERVIEWING,
			Skills.JAVASCRIPT,
			Skills.PRODUCT_DEVELOPMENT,
			Skills.PROGRESSIVE_WEB_APPS,
			Skills.REACT,
			Skills.REDUX,
			Skills.SERVICE_WORKERS,
			Skills.SOFTWARE_ARCHITECTURE,
			Skills.TEAM_MANAGEMENT,
			Skills.TECHNICAL_LEADERSHIP,
			Skills.TYPESCRIPT,
		],
		title: 'klio',
		urls: ['http://klio.com.ar/']
	},
	{
		company: Companies.KLIO,
		description:
			'Led frontend delivery for a home banking platform, designing and delivering secure, user-facing financial features in collaboration with product and backend teams.',
		period: 'Jun 2024 - Jul 2025',
		skills: [
			Skills.CAPACITOR,
			Skills.REACT,
			Skills.REDUX,
			Skills.TYPESCRIPT
		],
		title: 'Home Banking for Banco de Comercio',
		urls: [
			'https://apps.apple.com/ar/app/banco-de-comercio/id6736632273',
			'https://play.google.com/store/apps/details?id=com.ar.bdc'
		]
	},
	{
		company: Companies.FASTA_UNIVERSITY,
		description:
			'Final engineering thesis focused on mobile forensics, developing custom methods for extracting physical and logical data from Android devices.',
		period: 'Aug 2014 - Apr 2017',
		title: 'FOMO - Android'
	},
	{
		company: Companies.INTIVE,
		description: 'Led frontend development of an educational web platform, building reusable React components and improving architecture for scalability and maintainability.',
		period: 'Oct 2016 - Mar 2017',
		skills: [
			Skills.HTML_CSS,
			Skills.JAVASCRIPT,
			Skills.REACT
		],
		title: 'Macmillan Onboarding',
		urls: ['https://www.bfwpub.com/high-school/us/digital/achieve#/findatitle/']
	},
	{
		company: Companies.QUADION_TECHNOLOGIES,
		description: 'Developed a production web application for managing products, pricing, customers, and sales, delivering full-stack features from UI to database.',
		period: 'Sep 2015 - May 2016',
		skills: [
			Skills.ASP_NET_MVC,
			Skills.CSHARP,
			Skills.HTML_CSS,
			Skills.JAVASCRIPT,
			Skills.MICROSOFT_SQL_SERVER
		],
		title: 'Trade Print Hub',
		urls: ['https://www.tradeprinthub.ie/']
	}
];

const Projects = () => {
	/* ===== Functions ===== */
	const getCompanyLogo = (company: Companies) => {
		switch (company) {
			case Companies.FASTA_UNIVERSITY:
				return universidadFastaLogo;
			case Companies.INTIVE:
				return intiveLogo;
			case Companies.KLIO:
				return klioLogo;
			case Companies.QUADION_TECHNOLOGIES:
				return quadionTechnologiesLogo;
			default:
				return undefined;
		}
	};

	return (
		<div>
			<SectionTitle level='h3'>Projects</SectionTitle>

			<div className='space-y-8'>
				{PROJECTS.map((project, index) => {
					const { company, description, period, skills, title, urls } = project;
					const companyLogo = company ? getCompanyLogo(company) : undefined;

					return (
						<div className='border-l-4 border-gray-400 pl-6 relative' key={index}>
							<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-1'>
								<div className='flex items-center gap-2'>
									<h4 className='text-lg font-bold text-gray-900'>{title}</h4>
									{urls?.map((url, urlIndex) => (
										<a
											className='text-gray-400 hover:text-blue-600 transition-colors'
											href={url}
											key={urlIndex}
											rel='noopener noreferrer'
											target='_blank'
											title='Visit Project'
										>
											<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
												<path
													clipRule='evenodd'
													d='M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z'
													fillRule='evenodd'
												/>
												<path
													clipRule='evenodd'
													d='M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z'
													fillRule='evenodd'
												/>
											</svg>
										</a>
									))}
								</div>

								<span className='bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full'>{period}</span>
							</div>

							{company && (
								<div className='flex items-center gap-2 mb-2'>
									{companyLogo && <img alt={`${company} logo`} className='w-5 h-5 object-contain rounded-sm' src={companyLogo} />}
									<span className='text-sm font-medium text-gray-700'>{company}</span>
								</div>
							)}

							<p className='text-gray-600 mb-3'>{description}</p>

							{skills && skills.length > 0 && (
								<div className='flex flex-wrap gap-1.5'>
									{skills.map((skill, skillIndex) => (
										<span className='inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs' key={skillIndex}>
											{skill}
										</span>
									))}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
