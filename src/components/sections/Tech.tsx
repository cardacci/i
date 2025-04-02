import React from 'react';
import UnderConstruction from '../common/UnderConstruction';

const Tech: React.FC = () => {
	return (
		<section id="tech" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">Technology</h1>

			<UnderConstruction />

			<div className="bg-white p-6 rounded-lg shadow-md">
				<p className="mb-6">
					This section is dedicated to exploring my interests in technology and software development. I&apos;ll share insights about programming
					languages, frameworks, and interesting projects I&apos;ve worked on.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Technologies I Work With</h3>
				<ul className="list-disc pl-5 space-y-2">
					<li>JavaScript/TypeScript</li>
					<li>React & React Native</li>
					<li>Node.js</li>
					<li>HTML/CSS</li>
					<li>Tailwind CSS</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Current Interests</h3>
				<p className="mb-4">
					I&apos;m currently exploring modern web development techniques, performance optimizations, and building accessible user interfaces.
				</p>
			</div>
		</section>
	);
};

export default Tech;
