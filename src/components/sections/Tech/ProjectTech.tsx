import React from 'react';
import { useCardHover } from '@/utils';

const ProjectTech: React.FC = () => {
	const projectTechnologies = [
		{ name: 'React', description: 'Library for building user interfaces (v19.1.0)' },
		{ name: 'TypeScript', description: 'JavaScript with static type definitions (v5.8.3)' },
		{ name: 'Vite', description: 'Fast build tool and development server (v6.2.5)' },
		{
			name: 'React Router Dom',
			description: 'Declarative routing for React applications (v7.5.0)',
		},
		{ name: 'Tailwind CSS', description: 'Utility-first CSS framework (v4.1.8)' },
		{ name: 'ESLint', description: 'Linting utility for JavaScript/TypeScript (v8.56.0)' },
		{ name: 'Prettier', description: 'Code formatter for consistent code style (v3.5.3)' },
		{ name: 'PostCSS', description: 'Tool for transforming CSS with JavaScript (v8.5.4)' },
		{ name: 'Git', description: 'Version control system for tracking changes' },
		{ name: 'GitHub Pages', description: 'Static site hosting platform for deployment' },
	];

	// Use the card hover utility with slightly less intensity for these cards
	const { handleMouseMove, handleMouseLeave } = useCardHover(0.08);

	return (
		<div>
			<h3 className="text-xl font-semibold mb-4 text-gray-800">Project Technology Stack</h3>
			<p className="mb-4 text-gray-600">
				Technologies and tools used in the development of this personal portfolio
				(v1.06.02):
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				{projectTechnologies.map((tech, index) => (
					<div
						key={index}
						className="p-4 border rounded-lg bg-gray-50 cursor-pointer transition-transform duration-200 ease-out hover:shadow-lg"
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
					>
						<h4 className="font-semibold text-blue-600">{tech.name}</h4>
						<p className="text-sm text-gray-600 mt-1">{tech.description}</p>
					</div>
				))}
			</div>
			<div className="mt-6">
				<h4 className="text-lg font-semibold mb-3 text-gray-800">Development Setup</h4>
				<p className="text-gray-600 mb-2">
					This project uses modern web development tools and follows best practices:
				</p>
				<ul className="text-sm text-gray-600 space-y-1">
					<li>
						• <strong>Build System:</strong> Vite for fast development and optimized
						production builds
					</li>
					<li>
						• <strong>Code Quality:</strong> ESLint + Prettier for consistent code
						formatting
					</li>
					<li>
						• <strong>Styling:</strong> Tailwind CSS with PostCSS for utility-first
						styling
					</li>
					<li>
						• <strong>Deployment:</strong> GitHub Pages with automated build process
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectTech;
