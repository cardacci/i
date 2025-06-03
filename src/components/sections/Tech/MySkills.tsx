import React from 'react';
import { useCardHover, TECH_CATEGORIES } from '@/utils';
import type { TechCategory } from '@/utils';

interface Technology {
	category: TechCategory;
	name: string;
	years: number;
}

const MySkills: React.FC = () => {
	const myTechnologies: Technology[] = [
		{ category: TECH_CATEGORIES.BUILD_TOOLS, name: 'Webpack', years: 8.5 },
		{ category: TECH_CATEGORIES.FRONTEND, name: 'Angular', years: 1.5 },
		{ category: TECH_CATEGORIES.FRONTEND, name: 'React', years: 8 },
		{ category: TECH_CATEGORIES.LANGUAGES, name: 'ES6', years: 8 },
		{ category: TECH_CATEGORIES.LANGUAGES, name: 'JavaScript', years: 9 },
		{ category: TECH_CATEGORIES.LANGUAGES, name: 'TypeScript', years: 0.5 },
		{ category: TECH_CATEGORIES.MOBILE, name: 'Capacitor', years: 3.5 },
		{ category: TECH_CATEGORIES.STATE_MANAGEMENT, name: 'Redux', years: 8 },
		{ category: TECH_CATEGORIES.STATE_MANAGEMENT, name: 'Redux-Saga', years: 7 },
		{ category: TECH_CATEGORIES.STATE_MANAGEMENT, name: 'Redux Thunk', years: 1 },
		{ category: TECH_CATEGORIES.STATE_MANAGEMENT, name: 'Redux Toolkit', years: 1.5 },
		{ category: TECH_CATEGORIES.STYLING, name: 'Stylus', years: 7 },
		{ category: TECH_CATEGORIES.TOOLS, name: 'Git', years: 9 },
		{ category: TECH_CATEGORIES.WEB_TECHNOLOGIES, name: 'PWA', years: 4.5 },
		{ category: TECH_CATEGORIES.WEB_TECHNOLOGIES, name: 'Web Workers', years: 2.5 },
		{ category: TECH_CATEGORIES.WEB_TECHNOLOGIES, name: 'WebSockets', years: 3.5 },
	];

	// Sort by years of experience (descending)
	const sortedTechnologies = myTechnologies.sort((a, b) => b.years - a.years);

	// Use the card hover utility
	const { handleMouseMove, handleMouseLeave } = useCardHover(0.1);

	const formatYears = (years: number) => {
		if (years === 1) return '1 year';
		if (years % 1 === 0) return `${years} years`;
		return `${years} years`;
	};

	return (
		<div>
			<h3 className="text-xl font-semibold mb-4 text-gray-800">Technologies I Work With</h3>
			<p className="mb-4 text-gray-600">
				Tools and technologies I have experience with (updated as of June 2025):
			</p>
			<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
				{sortedTechnologies.map((tech, index) => (
					<div
						key={index}
						className="p-3 border rounded-lg bg-blue-50 cursor-pointer transition-transform duration-200 ease-out hover:shadow-lg"
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
					>
						<div className="flex justify-between items-start mb-1">
							<h4 className="font-semibold text-gray-800">{tech.name}</h4>
							<span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
								{formatYears(tech.years)}
							</span>
						</div>
						<span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">
							{tech.category}
						</span>
					</div>
				))}
			</div>
			<div className="mt-6">
				<h4 className="text-lg font-semibold mb-3 text-gray-800">Current Focus</h4>
				<p className="text-gray-600">
					With nearly a decade of JavaScript experience, I&apos;m currently deepening my
					TypeScript knowledge and exploring modern web development patterns, performance
					optimizations, and advanced React techniques.
				</p>
			</div>
		</div>
	);
};

export default MySkills;
