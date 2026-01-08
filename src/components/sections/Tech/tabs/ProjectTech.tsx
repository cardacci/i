import React from 'react';

import { SectionTitle } from '@/utils/components';
import { useCardHover } from '@/utils/hooks';

const ProjectTech: React.FC = () => {
	/* ===== Hooks ===== */
	const { handleMouseMove, handleMouseLeave } = useCardHover(0.08);

	/* ===== Constants & Variables ===== */
	const projectTechnologies = [
		{ description: 'Tailwind CSS component library', name: 'daisyUI' },
		{ description: 'Linting utility for JavaScript/TypeScript', name: 'ESLint' },
		{ description: 'Version control system for tracking changes', name: 'Git' },
		{ description: 'Static site hosting platform for deployment', name: 'GitHub Pages' },
		{ description: 'Tool for transforming CSS with JavaScript', name: 'PostCSS' },
		{ description: 'Code formatter for consistent code style', name: 'Prettier' },
		{ description: 'Library for building user interfaces', name: 'React' },
		{ description: 'Declarative routing for React applications', name: 'React Router Dom' },
		{ description: 'Utility-first CSS framework', name: 'Tailwind CSS' },
		{ description: 'JavaScript with static type definitions', name: 'TypeScript' },
		{ description: 'Fast build tool and development server', name: 'Vite' }
	];

	return (
		<div>
			<SectionTitle level='h2'>Project Technology Stack</SectionTitle>

			<p className='mb-4 text-gray-600'>Technologies and tools used in the development of this personal portfolio:</p>

			<div className='grid gap-4 md:grid-cols-2'>
				{projectTechnologies.map((tech, index) => (
					<div
						className='p-4 border rounded-lg bg-gray-50 cursor-pointer transition-transform duration-200 ease-out hover:shadow-lg'
						key={index}
						onMouseLeave={handleMouseLeave}
						onMouseMove={handleMouseMove}
					>
						<h4 className='font-semibold text-blue-600'>{tech.name}</h4>

						<p className='text-sm text-gray-600 mt-1'>{tech.description}</p>
					</div>
				))}
			</div>

			<div className='mt-6'>
				<SectionTitle level='h4'>Development Setup</SectionTitle>

				<p className='text-gray-600 mb-2'>This project uses modern web development tools and follows best practices:</p>

				<ul className='text-sm text-gray-600 space-y-1'>
					<li>
						• <strong>Build System:</strong> Vite for fast development and optimized production builds
					</li>

					<li>
						• <strong>Code Quality:</strong> ESLint + Prettier for consistent code formatting
					</li>

					<li>
						• <strong>Styling:</strong> Tailwind CSS with daisyUI for component-based styling
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
