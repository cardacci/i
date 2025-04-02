import React from 'react';
import UnderConstruction from '../common/UnderConstruction';

const Travel: React.FC = () => {
	return (
		<section id="travel" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">
				Travel Adventures
			</h1>

			<UnderConstruction />

			<div className="bg-white p-6 rounded-lg shadow-md">
				<p className="mb-6">
					Welcome to my travel section. Here, I share experiences, photos, and
					stories from my adventures around the world.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Favorite Destinations
				</h3>
				<ul className="list-disc pl-5 space-y-2">
					<li>Barcelona, Spain</li>
					<li>Tokyo, Japan</li>
					<li>New York City, USA</li>
					<li>Bali, Indonesia</li>
					<li>Patagonia, Argentina</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Travel Philosophy
				</h3>
				<p className="mb-4">
					I believe that travel broadens the mind and enriches the soul. I try
					to immerse myself in local cultures, explore off-the-beaten-path
					destinations, and connect with people from different backgrounds.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Photo Gallery
				</h3>
				<p className="mb-4">
					Coming soon! I&apos;ll be sharing photo galleries from my travels.
				</p>
			</div>
		</section>
	);
};

export default Travel;
