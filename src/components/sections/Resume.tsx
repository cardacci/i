import React from 'react';
import UnderConstruction from '../common/UnderConstruction';

const Resume: React.FC = () => {
	return (
		<section id="resume" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">CV</h1>

			<UnderConstruction />

			<div className="resume-content mt-8 bg-white p-6 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-4 text-gray-800">
					Personal Information
				</h3>
				<p className="mb-2">Name: Gabriel Cardacci</p>
				<p className="mb-2">Email: gabrielcardacci@gmail.com</p>
				<p className="mb-2">Phone: +549 2257 547467</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Education
				</h3>
				<ul className="list-disc pl-5 space-y-2">
					<li>[Degree] in [Field of Study], [University], [Year]</li>
					<li>[Additional Degrees or Certifications]</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Experience
				</h3>
				<ul className="list-disc pl-5 space-y-2">
					<li>[Job Title] at [Company] - [Year] to [Year]</li>
					<li>[Job Title] at [Company] - [Year] to [Year]</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Skills
				</h3>
				<ul className="list-disc pl-5 space-y-2">
					<li>[Skill 1]</li>
					<li>[Skill 2]</li>
					<li>[Skill 3]</li>
				</ul>
			</div>
		</section>
	);
};

export default Resume;
