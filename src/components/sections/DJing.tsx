import React from 'react';
import UnderConstruction from '../common/UnderConstruction';

const DJing: React.FC = () => {
	return (
		<section id="djing" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">DJing</h1>

			<UnderConstruction />

			<div className="bg-white p-6 rounded-lg shadow-md">
				<p className="mb-6">
					Welcome to my DJing section. Here, I share my passion for music,
					playlists, and events where Isrc/components/sections/Home.tsxve
					performed.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					My Style
				</h3>
				<p className="mb-4">
					My DJ sets blend electronic music with elements of house, techno, and
					ambient sounds. I focus on creating flowing experiences that take
					listeners on a journey.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Equipment
				</h3>
				<ul className="list-disc pl-5 space-y-2">
					<li>Pioneer DJ controllers</li>
					<li>Serato DJ software</li>
					<li>Custom audio interfaces</li>
					<li>High-quality monitoring headphones</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Featured Mixes
				</h3>
				<p className="mb-4">
					Coming soon! Isrc/components/sections/Home.tsxll be sharing some of my
					favorite mixes and recording sessions.
				</p>
			</div>
		</section>
	);
};

export default DJing;
