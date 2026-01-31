import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { BaseView, ContentCard, TabView } from '@/components/common';
import { ROUTES, ROUTE_KEYS } from '@/utils/constants';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils/helpers';

import ProjectTech from './tabs/ProjectTech';

const Tech: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const tabContent = {
		[ROUTE_KEYS.TECH.PROJECT]: <ProjectTech />
	};
	const defaultTab = getFirstChildRoute(ROUTES.TECH);
	const tabs = createTabsFromRoutes(ROUTES.TECH, tabContent);

	return (
		<BaseView id='tech' title='Technology'>
			<ContentCard>
				<p className='mb-8 text-slate-700 text-lg leading-relaxed'>
					This section is dedicated to exploring my interests in technology and software development. I'll share insights about
					programming languages, frameworks, and interesting projects I've worked on.
				</p>

				<Routes>
					<Route element={<Navigate replace to={defaultTab.id} />} path='/' />
					<Route element={<TabView baseUrl={ROUTES.TECH.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId' />
				</Routes>
			</ContentCard>
		</BaseView>
	);
};

export default Tech;
