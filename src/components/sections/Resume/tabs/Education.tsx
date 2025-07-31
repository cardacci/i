import React from 'react';

import { ListWithTitle, SectionTitle } from '@/utils';

const Education: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const formalEducation = [
		'Computer Engineering - Universidad Nacional de La Plata (UNLP) - 2015-2020',
		"Bachelor's Degree in Computer Science with focus on Software Engineering and Systems Architecture"
	];

	const certifications = [
		'Full Stack Web Development - FreeCodeCamp - 2018',
		'Advanced React & JavaScript - Multiple Online Courses - 2019-2024',
		'Modern Frontend Architecture - Udemy - 2020',
		'TypeScript Advanced Patterns - Frontend Masters - 2021',
		'React Performance Optimization - Egghead.io - 2022',
		'Leadership in Tech - Coursera - 2023'
	];

	const onlineLearning = [
		'Frontend Masters - Continuous learning platform for advanced frontend topics',
		'Egghead.io - React ecosystem and modern JavaScript practices',
		'Udemy - Various web development and software architecture courses',
		'YouTube & Tech Blogs - Staying updated with latest industry trends',
		'Conference Talks - Regular attendance at React and JavaScript conferences'
	];

	const relevantCoursework = [
		'Data Structures and Algorithms',
		'Software Engineering Principles',
		'Database Design and Management',
		'Computer Networks and Distributed Systems',
		'Object-Oriented Programming',
		'Web Development Technologies',
		'System Design and Architecture'
	];

	return (
		<div>
			<SectionTitle level='h3'>Education</SectionTitle>

			<div className='space-y-8'>
				<div>
					<h4 className='text-lg font-semibold text-gray-800 mb-4'>Formal Education</h4>
					<ListWithTitle items={formalEducation} title='' />
				</div>

				<div>
					<h4 className='text-lg font-semibold text-gray-800 mb-4'>Certifications & Professional Development</h4>
					<ListWithTitle items={certifications} title='' />
				</div>

				<div>
					<h4 className='text-lg font-semibold text-gray-800 mb-4'>Continuous Learning</h4>
					<ListWithTitle items={onlineLearning} title='' />
				</div>

				<div>
					<h4 className='text-lg font-semibold text-gray-800 mb-4'>Relevant Coursework</h4>
					<ListWithTitle items={relevantCoursework} title='' />
				</div>

				<div className='bg-blue-50 p-6 rounded-lg'>
					<h4 className='text-lg font-semibold text-blue-800 mb-3'>Learning Philosophy</h4>
					<p className='text-blue-700'>
						I believe in continuous learning and staying updated with the rapidly evolving tech landscape. My education combines formal computer
						science foundations with practical, hands-on experience gained through real-world projects and continuous professional development.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
