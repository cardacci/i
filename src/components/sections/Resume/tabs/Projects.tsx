import React from 'react';

import { SectionTitle } from '@/utils';

const Projects: React.FC = () => {
	return (
		<div>
			<SectionTitle level='h3'>Projects</SectionTitle>

			<div className='space-y-8'>
				{/* Featured Project */}
				<div className='border-l-4 border-blue-500 pl-6 bg-blue-50 p-6 rounded-r-lg'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
						<h4 className='text-xl font-bold text-blue-900'>Personal Portfolio Website</h4>
						<span className='text-sm font-medium text-blue-600 bg-blue-200 px-3 py-1 rounded-full'>Featured</span>
					</div>
					<p className='text-blue-800 mb-4'>
						<strong>Tech Stack:</strong> React + TypeScript + Vite + Tailwind CSS
					</p>
					<p className='text-blue-700 mb-4'>
						A modern, responsive portfolio showcasing my professional journey, technical skills, and personal projects. Features include dynamic
						routing, interactive tabs, responsive design, and optimized performance.
					</p>
					<ul className='text-blue-700 space-y-1 mb-4'>
						<li>• Built with React 18 and TypeScript for type safety</li>
						<li>• Vite for lightning-fast development and build process</li>
						<li>• Tailwind CSS for utility-first styling approach</li>
						<li>• Responsive design optimized for all device sizes</li>
						<li>• Dynamic routing with React Router</li>
						<li>• Component-based architecture for maintainability</li>
					</ul>
					<div className='flex flex-wrap gap-2'>
						<span className='bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm'>React</span>
						<span className='bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm'>TypeScript</span>
						<span className='bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm'>Vite</span>
						<span className='bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm'>Tailwind CSS</span>
					</div>
				</div>

				{/* Professional Project */}
				<div className='border-l-4 border-green-500 pl-6'>
					<h4 className='text-xl font-bold text-gray-900 mb-2'>Klio Platform - Frontend Architecture</h4>
					<p className='mb-4'>
						<strong>Role:</strong> Principal Frontend Engineer & Engineering Lead
					</p>
					<p className='text-gray-600 mb-4'>
						Leading the frontend development of an enterprise-level React application serving thousands of users. Responsible for architecture
						decisions, team leadership, and implementation of modern development practices.
					</p>
					<ul className='text-gray-600 space-y-1 mb-4'>
						<li>• Architected scalable React application with micro-frontend approach</li>
						<li>• Implemented AI-augmented development workflows improving team productivity</li>
						<li>• Led migration from legacy systems to modern React-based architecture</li>
						<li>• Established code review processes and development best practices</li>
						<li>• Mentored team of 5+ frontend developers</li>
						<li>• Integrated advanced state management and data fetching patterns</li>
					</ul>
					<div className='flex flex-wrap gap-2'>
						<span className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>React</span>
						<span className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>TypeScript</span>
						<span className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>Next.js</span>
						<span className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>Enterprise Architecture</span>
					</div>
				</div>

				{/* Open Source Contributions */}
				<div className='border-l-4 border-purple-500 pl-6'>
					<h4 className='text-xl font-bold text-gray-900 mb-2'>Open Source Contributions</h4>
					<p className='text-gray-600 mb-4'>
						Active contributor to the React ecosystem and various open source projects, focusing on improving developer experience and creating
						useful tools for the community.
					</p>
					<ul className='text-gray-600 space-y-1 mb-4'>
						<li>• Contributed to React ecosystem libraries and tools</li>
						<li>• Shared custom hooks and utility functions with the community</li>
						<li>• Participated in code reviews and issue discussions</li>
						<li>• Created developer tools for improved productivity</li>
						<li>• Documented best practices and learning resources</li>
					</ul>
					<div className='flex flex-wrap gap-2'>
						<span className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm'>Open Source</span>
						<span className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm'>Community</span>
						<span className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm'>React Ecosystem</span>
					</div>
				</div>

				{/* Side Projects */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='bg-gray-50 p-4 rounded-lg border'>
						<h5 className='font-semibold text-gray-900 mb-2'>AI Development Tools</h5>
						<p className='text-gray-600 text-sm mb-3'>
							Custom tools and workflows for AI-augmented development, including prompt templates and automation scripts.
						</p>
						<div className='flex flex-wrap gap-1'>
							<span className='bg-gray-200 px-2 py-1 rounded text-xs'>AI Tools</span>
							<span className='bg-gray-200 px-2 py-1 rounded text-xs'>Automation</span>
						</div>
					</div>

					<div className='bg-gray-50 p-4 rounded-lg border'>
						<h5 className='font-semibold text-gray-900 mb-2'>React Component Library</h5>
						<p className='text-gray-600 text-sm mb-3'>
							Reusable component library with TypeScript support, comprehensive documentation, and testing suite.
						</p>
						<div className='flex flex-wrap gap-1'>
							<span className='bg-gray-200 px-2 py-1 rounded text-xs'>React</span>
							<span className='bg-gray-200 px-2 py-1 rounded text-xs'>TypeScript</span>
							<span className='bg-gray-200 px-2 py-1 rounded text-xs'>Storybook</span>
						</div>
					</div>
				</div>

				{/* Project Philosophy */}
				<div className='bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-lg border'>
					<h4 className='text-lg font-semibold text-gray-800 mb-3'>Project Development Philosophy</h4>
					<p className='mb-4'>My approach to project development emphasizes clean architecture, user-centered design, and continuous improvement:</p>
					<ul className='space-y-2'>
						<li>
							• <strong>Quality First:</strong> Prioritizing code quality, testing, and maintainability
						</li>
						<li>
							• <strong>User Experience:</strong> Focusing on performance, accessibility, and intuitive design
						</li>
						<li>
							• <strong>Modern Practices:</strong> Utilizing latest tools and methodologies for optimal results
						</li>
						<li>
							• <strong>Collaboration:</strong> Working effectively with cross-functional teams
						</li>
						<li>
							• <strong>Innovation:</strong> Exploring new technologies and creative solutions
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Projects;
