import React from 'react';

const Resume: React.FC = () => {
	return (
		<section id="resume">
			<h2>CV</h2>

			<div className="resume-content">
				<h3>Personal Information</h3>

				<p>Name: Gabriel Cardacci</p>

				<p>Email: gabrielcardacci@gmail.com</p>

				<p>Phone: +549 2257 547467</p>

				<h3>Education</h3>

				<ul>
					<li>[Degree] in [Field of Study], [University], [Year]</li>

					<li>[Additional Degrees or Certifications]</li>
				</ul>

				<h3>Experience</h3>

				<ul>
					<li>[Job Title] at [Company] - [Year] to [Year]</li>

					<li>[Job Title] at [Company] - [Year] to [Year]</li>
				</ul>

				<h3>Skills</h3>

				<ul>
					<li>[Skill 1]</li>

					<li>[Skill 2]</li>

					<li>[Skill 3]</li>
				</ul>

				<h3>Projects</h3>

				<ul>
					<li>[Project Name] - [Description]</li>

					<li>[Project Name] - [Description]</li>
				</ul>
			</div>
		</section>
	);
};

export default Resume;
