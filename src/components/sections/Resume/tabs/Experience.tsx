import React from 'react';

import aspenSkiingCompanyLogo from '@/assets/images/experience/aspen-skiing-company-logo.jpg';
import intaLogo from '@/assets/images/experience/inta-logo.jpg';
import intiveLogo from '@/assets/images/experience/intive-logo.jpg';
import klioLogo from '@/assets/images/experience/klio-logo.jpg';
import macmillanLearningLogo from '@/assets/images/experience/macmillan-learning-logo.jpg';
import quadionTechnologiesLogo from '@/assets/images/experience/quadion-technologies-logo.jpg';
import universidadFastaLogo from '@/assets/images/experience/universidad-fasta-logo.jpg';
import { SectionTitle } from '@/utils';

/* ===== Types & Interfaces ===== */
interface ExperienceDescription {
	bullets?: string[];
	title: string;
}

interface ExperienceInterface {
	company: string;
	companyLogo?: string;
	current?: boolean;
	descriptions?: ExperienceDescription[];
	id: number;
	location: string;
	period: string;
	title: string;
}

const EXPERIENCES: ExperienceInterface[] = [
	{
		company: 'Klio',
		companyLogo: klioLogo,
		current: true,
		descriptions: [
			{
				title: 'Built on my previous experience as Engineering Lead, expanding my scope to include strategic technical decisions, product planning, and organizational leadership. Continue to lead and actively contribute to frontend development while playing a key role in cross-functional initiatives that impact the business at large.'
			},
			{
				bullets: [
					'Lead the design, development, and architecture of all frontend initiatives, from concept to deployment.',
					'Launch new projects from scratch, selecting the most suitable technologies and ensuring long-term maintainability and scalability.',
					'Oversee day-to-day integration with backend teams, aligning APIs and deployment flows.',
					'Conduct regular QA progress reviews and frontend code reviews to uphold engineering standards.',
					'Continuously evaluate new technologies and introduce improvements to our stack and developer workflow.',
					'Collaborate with sales and product teams to scope features, define priorities, and ensure timely and realistic releases.',
					' Clearly communicate expectations, technical risks, and timelines across the engineering team.',
					'Drive team growth: define job roles, interview and evaluate candidates, and make final hiring decisions alongside the CEO.',
					'Actively involved in shaping product vision and aligning tech solutions with business goals.'
				],
				title: 'Core responsibilities:'
			}
		],
		id: 10,
		location: 'Argentina',
		period: 'Oct 2020 - Present',
		title: 'Principal Frontend Engineer & Engineering Lead'
	},
	{
		company: 'Klio',
		companyLogo: klioLogo,
		descriptions: [
			{
				title: 'Led the frontend team at Klio, designing and delivering scalable, responsive web applications while actively contributing to product and business decisions. Took ownership of frontend architecture and development across multiple areas of the platform.'
			},
			{
				bullets: [
					'Developed applications using React, React Hooks, Redux, Redux-Saga, JavaScript (ES6), TypeScript, and Stylus.',
					'Managed state and component logic with Redux Toolkit and Recompose.',
					'Handled routing with Uniloc and also built a custom router tailored to the platform.',
					'Delivered real-time and offline capabilities as part of a PWA strategy using WebSockets, Service Workers, Workbox, and precaching.',
					'Built mobile-ready experiences with Responsive Design and optimized performance using Webpack and Vite.',
					'Created native mobile apps with Capacitor, and managed deployments to App Store Connect and Google Play Console.',
					'Deployed web applications across all environments and handled code with Git, Visual Studio Team Services, Yarn, and Azure Artifacts.',
					'Built internal UI libraries and tools.',
					'Used Material Design, Lodash, and Superagent for UI and API interactions.'
				],
				title: 'Technical responsibilities:'
			},
			{
				bullets: [
					'Planned, assigned, and tracked tasks using Scrum.',
					'Mentored frontend team members of all levels, led reviews, and promoted knowledge sharing.',
					'Participated in hiring and technical interviews.',
					'Researched and introduced new technologies into production.'
				],
				title: 'Leadership responsibilities:'
			},
			{
				bullets: [
					'Contributed to features like QR code generation, biometric authentication (Face ID, fingerprint), document/facial validation, and payment flows.',
					' Worked on banking flows: cash flow calendars, account linking, card SDKs.',
					'Helped define user permissions, limits, and access control.'
				],
				title: 'Product involvement:'
			}
		],
		id: 9,
		location: 'Argentina',
		period: 'Nov 2017 - Oct 2020',
		title: 'Senior Frontend Engineer & Engineering Lead'
	},
	{
		company: 'Klio',
		companyLogo: klioLogo,
		descriptions: [
			{
				bullets: [
					'Developed core UI components using React and managed application state with Redux.',
					'Built responsive interfaces with JavaScript, HTML, and CSS, aligned with product design requirements.',
					'Integrated RESTful APIs and collaborated with backend engineers to ensure seamless user flows.',
					'Participated in early technical decisions around frontend tooling and project structure.',
					'Gained a deep understanding of the business model, helping align development efforts with product goals.'
				],
				title: 'Joined Klio in its earliest stages as part of the founding team, contributing to the first version of the product and laying the groundwork for the frontend architecture. Worked closely with the existing Frontend Lead and backend team to deliver functional features for the initial platform launch.'
			}
		],
		id: 8,
		location: 'Argentina',
		period: 'Jun 2017 - Nov 2017',
		title: 'Frontend Engineer & Founding Team Member'
	},
	{
		company: 'intive',
		companyLogo: intiveLogo,
		descriptions: [
			{
				bullets: [
					'Built scalable user interfaces using React, AngularJS, Ext JS, JavaScript (ES6), Redux, Redux Thunk, jQuery, and Handlebars.',
					'Developed and consumed RESTful APIs using C#, ASP.NET MVC, and deployed services using IIS and JHipster.',
					'Managed application styles and layout using CSS, and optimized frontend performance using Webpack, Gulp, and npm.',
					'Integrated data communication layers with Axios for efficient API handling.',
					'Used Git, Bitbucket, GitHub, and Sourcetree for version control and collaborative development workflows.',
					'Utilized Docker and Kitematic for local development environments and containerization.',
					'Tracked tasks and project progress using JIRA, and participated in Scrum and Kanban agile ceremonies.',
					'Collaborated daily with distributed teams, maintaining clear communication across time zones and departments.'
				],
				title: 'Contributed to the development of web applications for clients in the Communications, Media, and Technology sectors. Participated in multiple full stack projects, with a strong focus on frontend development, component-based architectures, and API integrations.'
			}
		],
		id: 7,
		location: 'Argentina',
		period: 'May 2016 - Jun 2017',
		title: 'Software Developer Engineer'
	},
	{
		company: 'Universidad FASTA',
		companyLogo: universidadFastaLogo,
		descriptions: [
			{
				bullets: [
					'Investigated Android internals and file systems for forensic analysis.',
					'Designed and developed tools to support mobile data acquisition and inspection.',
					'Built web-based interfaces and backends using ASP.NET MVC, C#, and SQLite.',
					'Participated in an agile development environment using Scrum and Kanban methodologies.',
					'Used SVN and TortoiseSVN for version control and Freedcamp for task tracking and collaboration.'
				],
				title: 'Conducted applied research as part of the FOMO project, focusing on mobile forensics. The work was also part of my final project for my Computer Science Engineering degree. I explored the Android operating system in depth to develop reliable methods for extracting both physical and logical data from mobile devices.'
			}
		],
		id: 6,
		location: 'Argentina',
		period: 'Aug 2014 - Apr 2017',
		title: 'Computer Forensics Researcher'
	},
	{
		company: 'Macmillan Learning',
		companyLogo: macmillanLearningLogo,
		descriptions: [
			{
				bullets: [
					'Led frontend development for the Macmillan Onboarding project, building reusable components and implementing routing logic across platforms.',
					'Contributed to the Gradebook platform, creating responsive views and data-driven interfaces using Ext JS and Handlebars.',
					'Participated in sprint planning, code reviews, and daily standups using Scrum methodology.',
					'Communicated daily with international teams, aligning technical decisions with business goals.',
					'Ensured code quality, performance, and cross-browser compatibility across projects.'
				],
				title: 'Worked as a software development consultant for Macmillan Learning, a leading EdTech company based in the United States. Contributed to the development of multiple web applications aimed at improving the educational experience for students and instructors. Collaborated with cross-functional teams in an agile environment, with a strong focus on frontend development and performance.'
			}
		],
		id: 5,
		location: 'United States',
		period: 'Aug 2016 - Mar 2017',
		title: 'Software Developer Engineer'
	},
	{
		company: 'Quadion Technologies',
		companyLogo: quadionTechnologiesLogo,
		descriptions: [
			{
				bullets: [
					'Developed web applications using ASP.NET MVC, C#, JavaScript, and SQL Server.',
					'Built responsive user interfaces with Bootstrap, jQuery, and AngularJS.',
					'Designed and consumed RESTful APIs and managed data access with LINQ and NHibernate.',
					'Implemented server-side rendering with Razor views and handled deployment using IIS.',
					'Participated in Scrum-based agile development, delivering features in short iterations.',
					'Used Git and GitLab for version control, along with Git Extensions for workflow optimization.'
				],
				title: 'Worked across the full development stack to design, build, and maintain web applications using Microsoft technologies. Responsible for both frontend and backend development, as well as database design and API integrations.'
			}
		],
		id: 4,
		location: 'Argentina',
		period: 'Aug 2015 - May 2016',
		title: 'Full Stack Developer'
	},
	{
		company: 'Aspen Skiing Company',
		companyLogo: aspenSkiingCompanyLogo,
		descriptions: [
			{
				bullets: [
					'Interacted daily with customers and staff in English, enhancing fluency and confidence in real-life settings.',
					'Collaborated with team members to maintain smooth restaurant operations.',
					'Adapted quickly to a dynamic environment with high service standards.',
					'Developed soft skills such as teamwork, flexibility, and cultural awareness.'
				],
				title: 'Worked in a high-end restaurant in Aspen, providing support to the service team and ensuring an excellent dining experience for customers. This role strengthened my communication skills in English and exposed me to a fast-paced, multicultural work environment.'
			}
		],
		id: 3,
		location: 'United States',
		period: 'Dec 2013 - Mar 2014',
		title: 'Busser'
	},
	{
		company: 'INTA',
		companyLogo: intaLogo,
		descriptions: [
			{
				bullets: [
					'Configured and deployed network hardware and software, ensuring stable and secure connectivity.',
					'Monitored network performance and conducted proactive troubleshooting to minimize downtime.',
					'Implemented network security protocols and followed best practices to protect organizational data.',
					'Set up and maintained VPNs to support secure remote access.',
					'Resolved hardware and software issues for staff members, both on-site and remotely.',
					'Collaborated with IT colleagues to develop internal procedures and improve system efficiency.',
					'Documented network configurations, updates, and resolution workflows for future reference.'
				],
				title: "Managed and maintained the organization's network infrastructure, including routers, switches, and firewalls. Provided end-user technical support and ensured secure, reliable network performance across departments."
			}
		],
		id: 2,
		location: 'Argentina',
		period: 'Jun 2013 - Nov 2013',
		title: 'Network Administrator & Technical Support'
	},
	{
		company: 'Universidad FASTA',
		companyLogo: universidadFastaLogo,
		descriptions: [
			{
				bullets: [
					'Troubleshot and resolved technical incidents across desktops, printers, and internal applications.',
					'Ensured effective communication with users of varying technical expertise, tailoring solutions accordingly.',
					'Maintained, updated, and configured user workstations and peripherals.',
					'Collaborated with the IT team to support infrastructure and improve response times.',
					'Followed structured support workflows to deliver efficient and timely resolutions.'
				],
				title: 'Provided technical support to university staff, including academic and administrative personnel, ensuring smooth operation of computer systems and network services. Assisted users both remotely and in person, resolving hardware, software, and connectivity issues.'
			}
		],
		id: 1,
		location: 'Argentina',
		period: 'Jun 2013 - Nov 2013',
		title: 'IT Support Analyst'
	}
];

const Experience: React.FC = () => {
	/* ===== Functions ===== */
	const getExperiences = () => {
		return EXPERIENCES.map((exp) => {
			const { company, companyLogo, current, descriptions, id, location, period, title } = exp;

			return (
				<div className={`border-l-4 pl-6 ${current ? 'border-blue-500' : 'border-gray-400'}`} key={id}>
					<div className='flex items-start gap-4 mb-4'>
						{/* Company Logo */}
						{companyLogo && (
							<div className='flex-shrink-0 w-16 h-16 rounded-lg border border-gray-200 bg-white p-2 flex items-center justify-center overflow-hidden'>
								<img alt={`${company} logo`} className='w-full h-full object-contain' src={companyLogo} />
							</div>
						)}

						<div className='flex-1'>
							<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
								<h4 className='text-xl font-bold text-gray-900'>{title}</h4>

								<span
									className={`${current ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} text-sm font-medium px-3 py-1 rounded-full`}
								>
									{period}
								</span>
							</div>

							<div className='mb-3'>
								<p className='text-lg font-medium'>{company}</p>
								<p className='text-sm text-gray-500'>{location}</p>
							</div>
						</div>
					</div>

					<ul className='text-gray-600 space-y-2'>
						{descriptions?.map((resp, index) => {
							const { bullets, title } = resp;

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
				</div>
			);
		});
	};

	return (
		<div>
			<SectionTitle level='h3'>Professional Experience</SectionTitle>

			<div className='space-y-8'>{getExperiences()}</div>
		</div>
	);
};

export default Experience;
