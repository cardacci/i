import { SectionTitle } from '@/components/common';
import { useCardHover } from '@/utils/hooks';

const ProjectTech = () => {
	/* ===== Hooks ===== */
	const { handleMouseMove, handleMouseLeave } = useCardHover(0.08);

	/* ===== Constants & Variables ===== */
	const projectTechnologies = [
		{ description: 'Automated CI/CD pipeline for continuous deployment', name: 'GitHub Actions' },
		{ description: 'Programming language for web development', name: 'JavaScript' },
		{ description: 'JavaScript with static type definitions for type-safe development', name: 'TypeScript' },
		{ description: 'Library for building user interfaces with components', name: 'React' },
		{ description: 'Declarative routing for React applications', name: 'React Router Dom' },
		{ description: 'Utility-first CSS framework for rapid UI development', name: 'Tailwind CSS' },
		{ description: 'Tailwind CSS component library for enhanced UI components', name: 'daisyUI' },
		{ description: 'Fast build tool and development server with HMR', name: 'Vite' },
		{ description: 'Code linting utility for maintaining code quality', name: 'ESLint' },
		{ description: 'Code formatter for consistent code style', name: 'Prettier' },
		{ description: 'Tool for transforming CSS with JavaScript plugins', name: 'PostCSS' },
		{ description: 'Version control system for tracking changes', name: 'Git' },
		{ description: 'Static site hosting platform for deployment', name: 'GitHub Pages' }
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
						• <strong>Language:</strong> TypeScript 5.8 with JavaScript for type-safe development
					</li>

					<li>
						• <strong>Framework:</strong> React 19 with React Router for component-based architecture
					</li>

					<li>
						• <strong>Build System:</strong> Vite 6 for fast development and optimized production builds
					</li>

					<li>
						• <strong>Code Quality:</strong> ESLint 9 + Prettier for linting and consistent code formatting
					</li>

					<li>
						• <strong>Styling:</strong> Tailwind CSS v4 with daisyUI for component-based styling
					</li>

					<li>
						• <strong>CI/CD:</strong> GitHub Actions for automated continuous deployment
					</li>

					<li>
						• <strong>Deployment:</strong> GitHub Pages with automated build and deployment pipeline
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectTech;
