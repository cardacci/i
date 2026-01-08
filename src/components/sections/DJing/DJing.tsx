import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { BaseView, ContentCard, TabView } from '@/components';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils';
import { ROUTES, ROUTE_KEYS } from '@/utils/constants/routes';

import FollowMyDjContent from './common/FollowMyDjContent';
import DjInfo from './tabs/DjInfo';
import Sets from './tabs/Sets';
import TrackClassifier from './tabs/TrackClassifier';

const DJing: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const tabContent = {
		[ROUTE_KEYS.DJING.INFO]: <DjInfo />,
		[ROUTE_KEYS.DJING.SETS]: <Sets />,
		[ROUTE_KEYS.DJING.CLASSIFIER]: <TrackClassifier />
	};

	const tabs = createTabsFromRoutes(ROUTES.DJING, tabContent);
	const defaultTab = getFirstChildRoute(ROUTES.DJING);

	return (
		<BaseView id='djing' title='DJing'>
			<ContentCard>
				<Routes>
					<Route element={<Navigate replace to={defaultTab.id} />} path='/' />
					<Route element={<TabView baseUrl={ROUTES.DJING.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId' />
				</Routes>

				<FollowMyDjContent />
			</ContentCard>
		</BaseView>
	);
};

export default DJing;
