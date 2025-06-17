import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import TabView from '@/components/common/TabView';
import { BaseView, ContentCard, createTabsFromRoutes, getFirstChildRoute } from '@/utils';
import { ROUTES } from '@/utils/constants/routes';

import BitcoinInfo from './BitcoinInfo';
import FairValueAnalysis from './FairValueAnalysis';

const Crypto: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const tabContent = {
		BITCOIN: <BitcoinInfo />,
		FAIR_VALUE_ANALYSIS: <FairValueAnalysis />
	};
	const defaultTab = getFirstChildRoute(ROUTES.CRYPTO);
	const tabs = createTabsFromRoutes(ROUTES.CRYPTO, tabContent);

	return (
		<BaseView id='crypto' title='Cryptocurrency Insights'>
			<ContentCard>
				<p className='mb-6'>
					Welcome to the cryptocurrency section of my personal website. Here, you will find information and insights about various cryptocurrencies,
					market analysis, and fair value calculations.
				</p>

				<Routes>
					<Route element={<Navigate replace to={defaultTab.id} />} path='/' />

					<Route element={<TabView baseUrl={ROUTES.CRYPTO.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId' />
				</Routes>
			</ContentCard>
		</BaseView>
	);
};

export default Crypto;
