import { Routes, Route, Navigate } from 'react-router-dom';

import { BaseView, ContentCard, TabView } from '@/components/common';
import { ROUTES, ROUTE_KEYS } from '@/utils/constants/routes';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils/helpers';

import BitcoinInfo from './tabs/BitcoinInfo';
import FairValueAnalysis from './tabs/FairValueAnalysis';

const Crypto = () => {
	/* ===== Constants & Variables ===== */
	const tabContent = {
		[ROUTE_KEYS.CRYPTO.BITCOIN]: <BitcoinInfo />,
		[ROUTE_KEYS.CRYPTO.FAIR_VALUE_ANALYSIS]: <FairValueAnalysis />
	};
	const defaultTab = getFirstChildRoute(ROUTES.CRYPTO);
	const tabs = createTabsFromRoutes(ROUTES.CRYPTO, tabContent);

	return (
		<BaseView id='crypto' title='Cryptocurrency Insights'>
			<ContentCard>
				<p className='mb-8 text-slate-700 text-lg leading-relaxed'>
					Welcome to the cryptocurrency section of my personal website. Here, you will find information and insights about various
					cryptocurrencies, market analysis, and fair value calculations.
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
