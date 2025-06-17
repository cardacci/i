import React from 'react';

import { useCardHover, SectionTitle } from '@/utils';

interface CryptoMetric {
	currentPrice: number;
	fairValue: number;
	marketCap: string;
	name: string;
	symbol: string;
}

const FairValueAnalysis: React.FC = () => {
	/* ===== Hooks ===== */
	const { handleMouseMove, handleMouseLeave } = useCardHover(0.05);

	/* ===== Constants & Variables ===== */
	const cryptoMetrics: CryptoMetric[] = [
		{
			currentPrice: 95000,
			fairValue: 120000,
			marketCap: '$1.88T',
			name: 'Bitcoin',
			symbol: 'BTC'
		},
		{
			currentPrice: 3500,
			fairValue: 4200,
			marketCap: '$421B',
			name: 'Ethereum',
			symbol: 'ETH'
		},
		{
			currentPrice: 180,
			fairValue: 250,
			marketCap: '$85B',
			name: 'Solana',
			symbol: 'SOL'
		},
		{
			currentPrice: 22,
			fairValue: 35,
			marketCap: '$14B',
			name: 'Chainlink',
			symbol: 'LINK'
		},
		{
			currentPrice: 42,
			fairValue: 55,
			marketCap: '$17B',
			name: 'Avalanche',
			symbol: 'AVAX'
		}
	];

	const calculatePotential = (current: number, fair: number): number => {
		return ((fair - current) / current) * 100;
	};

	const formatPrice = (price: number): string => {
		return new Intl.NumberFormat('en-US', {
			currency: 'USD',
			style: 'currency'
		}).format(price);
	};

	const getPotentialColor = (potential: number): string => {
		if (potential > 20) {
			return 'text-green-600 bg-green-100';
		}

		if (potential > 0) {
			return 'text-yellow-600 bg-yellow-100';
		}

		return 'text-red-600 bg-red-100';
	};

	return (
		<div>
			<SectionTitle level='h3'>Cryptocurrency Fair Value Analysis</SectionTitle>

			<p className='mb-6 text-gray-600'>
				This analysis attempts to estimate fair values for major cryptocurrencies based on various fundamental metrics including network activity,
				adoption rates, and utility value. These are educational estimates and should not be considered investment advice.
			</p>

			<div className='overflow-x-auto'>
				<table className='w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm'>
					<thead className='bg-blue-50'>
						<tr>
							<th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800'>Cryptocurrency</th>
							<th className='border border-gray-300 px-4 py-3 text-right font-semibold text-gray-800'>Current Price</th>
							<th className='border border-gray-300 px-4 py-3 text-right font-semibold text-gray-800'>Fair Value</th>
							<th className='border border-gray-300 px-4 py-3 text-right font-semibold text-gray-800'>Market Cap</th>
							<th className='border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800'>Potential</th>
						</tr>
					</thead>
					<tbody>
						{cryptoMetrics.map((crypto) => {
							const potential = calculatePotential(crypto.currentPrice, crypto.fairValue);
							return (
								<tr
									className='hover:bg-gray-50 cursor-pointer transition-transform duration-200 ease-out'
									key={crypto.symbol}
									onMouseLeave={handleMouseLeave}
									onMouseMove={handleMouseMove}
								>
									<td className='border border-gray-300 px-4 py-3'>
										<div>
											<div className='font-semibold text-gray-800'>{crypto.name}</div>
											<div className='text-sm text-gray-500'>{crypto.symbol}</div>
										</div>
									</td>
									<td className='border border-gray-300 px-4 py-3 text-right font-mono'>{formatPrice(crypto.currentPrice)}</td>
									<td className='border border-gray-300 px-4 py-3 text-right font-mono font-semibold text-blue-600'>
										{formatPrice(crypto.fairValue)}
									</td>
									<td className='border border-gray-300 px-4 py-3 text-right text-gray-600'>{crypto.marketCap}</td>
									<td className='border border-gray-300 px-4 py-3 text-center'>
										<span className={`px-2 py-1 rounded text-xs font-semibold ${getPotentialColor(potential)}`}>
											{potential > 0 ? '+' : ''}
											{potential.toFixed(1)}%
										</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className='mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
				<SectionTitle level='h4'>Methodology & Disclaimer</SectionTitle>

				<ul className='text-sm text-gray-700 space-y-1 mb-4'>
					<li>• Fair values are estimated using network value metrics, adoption curves, and utility analysis</li>
					<li>• Current prices are approximate and for educational purposes only</li>
					<li>• Cryptocurrency markets are highly volatile and unpredictable</li>
					<li>• This analysis should not be considered financial or investment advice</li>
				</ul>

				<p className='text-xs text-amber-800 font-medium'>
					Always conduct your own research and consult with financial advisors before making investment decisions.
				</p>
			</div>
		</div>
	);
};

export default FairValueAnalysis;
