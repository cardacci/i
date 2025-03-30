import React from 'react';

const Resume: React.FC = () => {
	return (
		<div className="resume">
			<h1>Curriculum Vitae</h1>
			<section>
				<h2>Personal Information</h2>
				<p>Name: [Your Name]</p>
				<p>Email: [Your Email]</p>
				<p>Phone: [Your Phone Number]</p>
				<p>Location: [Your Location]</p>
			</section>
			<section>
				<h2>Education</h2>
				<ul>
					<li>[Degree] in [Field] - [University], [Year]</li>
					<li>[Degree] in [Field] - [University], [Year]</li>
				</ul>
			</section>
			<section>
				<h2>Experience</h2>
				<ul>
					<li>[Job Title] at [Company] - [Year] to [Year]</li>
					<li>[Job Title] at [Company] - [Year] to [Year]</li>
				</ul>
			</section>
			<section>
				<h2>Skills</h2>
				<ul>
					<li>[Skill 1]</li>
					<li>[Skill 2]</li>
					<li>[Skill 3]</li>
				</ul>
			</section>
			<section>
				<h2>Certifications</h2>
				<ul>
					<li>[Certification Name] - [Year]</li>
					<li>[Certification Name] - [Year]</li>
				</ul>
			</section>
		</div>
	);
};

export default Resume;
