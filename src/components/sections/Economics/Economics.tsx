import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { BaseView, TabView } from '@/components/common';
import { ROUTES, ROUTE_KEYS } from '@/utils/constants/routes';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils/helpers';

import PeriodsWhenToMakeMoney from './tabs/PeriodsWhenToMakeMoney';
import RealEstateCycle from './tabs/RealEstateCycle';

const Economics: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const tabContent = {
		[ROUTE_KEYS.ECONOMICS.PERIODS_WHEN_TO_MAKE_MONEY]: <PeriodsWhenToMakeMoney />,
		[ROUTE_KEYS.ECONOMICS.REAL_ESTATE_CYCLE]: <RealEstateCycle />
	};

	const defaultTab = getFirstChildRoute(ROUTES.ECONOMICS);
	const tabs = createTabsFromRoutes(ROUTES.ECONOMICS, tabContent);

	return (
		<BaseView id='economics' title='Economics & Market Analysis'>
			<Routes>
				<Route element={<TabView baseUrl={ROUTES.ECONOMICS.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId/*' />
			</Routes>
		</BaseView>
	);
};

export default Economics;
