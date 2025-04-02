import React from 'react';
import profileImage from '@/assets/images/profile.png';

const Home: React.FC = () => {
	return (
		<section id="home" className="py-10 max-w-5xl mx-auto">
			<div className="flex flex-col md:flex-row items-center gap-8">
				<div className="md:w-1/3 flex justify-center">
					<img
						alt="Gabriel Cardacci"
						className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
						src={profileImage}
					/>
				</div>

				<div className="md:w-2/3 text-center md:text-left">
					<h1 className="text-4xl font-bold mb-4 text-blue-800">
						Welcome to My Personal Website
					</h1>

					<p className="text-lg mb-4">
						Hello, I&apos;m <span className="font-semibold">Gabriel Cardacci</span>,
						passionate about technology, programming, DJing and traveling.
					</p>

					<p className="text-gray-700 mb-6">
						On this site, you&apos;ll find information about my professional experience,
						my projects in the cryptocurrency world, and my adventures around the globe.
					</p>

					<p className="text-gray-800 font-medium">Explore and connect with me!</p>

					<div className="mt-6 space-x-4">
						<a
							href="https://github.com/cardacci"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/cardacci"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
