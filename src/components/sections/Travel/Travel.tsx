import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { BaseView, TabView } from '@/components/common';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils';
import { ROUTE_KEYS, ROUTES, getTotalCountriesVisited, VISITED_PLACES } from '@/utils/constants';

import Map from './tabs/Map';
import Timeline from './tabs/Timeline';

const Travel: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const totalCountries = getTotalCountriesVisited();

	const tabContent = {
		[ROUTE_KEYS.TRAVEL.MAP]: <Map />,
		[ROUTE_KEYS.TRAVEL.TIMELINE]: <Timeline />
	};

	const tabs = createTabsFromRoutes(ROUTES.TRAVEL, tabContent);
	const defaultTab = getFirstChildRoute(ROUTES.TRAVEL);

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

					<Routes>
						<Route element={<Navigate replace to={defaultTab.id} />} path='/' />

						<Route element={<TabView baseUrl={ROUTES.TRAVEL.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId' />
					</Routes>
				</div>

				<div className='bg-blue-50 p-6 rounded-xl border border-blue-200'>
					<h3 className='text-xl font-semibold text-blue-800 mb-3'>Travel Philosophy</h3>

					<p className='text-blue-700 mb-3'>
						Travel is not just about visiting new places, it's about understanding different perspectives, challenging preconceptions, and growing
						as a person.
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
							Travel is the most enriching form of education
						</li>
					</ul>
				</div>
			</div>
		</BaseView>
	);
};

export default Travel;
