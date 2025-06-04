import React from 'react';
import { useCardHover } from '@/utils';

const ProjectTech: React.FC = () => {
	/* ===== Hooks ===== */
	const { handleMouseMove, handleMouseLeave } = useCardHover(0.08);

	/* ===== Constants ===== */
	const projectTechnologies = [
		{ name: 'daisyUI', description: 'Tailwind CSS component library' },
		{ name: 'ESLint', description: 'Linting utility for JavaScript/TypeScript' },
		{ name: 'Git', description: 'Version control system for tracking changes' },
		{ name: 'GitHub Pages', description: 'Static site hosting platform for deployment' },
		{ name: 'PostCSS', description: 'Tool for transforming CSS with JavaScript' },
		{ name: 'Prettier', description: 'Code formatter for consistent code style' },
		{ name: 'React', description: 'Library for building user interfaces' },
		{ name: 'React Router Dom', description: 'Declarative routing for React applications' },
		{ name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
		{ name: 'TypeScript', description: 'JavaScript with static type definitions' },
		{ name: 'Vite', description: 'Fast build tool and development server' },
	];

	return (
		<div>
			<h3 className="text-xl font-semibold mb-4 text-gray-800">Project Technology Stack</h3>
			<p className="mb-4 text-gray-600">
				Technologies and tools used in the development of this personal portfolio:
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
						• <strong>Styling:</strong> Tailwind CSS with daisyUI for component-based
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
