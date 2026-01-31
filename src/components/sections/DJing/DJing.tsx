import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { BaseView, TabView } from '@/components/common';
import { ROUTES, ROUTE_KEYS } from '@/utils/constants/routes';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils/helpers';

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
			{/* DJ-themed container with dark gradient and music-inspired design */}
			<div className='relative overflow-hidden rounded-2xl'>
				{/* Animated gradient background */}
				<div className='absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] opacity-95' />

				{/* Decorative elements - sound wave effect */}
				<div className='absolute inset-0 overflow-hidden pointer-events-none'>
					{/* Animated gradient orbs */}
					<div className='absolute top-10 left-10 w-64 h-64 bg-[#A3FFD6]/10 rounded-full blur-3xl animate-pulse' />
					<div
						className='absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse'
						style={{ animationDelay: '1s' }}
					/>
					<div
						className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse'
						style={{ animationDelay: '2s' }}
					/>

					{/* Sound bars decoration - left side */}
					<div className='absolute left-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-20'>
						{[...Array(5)].map((_, i) => (
							<div
								className='w-1 bg-gradient-to-t from-[#A3FFD6] to-transparent rounded-full animate-soundbar'
								key={i}
								style={{
									animationDelay: `${i * 0.15}s`,
									height: `${30 + Math.random() * 40}px`
								}}
							/>
						))}
					</div>

					{/* Sound bars decoration - right side */}
					<div className='absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-20'>
						{[...Array(5)].map((_, i) => (
							<div
								className='w-1 bg-gradient-to-t from-[#A3FFD6] to-transparent rounded-full animate-soundbar'
								key={i}
								style={{
									animationDelay: `${i * 0.15 + 0.5}s`,
									height: `${30 + Math.random() * 40}px`
								}}
							/>
						))}
					</div>
				</div>

				{/* Content */}
				<div className='relative z-10 p-6 md:p-8'>
					{/* Custom tabs for DJ section */}
					<div className='mb-8'>
						<Routes>
							<Route element={<Navigate replace to={defaultTab.id} />} path='/' />
							<Route
								element={
									<div className='dj-tabs'>
										<TabView baseUrl={ROUTES.DJING.path} defaultTab={defaultTab.id} tabs={tabs} />
									</div>
								}
								path=':tabId'
							/>
						</Routes>
					</div>

					<FollowMyDjContent />
				</div>
			</div>
		</BaseView>
	);
};

export default DJing;
