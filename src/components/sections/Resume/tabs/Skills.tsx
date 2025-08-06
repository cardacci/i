import React from 'react';

import { SectionTitle } from '@/utils';

const Skills: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const technicalSkills = {
		'Frontend Technologies': {
			expert: ['JavaScript/TypeScript', 'React.js & React Ecosystem', 'HTML5 & Semantic Markup', 'CSS3 & Modern Styling'],
			advanced: ['Next.js', 'Vite', 'Tailwind CSS', 'Styled Components', 'Redux & Zustand', 'React Query/TanStack Query']
		},
		'Backend & Full Stack': {
			advanced: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
			intermediate: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Serverless Functions']
		},
		'Development Tools': {
			expert: ['Git & GitHub', 'VS Code', 'Chrome DevTools', 'NPM/Yarn'],
			advanced: ['Webpack', 'ESLint & Prettier', 'Jest & Testing Library', 'Storybook', 'Docker']
		},
		'AI & Modern Development': {
			advanced: ['AI-Augmented Development', 'GitHub Copilot', 'ChatGPT for Development', 'Prompt Engineering'],
			intermediate: ['AI Code Review Tools', 'Automated Testing with AI']
		}
	};

	const softSkills = [
		'Team Leadership & Mentoring',
		'Technical Architecture & Design',
		'Cross-functional Collaboration',
		'Problem Solving & Debugging',
		'Code Review & Quality Assurance',
		'Agile Development Methodologies',
		'Technical Communication',
		'Project Management'
	];

	const getSkillBadgeColor = (level: string) => {
		switch (level) {
			case 'expert':
				return 'bg-green-100 text-green-800 border-green-200';
			case 'advanced':
				return 'bg-blue-100 text-blue-800 border-blue-200';
			case 'intermediate':
				return 'bg-yellow-100 text-yellow-800 border-yellow-200';
			default:
				return 'bg-gray-100 text-gray-800 border-gray-200';
		}
	};

	return (
		<div>
			<SectionTitle level='h3'>Technical Skills</SectionTitle>

			<div className='space-y-8'>
				{/* Technical Skills */}
				<div>
					<h4 className='text-lg font-semibold text-gray-800 mb-6'>Technical Expertise</h4>

					{Object.entries(technicalSkills).map(([category, skills]) => (
						<div className='mb-8' key={category}>
							<h5 className='text-md font-semibold text-gray-700 mb-4'>{category}</h5>

							{Object.entries(skills).map(([level, skillList]) => (
								<div className='mb-4' key={level}>
									<div className='flex items-center mb-2'>
										<span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full border ${getSkillBadgeColor(level)}`}>
											{level.charAt(0).toUpperCase() + level.slice(1)}
										</span>
									</div>
									<div className='flex flex-wrap gap-2'>
										{skillList.map((skill) => (
											<span className='inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm border' key={skill}>
												{skill}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					))}
				</div>

				{/* Soft Skills */}
				<div>
					<h4 className='text-lg font-semibold text-gray-800 mb-4'>Leadership & Soft Skills</h4>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
						{softSkills.map((skill) => (
							<div className='flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200' key={skill}>
								<svg className='w-5 h-5 text-blue-600 mr-3 shrink-0' fill='currentColor' viewBox='0 0 20 20'>
									<path
										clipRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										fillRule='evenodd'
									/>
								</svg>
								<span className='text-blue-800 font-medium'>{skill}</span>
							</div>
						))}
					</div>
				</div>

				{/* Skill Development Philosophy */}
				<div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
					<h4 className='text-lg font-semibold text-purple-800 mb-3'>Skill Development Philosophy</h4>
					<p className='text-purple-700 mb-4'>I believe in continuous learning and staying at the forefront of technology. My approach combines:</p>
					<ul className='text-purple-700 space-y-2'>
						<li>
							• <strong>Deep Technical Knowledge:</strong> Mastering fundamentals while exploring cutting-edge technologies
						</li>
						<li>
							• <strong>Practical Application:</strong> Learning through building real-world projects and solving complex problems
						</li>
						<li>
							• <strong>AI-Augmented Development:</strong> Leveraging AI tools to enhance productivity and code quality
						</li>
						<li>
							• <strong>Knowledge Sharing:</strong> Teaching and mentoring others to reinforce my own learning
						</li>
						<li>
							• <strong>Industry Engagement:</strong> Staying connected with the developer community and latest trends
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
