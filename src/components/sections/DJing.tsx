import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UnderConstruction from '../common/UnderConstruction';
import TabView from '../common/TabView';
import DjInfo from './DJing/DjInfo';
import TrackClassifier from './DJing/TrackClassifier';

const DJing: React.FC = () => {
	const tabs = [
		{
			id: 'info',
			label: 'DJ Info',
			content: <DjInfo />,
		},
		{
			id: 'classifier',
			label: 'Track Classifier',
			content: <TrackClassifier />,
		},
	];

	return (
		<section id="djing" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">DJing</h1>

			<UnderConstruction />

			<Routes>
				<Route path="/" element={<Navigate replace to="info" />} />
				<Route path=":tabId" element={<TabView tabs={tabs} baseUrl="/djing" defaultTab="info" />} />
			</Routes>
		</section>
	);
};

export default DJing;
