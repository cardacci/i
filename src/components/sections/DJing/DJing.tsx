import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DjInfo from './DjInfo';
import TrackClassifier from './TrackClassifier';

import BaseView from '@/components/common/BaseView';
import TabView from '@/components/common/TabView';
import UnderConstruction from '@/components/common/UnderConstruction';

const DJing: React.FC = () => {
	/* ===== Constants ===== */
	const tabs = [
		{
			content: <DjInfo />,
			id: 'info',
			label: 'DJ Info',
		},
		{
			content: <TrackClassifier />,
			id: 'classifier',
			label: 'Track Classifier',
		},
	];

	return (
		<BaseView id='djing' title='DJing'>
			<UnderConstruction />

			<Routes>
				<Route element={<Navigate replace to='info' />} path='/' />

				<Route
					element={<TabView baseUrl='/djing' defaultTab='info' tabs={tabs} />}
					path=':tabId'
				/>
			</Routes>
		</BaseView>
	);
};

export default DJing;
