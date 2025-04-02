import React from 'react';

const DjInfo: React.FC = () => (
	<div className="bg-white p-6 rounded-lg shadow-md">
		<p className="mb-6">Welcome to my DJing section. Here, I share my passion for music, playlists, and events where I&apos;ve performed.</p>

		<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">My Style</h3>
		<p className="mb-4">
			My DJ sets blend electronic music with elements of house, techno, and ambient sounds. I focus on creating flowing experiences that take listeners on
			a journey.
		</p>

		<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Equipment</h3>
		<ul className="list-disc pl-5 space-y-2">
			<li>Pioneer DJ controllers</li>
			<li>Serato DJ software</li>
			<li>Custom audio interfaces</li>
			<li>High-quality monitoring headphones</li>
		</ul>

		<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Featured Mixes</h3>
		<p className="mb-4">Coming soon! I&apos;ll be sharing some of my favorite mixes and recording sessions.</p>
	</div>
);

export default DjInfo;
