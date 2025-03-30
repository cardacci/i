import React from 'react';

const Tech: React.FC = () => {
	return (
		<section>
			<h2>Technology and Programming</h2>
			<p>
				Here you'll find information about the latest trends in technology, programming languages,
				tools, and useful resources for developers.
			</p>
			<h3>Current Trends</h3>
			<ul>
				<li>
					Web application development with modern frameworks like React, Vue, and
					Angular.
				</li>
				<li>Artificial Intelligence and Machine Learning.</li>
				<li>
					Mobile application development with technologies like React Native and Flutter.
				</li>
				<li>Blockchain and its impact across various industries.</li>
			</ul>
			<h3>Recommended Resources</h3>
			<p>Explore the following resources to improve your skills:</p>
			<ul>
				<li>
					<a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
				</li>
				<li>
					<a href="https://www.codecademy.com/">Codecademy</a>
				</li>
				<li>
					<a href="https://www.udemy.com/">Udemy</a>
				</li>
				<li>
					<a href="https://www.coursera.org/">Coursera</a>
				</li>
			</ul>
		</section>
	);
};

export default Tech;
