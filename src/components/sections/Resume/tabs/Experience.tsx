import React from 'react';

import { SectionTitle } from '@/utils';

const Experience: React.FC = () => {
	return (
		<div>
			<SectionTitle level='h3'>Professional Experience</SectionTitle>

			<div className='space-y-8'>
				{/* Current Position */}
				<div className='border-l-4 border-blue-500 pl-6'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
						<h4 className='text-xl font-bold text-gray-900'>Principal Frontend Engineer & Engineering Lead</h4>
						<span className='text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full'>2023 - Present</span>
					</div>
					<p className='text-lg font-medium text-gray-700 mb-3'>Klio</p>
					<ul className='text-gray-600 space-y-2'>
						<li>• Leading frontend architecture and development for enterprise-level React applications</li>
						<li>• Mentoring and managing a team of 5+ frontend developers</li>
						<li>• Implementing AI-augmented development practices to improve team productivity by 40%</li>
						<li>• Driving technical decisions for React ecosystem adoption and modern tooling</li>
						<li>• Collaborating with product and design teams to deliver high-quality user experiences</li>
						<li>• Establishing code review processes and frontend development best practices</li>
						<li>• Leading migration from legacy systems to modern React-based architecture</li>
					</ul>
				</div>

				{/* Previous Position */}
				<div className='border-l-4 border-gray-400 pl-6'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
						<h4 className='text-xl font-bold text-gray-900'>Senior Frontend Developer</h4>
						<span className='text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full'>2021 - 2023</span>
					</div>
					<p className='text-lg font-medium text-gray-700 mb-3'>Previous Company</p>
					<ul className='text-gray-600 space-y-2'>
						<li>• Developed and maintained large-scale React applications with TypeScript</li>
						<li>• Improved application performance by 60% through code optimization and lazy loading</li>
						<li>• Implemented responsive designs using Tailwind CSS and modern CSS techniques</li>
						<li>• Collaborated with backend teams to design and consume RESTful APIs</li>
						<li>• Mentored junior developers and conducted technical interviews</li>
						<li>• Participated in architecture decisions and technology stack evaluations</li>
					</ul>
				</div>

				{/* Early Career */}
				<div className='border-l-4 border-gray-300 pl-6'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
						<h4 className='text-xl font-bold text-gray-900'>Frontend Developer</h4>
						<span className='text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full'>2019 - 2021</span>
					</div>
					<p className='text-lg font-medium text-gray-700 mb-3'>Startup</p>
					<ul className='text-gray-600 space-y-2'>
						<li>• Built responsive web applications from scratch using React and modern JavaScript</li>
						<li>• Worked in an agile environment with rapid iteration and deployment cycles</li>
						<li>• Integrated third-party APIs and services for enhanced functionality</li>
						<li>• Participated in product planning and user experience design discussions</li>
						<li>• Gained experience with full development lifecycle in a startup environment</li>
					</ul>
				</div>

				{/* Key Achievements */}
				<div className='bg-green-50 p-6 rounded-lg'>
					<h4 className='text-lg font-semibold text-green-800 mb-3'>Key Achievements</h4>
					<ul className='text-green-700 space-y-2'>
						<li>• Successfully led 3 major frontend architecture migrations</li>
						<li>• Improved team productivity by 40% through AI-augmented development practices</li>
						<li>• Reduced application bundle size by 50% through optimization techniques</li>
						<li>• Mentored 10+ junior developers throughout career progression</li>
						<li>• Contributed to open source React ecosystem projects</li>
						<li>• Established frontend development standards adopted company-wide</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Experience;
