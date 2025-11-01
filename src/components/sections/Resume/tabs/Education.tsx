import React, { Fragment } from 'react';

import { SectionTitle } from '@/utils';

/* ===== Types & Interfaces ===== */
interface Course {
	associatedWith: string;
	code?: string | null;
	title: string;
}

const Education: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const certifications: Certification[] = [
		{
			id: 'Credential ID dNbDi7',
			institution: 'EF SET',
			link: 'https://cert.efset.org/en/dNbDi7',
			month: 'Jan',
			name: 'EF SET English Certificate 60/100 (B2 Upper Intermediate)',
			year: 2025
		},
		{
			id: 'Credential ID 316ac7b4101a097cadadf52f2f136db4d739b15ec66ac7836e0d35af922b82d7',
			institution: 'LinkedIn',
			link: 'https://www.linkedin.com/learning/certificates/316ac7b4101a097cadadf52f2f136db4d739b15ec66ac7836e0d35af922b82d7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdexGuszmRhO4rsv57%2Bceqw%3D%3D',
			month: 'May',
			name: 'TypeScript Essential Training',
			year: 2024
		},
		{
			id: null,
			institution: 'Frontend Masters',
			link: 'https://frontendmasters.com/courses/complete-react-v9/',
			month: 'Jun',
			name: 'Complete Intro to React, v2 (feat. Router v4 and Redux)',
			year: 2017
		},
		{
			id: null,
			institution: 'Pluralsight',
			link: 'https://www.pluralsight.com/courses/angularjs-fundamentals',
			month: 'Aug',
			name: 'AngularJS Fundamentals',
			year: 2015
		},
		{
			id: null,
			institution: 'Pluralsight',
			link: 'https://www.pluralsight.com/courses/code-school-javascript-road-trip-part-2',
			month: 'Jan',
			name: 'JavaScript Road Trip Part 2',
			year: 2015
		},
		{
			id: null,
			institution: 'Pluralsight',
			link: 'https://www.pluralsight.com/courses/code-school-javascript-road-trip-part-1',
			month: 'Jan',
			name: 'JavaScript Road Trip Part 1',
			year: 2015
		}
	];
	const UNIVERSITY_FASTA_INFO = {
		faculty: 'Faculty of Engineering',
		link: 'https://www.linkedin.com/school/universidadfasta',
		name: 'Universidad FASTA'
	};
	const formalEducation = [
		{
			faculty: UNIVERSITY_FASTA_INFO.faculty,
			gpa: '7.06',
			institution: UNIVERSITY_FASTA_INFO.name,
			institutionLink: UNIVERSITY_FASTA_INFO.link,
			period: '2007-2014',
			title: 'Computer Science Engineer'
		},
		{
			faculty: UNIVERSITY_FASTA_INFO.faculty,
			gpa: null,
			institution: UNIVERSITY_FASTA_INFO.name,
			institutionLink: UNIVERSITY_FASTA_INFO.link,
			period: '2007-2013',
			title: 'System Analyst'
		},
		{
			faculty: UNIVERSITY_FASTA_INFO.faculty,
			gpa: null,
			institution: UNIVERSITY_FASTA_INFO.name,
			institutionLink: UNIVERSITY_FASTA_INFO.link,
			period: '2007-2012',
			title: 'IT Technician'
		}
	];

	const courses: Course[] = [
		{
			associatedWith: 'Quadion Technologies',
			code: null,
			title: 'Business English'
		},
		{
			associatedWith: 'intive',
			code: null,
			title: 'English: Level B1+'
		},
		{
			associatedWith: 'intive',
			code: null,
			title: 'English: Level B2-'
		},
		{
			associatedWith: 'Universidad FASTA',
			code: 'PC16',
			title: 'Graphic design tools'
		},
		{
			associatedWith: 'Universidad FASTA',
			code: null,
			title: 'Linux'
		},
		{
			associatedWith: 'Universidad FASTA',
			code: 'PC22',
			title: 'Math applications'
		},
		{
			associatedWith: 'Universidad FASTA',
			code: 'PC20',
			title: 'Networks and telematics'
		},
		{
			associatedWith: 'Universidad FASTA',
			code: 'PC17',
			title: 'Representation systems'
		},
		{
			associatedWith: 'Universidad FASTA',
			code: 'PC18',
			title: 'Web development'
		}
	];

	/* ===== Interfaces ===== */
	interface Certification {
		id?: string | null;
		institution: string;
		link?: string;
		month: string;
		name: string;
		year: number;
	}

	interface Education {
		faculty: string;
		gpa?: string | null;
		institution: string;
		institutionLink?: string;
		period: string;
		title: string;
	}

	/* ===== Functions ===== */
	function getEducationDetails(education: Education): React.ReactNode {
		let educationName;

		if (education.institutionLink) {
			educationName = (
				<a className='hover:underline text-blue-700' href={education.institutionLink} rel='noopener noreferrer' target='_blank'>
					{education.institution}
				</a>
			);
		} else {
			educationName = education.institution;
		}

		return (
			<Fragment>
				{educationName} - {education.faculty}
			</Fragment>
		);
	}

	return (
		<div>
			<SectionTitle level='h3'>Education</SectionTitle>

			<div className='space-y-6'>
				{/* Formal Education Card */}
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 overflow-auto'>
					<h4 className='text-xl text-gray-900 mb-4 flex items-center gap-2'>
						<div className='h-2 w-2 bg-blue-500 rounded-full'></div>
						Formal Education
					</h4>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
						{formalEducation.map((education, index) => (
							<div className='flex items-start gap-3 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500' key={index}>
								<div className='w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0'></div>

								<div className='flex-1'>
									<h5 className='text-lg font-medium text-gray-900 mb-1'>{education.title}</h5>

									<p className='text-sm text-gray-600 mb-2'>{getEducationDetails(education)}</p>

									<div className='flex items-center gap-4 text-sm'>
										<span className='inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full'>
											📅 {education.period}
										</span>
										{education.gpa && (
											<span className='inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full'>
												🎓 GPA: {education.gpa}
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
						Licenses & certifications
					</h4>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto'>
						{certifications.map((cert, index) => (
							<div className='flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200' key={cert.id || index}>
								<div className='w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0'></div>

								<div className='flex-1'>
									<p className='text-sm font-medium mb-1'>
										{cert.link ? (
											<a className='hover:underline text-blue-700' href={cert.link} rel='noopener noreferrer' target='_blank'>
												{cert.name}
											</a>
										) : (
											cert.name
										)}
									</p>

									<p className='text-xs text-gray-600 mb-1'>{cert.institution}</p>

									<p className='text-xs text-gray-500'>
										{cert.month} {cert.year} {cert.id ? <Fragment>&bull; {cert.id}</Fragment> : null}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Courses Card */}
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<h4 className='text-xl text-gray-900 mb-4 flex items-center gap-2'>
						<div className='h-2 w-2 bg-purple-500 rounded-full'></div>
						Courses
					</h4>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
						{courses.map((course, index) => (
							<div className='flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200' key={course.code || index}>
								<div className='w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0'></div>
								<div className='flex-1'>
									<p className='text-sm font-medium mb-1'>{course.title}</p>
									<p className='text-xs text-gray-600 mb-1'>{course.associatedWith}</p>
									{course.code && <p className='text-xs text-gray-500'>Code: {course.code}</p>}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Learning Philosophy Card */}
				<div className='bg-linear-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-200'>
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
