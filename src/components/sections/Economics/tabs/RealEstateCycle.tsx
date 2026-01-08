import React from 'react';

import realStateCycle from '@/assets/images/economics/18-year-real-estate-cycle.png';
import { ImageWithModal, SectionTitle } from '@/components';

const RealEstateCycle: React.FC = () => {
	return (
		<div>
			<SectionTitle level='h2'>18 Year Real Estate Cycle</SectionTitle>

			<div className='space-y-6'>
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<p className='text-gray-600 mb-4'>
						The 18-year real estate cycle represents a fundamental pattern in property markets that influences investment timing and market
						behavior.
					</p>

					<ImageWithModal alt='18 Year Real Estate Cycle Chart' src={realStateCycle} title='18 Year Real Estate Cycle' />
				</div>

				<div className='grid gap-4 md:grid-cols-2'>
					<div className='bg-red-50 p-4 rounded-lg border border-red-200'>
						<h3 className='text-lg font-semibold text-red-800 mb-2'>Recession Phase</h3>

						<p className='text-red-700 text-sm'>
							Property values decline, foreclosures increase, and market confidence is low. This is typically the worst time to buy.
						</p>
					</div>

					<div className='bg-yellow-50 p-4 rounded-lg border border-yellow-200'>
						<h3 className='text-lg font-semibold text-yellow-800 mb-2'>Recovery Phase</h3>

						<p className='text-yellow-700 text-sm'>
							The market begins to stabilize, prices start to recover slowly, and investor confidence gradually returns.
						</p>
					</div>

					<div className='bg-green-50 p-4 rounded-lg border border-green-200'>
						<h3 className='text-lg font-semibold text-green-800 mb-2'>Expansion Phase</h3>

						<p className='text-green-700 text-sm'>
							Strong economic growth drives property values up significantly. This is often the best time for sellers.
						</p>
					</div>

					<div className='bg-blue-50 p-4 rounded-lg border border-blue-200'>
						<h3 className='text-lg font-semibold text-blue-800 mb-2'>Hyper Supply Phase</h3>

						<p className='text-blue-700 text-sm'>
							Overbuilding leads to excess inventory, slowing price growth and creating buying opportunities for patient investors.
						</p>
					</div>
				</div>

				<div className='bg-gray-50 p-6 rounded-xl border border-gray-200'>
					<h3 className='text-xl font-semibold text-gray-800 mb-3'>Key Insights</h3>

					<ul className='space-y-2 text-gray-700'>
						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>•</span>
							The cycle typically lasts 18 years from trough to trough
						</li>

						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>•</span>
							Understanding these phases helps investors time their market entry and exit
						</li>

						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>•</span>
							Real estate cycles are influenced by broader economic conditions and interest rates
						</li>

						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>•</span>
							Local market conditions can cause variations in cycle timing
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RealEstateCycle;
