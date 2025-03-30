import React from 'react';

const Travel: React.FC = () => {
	return (
		<div>
			<h1>Travel Experiences</h1>
			<p>
				Welcome to my travel section! Here, I share my adventures and experiences from
				various places I've visited.
			</p>
			<h2>Recent Trips</h2>
			<ul>
				<li>Trip to Japan - Exploring Tokyo and Kyoto</li>
				<li>Backpacking in Europe - A journey through multiple countries</li>
				<li>Beach Vacation in Bali - Relaxing by the ocean</li>
			</ul>
			<h2>Travel Tips</h2>
			<p>Here are some tips for fellow travelers:</p>
			<ul>
				<li>Always carry a portable charger.</li>
				<li>Learn a few basic phrases in the local language.</li>
				<li>Keep your important documents safe and backed up.</li>
			</ul>
		</div>
	);
};

export default Travel;
