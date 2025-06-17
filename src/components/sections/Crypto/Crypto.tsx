import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import TabView from '@/components/common/TabView';
import { BaseView, ContentCard } from '@/utils';

import BitcoinInfo from './BitcoinInfo';
import FairValueAnalysis from './FairValueAnalysis';

const Crypto: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const tabs = [
		{
			content: <BitcoinInfo />,
			id: 'bitcoin',
			label: 'Bitcoin History'
		},
		{
			content: <FairValueAnalysis />,
			id: 'fair-value-analysis',
			label: 'Fair Value Analysis'
		}
	];

	return (
		<BaseView id='crypto' title='Cryptocurrency Insights'>
			<ContentCard>
				<p className='mb-6'>
					Welcome to the cryptocurrency section of my personal website. Here, you will find information and insights about various cryptocurrencies,
					market analysis, and fair value calculations.
				</p>

				<Routes>
					<Route element={<Navigate replace to='bitcoin' />} path='/' />

					<Route element={<TabView baseUrl='/crypto' defaultTab='bitcoin' tabs={tabs} />} path=':tabId' />
				</Routes>
			</ContentCard>
		</BaseView>
	);
};

export default Crypto;
