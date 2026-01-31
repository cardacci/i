import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { BaseView, TabView } from '@/components/common';
import { ROUTE_KEYS, ROUTES, getTotalCountriesVisited, VISITED_PLACES } from '@/utils/constants';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils/helpers';

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
				<div className='bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100'>
					<h2 className='text-2xl font-bold text-slate-800 mb-4'>Places I've Visited</h2>

					<p className='text-slate-600 mb-8 text-lg leading-relaxed'>
						I've had the privilege of exploring <strong className='text-slate-800'>{totalCountries} unique countries</strong>{' '}
						and visiting <strong className='text-slate-800'>{VISITED_PLACES.length} amazing destinations</strong> across
						different continents. Each destination has left its mark on my perspective and enriched my understanding of diverse
						cultures.
					</p>

					<Routes>
						<Route element={<Navigate replace to={defaultTab.id} />} path='/' />

						<Route element={<TabView baseUrl={ROUTES.TRAVEL.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId' />
					</Routes>
				</div>

				<div className='bg-gradient-to-br from-blue-50 to-violet-50 p-6 md:p-8 rounded-2xl border border-blue-100/50'>
					<h3 className='text-xl font-semibold text-slate-800 mb-4'>Travel Philosophy</h3>

					<p className='text-slate-600 mb-4 leading-relaxed'>
						Travel is not just about visiting new places, it's about understanding different perspectives, challenging
						preconceptions, and growing as a person.
					</p>

					<ul className='space-y-3 text-slate-600'>
						<li className='flex items-start gap-3'>
							<span className='flex-shrink-0 w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center'>🌍</span>
							<span className='pt-1'>Every culture has something valuable to teach</span>
						</li>

						<li className='flex items-start gap-3'>
							<span className='flex-shrink-0 w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center'>🤝</span>
							<span className='pt-1'>Human connections transcend borders and languages</span>
						</li>

						<li className='flex items-start gap-3'>
							<span className='flex-shrink-0 w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center'>📚</span>
							<span className='pt-1'>Travel is the most enriching form of education</span>
						</li>
					</ul>
				</div>
			</div>
		</BaseView>
	);
};

export default Travel;
