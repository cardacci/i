import React from 'react';

import WorldMap from '@/components/common/WorldMap';
import { BaseView } from '@/utils';
import { VISITED_PLACES, getTotalCountriesVisited } from '@/utils/constants/travel';

const Travel: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const totalCountries = getTotalCountriesVisited();

	return (
		<BaseView id='travel' title='Travel Adventures'>
			<div className='space-y-6'>
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4'>Places I've Visited</h2>

					<p className='text-gray-600 mb-6'>
						I've had the privilege of exploring <strong>{totalCountries} unique countries</strong> and visiting{' '}
						<strong>{VISITED_PLACES.length} amazing destinations</strong> across different continents. Each destination has left its mark on my
						perspective and enriched my understanding of diverse cultures.
					</p>

					<div className='mb-4'>
						<WorldMap visitedCountries={VISITED_PLACES} />
					</div>

					<div className='text-sm text-gray-500'>
						<p>
							💡 <em>Click on the markers to learn more about each destination</em>
						</p>
					</div>
				</div>

				<div className='bg-blue-50 p-6 rounded-xl border border-blue-200'>
					<h3 className='text-xl font-semibold text-blue-800 mb-3'>Travel Philosophy</h3>

					<p className='text-blue-700 mb-3'>
						Travel is not just about visiting new places—it's about understanding different perspectives, challenging preconceptions, and growing as
						a person.
					</p>

					<ul className='space-y-2 text-blue-700'>
						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>🌍</span>
							Every culture has something valuable to teach
						</li>

						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>🤝</span>
							Human connections transcend borders and languages
						</li>

						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>📚</span>
							Travel is the best education money can buy
						</li>
					</ul>
				</div>
			</div>
		</BaseView>
	);
};

export default Travel;
