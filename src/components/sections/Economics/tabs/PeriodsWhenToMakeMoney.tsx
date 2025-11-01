import React from 'react';

import periodsWhenToMakeMoney from '@/assets/images/economics/periods-when-to-make-money.jpg';
import { SectionTitle } from '@/utils';

const MarketTiming: React.FC = () => {
	return (
		<div>
			<SectionTitle level='h2'>Periods When to Make Money</SectionTitle>

			<div className='space-y-6'>
				<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
					<p className='text-gray-600 mb-4'>
						Understanding market timing is crucial for successful investing. Different economic phases present unique opportunities and risks.
					</p>

					<div className='flex justify-center'>
						<img alt='Market Timing Chart' className='max-w-full h-auto rounded-lg shadow-md' src={periodsWhenToMakeMoney} />
					</div>
				</div>

				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
					<div className='bg-green-50 p-4 rounded-lg border border-green-200'>
						<h3 className='text-lg font-semibold text-green-800 mb-2'>Bull Markets</h3>

						<p className='text-green-700 text-sm'>
							Strong upward trends where most investments perform well. Focus on growth stocks and leveraged positions.
						</p>
					</div>

					<div className='bg-yellow-50 p-4 rounded-lg border border-yellow-200'>
						<h3 className='text-lg font-semibold text-yellow-800 mb-2'>Sideways Markets</h3>

						<p className='text-yellow-700 text-sm'>
							Consolidation periods with limited directional movement. Consider income-generating investments and options strategies.
						</p>
					</div>

					<div className='bg-red-50 p-4 rounded-lg border border-red-200'>
						<h3 className='text-lg font-semibold text-red-800 mb-2'>Bear Markets</h3>

						<p className='text-red-700 text-sm'>
							Downward trends where capital preservation is key. Focus on defensive stocks and put options for protection.
						</p>
					</div>

					<div className='bg-blue-50 p-4 rounded-lg border border-blue-200'>
						<h3 className='text-lg font-semibold text-blue-800 mb-2'>Recovery Phases</h3>

						<p className='text-blue-700 text-sm'>
							Early stages of market rebounds. Look for undervalued assets and companies with strong fundamentals.
						</p>
					</div>

					<div className='bg-purple-50 p-4 rounded-lg border border-purple-200'>
						<h3 className='text-lg font-semibold text-purple-800 mb-2'>Inflationary Periods</h3>

						<p className='text-purple-700 text-sm'>
							Rising prices favor real assets like commodities, real estate, and inflation-protected securities.
						</p>
					</div>

					<div className='bg-indigo-50 p-4 rounded-lg border border-indigo-200'>
						<h3 className='text-lg font-semibold text-indigo-800 mb-2'>Deflationary Periods</h3>

						<p className='text-indigo-700 text-sm'>Falling prices favor cash, bonds, and companies with strong balance sheets and pricing power.</p>
					</div>
				</div>

				<div className='bg-gray-50 p-6 rounded-xl border border-gray-200'>
					<h3 className='text-xl font-semibold text-gray-800 mb-3'>Investment Strategies by Market Phase</h3>
					<div className='grid gap-4 md:grid-cols-2'>
						<div>
							<h4 className='font-semibold text-gray-700 mb-2'>📈 Bull Market Strategies</h4>

							<ul className='space-y-1 text-sm text-gray-600'>
								<li>• Growth stocks and ETFs</li>

								<li>• Leveraged investments</li>

								<li>• Momentum strategies</li>

								<li>• Sector rotation</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold text-gray-700 mb-2'>📉 Bear Market Strategies</h4>

							<ul className='space-y-1 text-sm text-gray-600'>
								<li>• Defensive stocks</li>

								<li>• Put options for protection</li>

								<li>• Cash and short-term bonds</li>

								<li>• Inverse ETFs</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='bg-blue-50 p-6 rounded-xl border border-blue-200'>
					<h3 className='text-xl font-semibold text-blue-800 mb-3'>Key Principles</h3>

					<ul className='space-y-2 text-blue-700'>
						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>💡</span>
							Time in the market beats timing the market for most investors
						</li>
						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>📊</span>
							Asset allocation is more important than market timing
						</li>
						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>🎯</span>
							Focus on risk management and position sizing
						</li>
						<li className='flex items-start'>
							<span className='text-blue-500 mr-2'>🔄</span>
							Rebalance regularly and avoid emotional decisions
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MarketTiming;
