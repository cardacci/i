import React from 'react';

import { SectionTitle } from '@/utils';
import { SKILL_CATEGORIES } from '@/utils/constants/skills';

const Skills: React.FC = () => {
	/* ===== Functions ===== */
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
			<SectionTitle level='h3'>Skills</SectionTitle>

			<div className='space-y-6'>
				{SKILL_CATEGORIES.map((category) => {
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
										className={`inline-flex items-center ${colorClasses.bg} ${colorClasses.text} px-3 py-1.5 rounded-md text-sm border ${colorClasses.border} font-medium`}
										key={skill.name}
									>
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
