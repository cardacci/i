import React from 'react';

import { SectionTitle } from '@/utils';

const Skills: React.FC = () => {
	/* ===== Constants & Variables ===== */
	interface Skill {
		featured?: boolean;
		name: string;
	}

	const frontendSkills: Skill[] = [
		{ featured: true, name: 'React' },
		{ featured: true, name: 'JavaScript' },
		{ name: 'TypeScript' },
		{ featured: true, name: 'React Hooks' },
		{ featured: true, name: 'Redux' },
		{ featured: true, name: 'Redux-Saga' },
		{ featured: true, name: 'Redux Toolkit' },
		{ name: 'Vite' },
		{ featured: true, name: 'Webpack' },
		{ name: 'Gulp' },
		{ featured: true, name: 'HTML + CSS' },
		{ featured: true, name: 'Stylus' },
		{ featured: true, name: 'Material Design' },
		{ featured: true, name: 'Responsive Design' },
		{ name: 'Bootstrap' },
		{ name: 'AngularJS' },
		{ name: 'Ext JS' },
		{ name: 'Handlebars' },
		{ featured: true, name: 'jQuery' },
		{ featured: true, name: 'Lodash' },
		{ name: 'Axios' },
		{ featured: true, name: 'Superagent' },
		{ name: 'AJAX' },
		{ name: 'Uniloc' },
		{ name: 'Recompose' }
	];

	const mobileWebSkills: Skill[] = [
		{ featured: true, name: 'Capacitor' },
		{ featured: true, name: 'Progressive Web Applications (PWAs)' },
		{ name: 'Service Workers' },
		{ name: 'Web Workers' },
		{ featured: true, name: 'WebSockets' },
		{ name: 'Workbox' },
		{ name: 'Precaching' },
		{ featured: true, name: 'App Store Connect' },
		{ featured: true, name: 'Google Play Console' }
	];

	const backendSkills: Skill[] = [
		{ name: 'Node.js' },
		{ featured: true, name: 'REST APIs' },
		{ name: 'Web API' },
		{ name: 'C#' },
		{ name: 'ASP.NET MVC' },
		{ name: 'Razor' },
		{ name: 'NHibernate' },
		{ name: 'LINQ' },
		{ name: 'IIS' },
		{ name: 'JHipster' },
		{ name: 'PHP' },
		{ name: 'Java' }
	];

	const databaseSkills: Skill[] = [{ name: 'Microsoft SQL Server' }, { name: 'SQLite' }, { name: 'MySQL' }];

	const toolsSkills: Skill[] = [
		{ featured: true, name: 'Git' },
		{ name: 'GitHub' },
		{ name: 'Gitlab' },
		{ name: 'Bitbucket' },
		{ name: 'Git Extensions' },
		{ name: 'Sourcetree' },
		{ name: 'SVN' },
		{ name: 'Yarn' },
		{ name: 'npm' },
		{ name: 'Docker' },
		{ name: 'Kitematic' },
		{ featured: true, name: 'Azure Artifacts' },
		{ featured: true, name: 'Visual Studio Team Services' },
		{ name: 'Jira' },
		{ name: 'Adobe Primetime' }
	];

	const leadershipSkills: Skill[] = [
		{ featured: true, name: 'Technical Leadership' },
		{ featured: true, name: 'Software Architecture' },
		{ featured: true, name: 'Team Management' },
		{ featured: true, name: 'Hiring and Interviewing' },
		{ featured: true, name: 'Agile Methodologies' },
		{ featured: true, name: 'Scrum' },
		{ name: 'Kanban' },
		{ name: 'Product Development' }
	];

	const otherSkills: Skill[] = [{ name: 'Object-Oriented Programming (OOP)' }, { name: 'JSON' }, { name: 'XML' }, { name: 'English' }];

	const skillCategories = [
		{ color: 'blue', skills: frontendSkills, title: 'Frontend Development' },
		{ color: 'purple', skills: mobileWebSkills, title: 'Mobile & Web Technologies' },
		{ color: 'green', skills: backendSkills, title: 'Backend Development' },
		{ color: 'yellow', skills: databaseSkills, title: 'Databases' },
		{ color: 'gray', skills: toolsSkills, title: 'Tools & DevOps' },
		{ color: 'red', skills: leadershipSkills, title: 'Leadership & Management' },
		{ color: 'indigo', skills: otherSkills, title: 'Other Skills' }
	];

	const getColorClasses = (color: string) => {
		const colors: Record<string, { bg: string; border: string; text: string }> = {
			blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
			gray: { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800' },
			green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
			indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800' },
			purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800' },
			red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
			yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' }
		};

		return colors[color] || colors.gray;
	};

	return (
		<div>
			<SectionTitle level='h3'>Technical Skills</SectionTitle>

			<div className='space-y-6'>
				{skillCategories.map((category) => {
					const colorClasses = getColorClasses(category.color);

					return (
						<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100' key={category.title}>
							<h4 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
								<div className={`h-2 w-2 ${colorClasses.bg} rounded-full`}></div>
								{category.title}
							</h4>

							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill) => (
									<span
										className={`inline-flex items-center gap-1.5 ${colorClasses.bg} ${colorClasses.text} px-3 py-1.5 rounded-md text-sm border ${colorClasses.border} font-medium`}
										key={skill.name}
									>
										{skill.featured && (
											<svg className='w-4 h-4 text-yellow-500' fill='currentColor' viewBox='0 0 20 20'>
												<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
											</svg>
										)}
										{skill.name}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
