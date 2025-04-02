import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UnderConstruction from '../common/UnderConstruction';
import TabView from '../common/TabView';

// Tab content components
const DjInfo: React.FC = () => (
	<div className="bg-white p-6 rounded-lg shadow-md">
		<p className="mb-6">
			Welcome to my DJing section. Here, I share my passion for music,
			playlists, and events where I&apos;ve performed.
		</p>

		<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">My Style</h3>
		<p className="mb-4">
			My DJ sets blend electronic music with elements of house, techno, and
			ambient sounds. I focus on creating flowing experiences that take
			listeners on a journey.
		</p>

		<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Equipment</h3>
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
			Coming soon! I&apos;ll be sharing some of my favorite mixes and recording
			sessions.
		</p>
	</div>
);

const TrackClassifier: React.FC = () => (
	<div className="bg-white p-6 rounded-lg shadow-md">
		<h3 className="text-xl font-semibold mb-4 text-gray-800">
			Track Classifier Tool
		</h3>
		<p className="mb-6">
			Use this tool to organize and classify your music tracks based on genre,
			BPM, energy level, and more.
		</p>

		<div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
			<p className="text-blue-800">
				This tool is under development. Features will include:
			</p>
			<ul className="list-disc pl-5 mt-2 space-y-1 text-blue-700">
				<li>Track metadata extraction</li>
				<li>BPM detection</li>
				<li>Genre classification</li>
				<li>Energy level analysis</li>
				<li>Playlist organization</li>
			</ul>
		</div>

		{/* Placeholder form */}
		<form className="space-y-4">
			<div>
				<label
					htmlFor="trackName"
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					Track Name
				</label>
				<input
					type="text"
					id="trackName"
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="Enter track name"
				/>
			</div>

			<div>
				<label
					htmlFor="artist"
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					Artist
				</label>
				<input
					type="text"
					id="artist"
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="Enter artist name"
				/>
			</div>

			<div>
				<label
					htmlFor="genre"
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					Genre
				</label>
				<select
					id="genre"
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
				>
					<option value="">Select a genre</option>
					<option value="house">House</option>
					<option value="techno">Techno</option>
					<option value="ambient">Ambient</option>
					<option value="trance">Trance</option>
					<option value="drum-and-bass">Drum and Bass</option>
				</select>
			</div>

			<button
				type="submit"
				className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				Add Track
			</button>
		</form>
	</div>
);

const DJing: React.FC = () => {
	const tabs = [
		{
			id: 'info',
			label: 'DJ Info',
			content: <DjInfo />,
		},
		{
			id: 'classifier',
			label: 'Track Classifier',
			content: <TrackClassifier />,
		},
	];

	return (
		<section id="djing" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">DJing</h1>

			<UnderConstruction />

			<Routes>
				<Route path="/" element={<Navigate replace to="info" />} />
				<Route
					path=":tabId"
					element={<TabView tabs={tabs} baseUrl="/djing" defaultTab="info" />}
				/>
			</Routes>
		</section>
	);
};

export default DJing;
