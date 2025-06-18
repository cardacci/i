import React from 'react';

import { useCardHover, SectionTitle } from '@/utils';

interface CryptoMetric {
	circulatingSupply: number;
	currentMC: number;
	currentPrice: number;
	marketCapATH: number;
	name: string;
	priceATH: number;
	symbol: string;
}

const FairValueAnalysis: React.FC = () => {
	/* ===== Hooks ===== */
	const { handleMouseMove, handleMouseLeave } = useCardHover(0.05);

	/* ===== Constants & Variables ===== */
	const cryptoMetrics: CryptoMetric[] = [
		{
			circulatingSupply: 19800000,
			currentMC: 1880000,
			currentPrice: 95000,
			marketCapATH: 1280000,
			name: 'Bitcoin',
			priceATH: 69000,
			symbol: 'BTC'
		},
		{
			circulatingSupply: 120280000,
			currentMC: 421000,
			currentPrice: 3500,
			marketCapATH: 569000,
			name: 'Ethereum',
			priceATH: 4878,
			symbol: 'ETH'
		},
		{
			circulatingSupply: 472200000,
			currentMC: 85000,
			currentPrice: 180,
			marketCapATH: 76000,
			name: 'Solana',
			priceATH: 260,
			symbol: 'SOL'
		},
		{
			circulatingSupply: 636850000,
			currentMC: 14000,
			currentPrice: 22,
			marketCapATH: 20000,
			name: 'Chainlink',
			priceATH: 52.7,
			symbol: 'LINK'
		},
		{
			circulatingSupply: 404690000,
			currentMC: 17000,
			currentPrice: 42,
			marketCapATH: 29000,
			name: 'Avalanche',
			priceATH: 146.22,
			symbol: 'AVAX'
		}
	];

	function calculateMCDelta(currentMC: number, athMC: number): number {
		return ((currentMC - athMC) / athMC) * 100;
	}

	function calculatePotentialUpside(priceAdjustToMC: number, currentPrice: number): number {
		return ((priceAdjustToMC - currentPrice) / currentPrice) * 100;
	}

	function calculatePriceAdjustToMC(athMC: number, circulatingSupply: number): number {
		return (athMC * 1000000) / circulatingSupply;
	}

	function calculatePriceDelta(currentPrice: number, athPrice: number): number {
		return ((currentPrice - athPrice) / athPrice) * 100;
	}

	function formatNumber(num: number): string {
		return new Intl.NumberFormat('en-US').format(num);
	}

	function formatPrice(price: number): string {
		return new Intl.NumberFormat('en-US', {
			currency: 'USD',
			style: 'currency'
		}).format(price);
	}

	function getPotentialColor(potential: number): string {
		if (potential > 20) {
			return 'text-green-600 bg-green-100';
		}

		if (potential > 0) {
			return 'text-yellow-600 bg-yellow-100';
		}

		return 'text-red-600 bg-red-100';
	}

	return (
		<div>
			<SectionTitle level='h3'>Cryptocurrency Market Analysis</SectionTitle>

			<p className='mb-6 text-gray-600'>
				This analysis compares current market conditions with all-time highs (ATH) and calculates potential upside based on market cap adjustments.
				These are educational estimates and should not be considered investment advice.
			</p>

			<div className='overflow-x-auto'>
				<table className='w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm text-sm'>
					<thead className='bg-blue-50'>
						<tr>
							<th className='border border-gray-300 px-3 py-2 text-left font-semibold text-gray-800'>Coin</th>
							<th className='border border-gray-300 px-3 py-2 text-right font-semibold text-gray-800'>Market cap ATH (Millions)</th>
							<th className='border border-gray-300 px-3 py-2 text-right font-semibold text-gray-800'>Current MC (Millions)</th>
							<th className='border border-gray-300 px-3 py-2 text-center font-semibold text-gray-800'>MC Delta</th>
							<th className='border border-gray-300 px-3 py-2 text-right font-semibold text-gray-800'>Price ATH (USDT)</th>
							<th className='border border-gray-300 px-3 py-2 text-right font-semibold text-gray-800'>Current price (USDT)</th>
							<th className='border border-gray-300 px-3 py-2 text-center font-semibold text-gray-800'>Price Delta</th>
							<th className='border border-gray-300 px-3 py-2 text-right font-semibold text-gray-800'>Price adjust to MC (USDT)</th>
							<th className='border border-gray-300 px-3 py-2 text-center font-semibold text-gray-800'>Potential upside</th>
							<th className='border border-gray-300 px-3 py-2 text-right font-semibold text-gray-800'>Circulating supply</th>
						</tr>
					</thead>
					<tbody>
						{cryptoMetrics.map((crypto) => {
							const mcDelta = calculateMCDelta(crypto.currentMC, crypto.marketCapATH);
							const priceDelta = calculatePriceDelta(crypto.currentPrice, crypto.priceATH);
							const priceAdjustToMC = calculatePriceAdjustToMC(crypto.marketCapATH, crypto.circulatingSupply);
							const potentialUpside = calculatePotentialUpside(priceAdjustToMC, crypto.currentPrice);

							return (
								<tr
									className='hover:bg-gray-50 cursor-pointer transition-transform duration-200 ease-out'
									key={crypto.symbol}
									onMouseLeave={handleMouseLeave}
									onMouseMove={handleMouseMove}
								>
									<td className='border border-gray-300 px-3 py-2'>
										<div>
											<div className='font-semibold text-gray-800'>{crypto.name}</div>
											<div className='text-xs text-gray-500'>{crypto.symbol}</div>
										</div>
									</td>
									<td className='border border-gray-300 px-3 py-2 text-right font-mono'>${formatNumber(crypto.marketCapATH)}M</td>
									<td className='border border-gray-300 px-3 py-2 text-right font-mono'>${formatNumber(crypto.currentMC)}M</td>
									<td className='border border-gray-300 px-3 py-2 text-center'>
										<span className={mcDelta >= 0 ? 'text-green-600' : 'text-red-600'}>
											{mcDelta >= 0 ? '+' : ''}
											{mcDelta.toFixed(1)}%
										</span>
									</td>
									<td className='border border-gray-300 px-3 py-2 text-right font-mono'>{formatPrice(crypto.priceATH)}</td>
									<td className='border border-gray-300 px-3 py-2 text-right font-mono font-semibold'>{formatPrice(crypto.currentPrice)}</td>
									<td className='border border-gray-300 px-3 py-2 text-center'>
										<span className={priceDelta >= 0 ? 'text-green-600' : 'text-red-600'}>
											{priceDelta >= 0 ? '+' : ''}
											{priceDelta.toFixed(1)}%
										</span>
									</td>
									<td className='border border-gray-300 px-3 py-2 text-right font-mono text-blue-600 font-semibold'>
										{formatPrice(priceAdjustToMC)}
									</td>
									<td className='border border-gray-300 px-3 py-2 text-center'>
										<span className={`px-2 py-1 rounded text-xs font-semibold ${getPotentialColor(potentialUpside)}`}>
											{potentialUpside >= 0 ? '+' : ''}
											{potentialUpside.toFixed(1)}%
										</span>
									</td>
									<td className='border border-gray-300 px-3 py-2 text-right font-mono text-gray-600'>
										{formatNumber(crypto.circulatingSupply)}
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
					<li>• MC Delta: Percentage change from ATH market cap to current market cap</li>
					<li>• Price Delta: Percentage change from ATH price to current price</li>
					<li>• Price adjust to MC: What the price would be if market cap returned to ATH levels</li>
					<li>• Potential upside: Percentage gain if price reaches the MC-adjusted target</li>
					<li>• Data is approximate and for educational purposes only</li>
				</ul>

				<p className='text-xs text-amber-800 font-medium'>
					Always conduct your own research and consult with financial advisors before making investment decisions.
				</p>
			</div>
		</div>
	);
};

export default FairValueAnalysis;
