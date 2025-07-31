import React from 'react';

import { SectionTitle } from '@/utils';

const Education: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const certifications = [
		'Full Stack Web Development - FreeCodeCamp - 2018',
		'Advanced React & JavaScript - Multiple Online Courses - 2019-2024',
		'Modern Frontend Architecture - Udemy - 2020',
		'TypeScript Advanced Patterns - Frontend Masters - 2021',
		'React Performance Optimization - Egghead.io - 2022',
		'Leadership in Tech - Coursera - 2023'
	];

	const formalEducation = [
		{
			faculty: 'Faculty of Engineering',
			grade: '7.06',
			institution: 'Universidad FASTA',
			period: '2007-2014',
			title: 'Computer Science Engineer'
		},
		{
			faculty: 'Faculty of Engineering',
			grade: null,
			institution: 'Universidad FASTA',
			period: '2007-2013',
			title: 'System Analyst'
		},
		{
			faculty: 'Faculty of Engineering',
			grade: null,
			institution: 'Universidad FASTA',
			period: '2007-2012',
			title: 'IT Technician'
		}
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

			<div className='space-y-6'>
				{/* Formal Education Card */}
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<h4 className='text-xl text-gray-900 mb-4 flex items-center gap-2'>
						<div className='h-2 w-2 bg-blue-500 rounded-full'></div>
						Formal Education
					</h4>
					<div className='space-y-4'>
						{formalEducation.map((education, index) => (
							<div className='flex items-start gap-3 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500' key={index}>
								<div className='w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0'></div>
								<div className='flex-1'>
									<h5 className='text-lg font-medium text-gray-900 mb-1'>{education.title}</h5>
									<p className='text-sm text-gray-600 mb-2'>
										{education.institution} - {education.faculty}
									</p>
									<div className='flex items-center gap-4 text-sm'>
										<span className='inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full'>
											📅 {education.period}
										</span>
										{education.grade && (
											<span className='inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full'>
												🎓 Grade: {education.grade}
											</span>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Certifications Card */}
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<h4 className='text-xl text-gray-900 mb-4 flex items-center gap-2'>
						<div className='h-2 w-2 bg-green-500 rounded-full'></div>
						Certifications & Professional Development
					</h4>
					<div className='grid md:grid-cols-2 gap-3'>
						{certifications.map((cert, index) => (
							<div className='flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200' key={index}>
								<div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
								<p className='text-sm text-gray-700'>{cert}</p>
							</div>
						))}
					</div>
				</div>

				{/* Continuous Learning Card */}
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<h4 className='text-xl text-gray-900 mb-4 flex items-center gap-2'>
						<div className='h-2 w-2 bg-purple-500 rounded-full'></div>
						Continuous Learning
					</h4>
					<div className='space-y-3'>
						{onlineLearning.map((learning, index) => (
							<div className='flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200' key={index}>
								<div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
								<p className='text-sm text-gray-700'>{learning}</p>
							</div>
						))}
					</div>
				</div>

				{/* Relevant Coursework Card */}
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<h4 className='text-xl text-gray-900 mb-4 flex items-center gap-2'>
						<div className='h-2 w-2 bg-orange-500 rounded-full'></div>
						Relevant Coursework
					</h4>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
						{relevantCoursework.map((course, index) => (
							<div className='flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200' key={index}>
								<div className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0'></div>
								<p className='text-sm text-gray-700'>{course}</p>
							</div>
						))}
					</div>
				</div>

				{/* Learning Philosophy Card */}
				<div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-200'>
					<h4 className='text-xl text-blue-900 mb-4 flex items-center gap-2'>
						<div className='h-2 w-2 bg-blue-600 rounded-full'></div>
						Learning Philosophy
					</h4>
					<p className='text-blue-800 leading-relaxed'>
						I believe in continuous learning and staying updated with the rapidly evolving tech landscape. My education combines formal computer
						science foundations with practical, hands-on experience gained through real-world projects and continuous professional development.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
