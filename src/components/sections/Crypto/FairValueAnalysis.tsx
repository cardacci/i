import React, { useMemo, useState } from 'react';

import { SectionTitle } from '@/utils';

interface CryptoMetric {
	circulatingSupply: number;
	currentMC: number;
	currentPrice: number;
	marketCapATH: number;
	name: string;
	priceATH: number;
	ticker: string;
}

const ORDER_ASC = 'asc';
const ORDER_DESC = 'desc';
type SortDirection = typeof ORDER_ASC | typeof ORDER_DESC;

// Field constants
const FIELDS = {
	CIRCULATING_SUPPLY: 'circulatingSupply',
	CURRENT_MC: 'currentMC',
	CURRENT_PRICE: 'currentPrice',
	MARKET_CAP_ATH: 'marketCapATH',
	MC_DELTA: 'mcDelta',
	NAME: 'name',
	POTENTIAL_UPSIDE: 'potentialUpside',
	PRICE_ADJUST_TO_MC: 'priceAdjustToMC',
	PRICE_ATH: 'priceATH',
	PRICE_DELTA: 'priceDelta'
} as const;

type SortField = keyof CryptoMetric | 'mcDelta' | 'priceDelta' | 'priceAdjustToMC' | 'potentialUpside';

const FairValueAnalysis: React.FC = () => {
	/* ===== State ===== */
	const [sortField, setSortField] = useState<SortField>(FIELDS.CURRENT_MC);
	const [sortDirection, setSortDirection] = useState<SortDirection>(ORDER_DESC);

	/* ===== Constants & Variables ===== */
	const cryptoMetrics: CryptoMetric[] = [
		{
			circulatingSupply: 19800000,
			currentMC: 1880000,
			currentPrice: 95000,
			marketCapATH: 1280000,
			name: 'Bitcoin',
			priceATH: 69000,
			ticker: 'BTC'
		},
		{
			circulatingSupply: 120280000,
			currentMC: 421000,
			currentPrice: 3500,
			marketCapATH: 569000,
			name: 'Ethereum',
			priceATH: 4878,
			ticker: 'ETH'
		},
		{
			circulatingSupply: 472200000,
			currentMC: 85000,
			currentPrice: 180,
			marketCapATH: 76000,
			name: 'Solana',
			priceATH: 260,
			ticker: 'SOL'
		},
		{
			circulatingSupply: 636850000,
			currentMC: 14000,
			currentPrice: 22,
			marketCapATH: 20000,
			name: 'Chainlink',
			priceATH: 52.7,
			ticker: 'LINK'
		},
		{
			circulatingSupply: 404690000,
			currentMC: 17000,
			currentPrice: 42,
			marketCapATH: 29000,
			name: 'Avalanche',
			priceATH: 146.22,
			ticker: 'AVAX'
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

	const handleSort = (field: SortField) => {
		if (sortField === field) {
			setSortDirection(sortDirection === ORDER_ASC ? ORDER_DESC : ORDER_ASC);
		} else {
			setSortField(field);
			setSortDirection(ORDER_ASC);
		}
	};

	const getSortIcon = (field: SortField) => {
		if (sortField !== field) {
			return (
				<svg className='w-4 h-4 opacity-50' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} />
				</svg>
			);
		}

		if (sortDirection === ORDER_ASC) {
			return (
				<svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path d='M5 15l7-7 7 7' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} />
				</svg>
			);
		}

		return (
			<svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
				<path d='M19 9l-7 7-7-7' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} />
			</svg>
		);
	};

	const sortedData = useMemo(() => {
		const dataWithCalculations = cryptoMetrics.map((crypto) => {
			const mcDelta = calculateMCDelta(crypto.currentMC, crypto.marketCapATH);
			const priceDelta = calculatePriceDelta(crypto.currentPrice, crypto.priceATH);
			const priceAdjustToMC = calculatePriceAdjustToMC(crypto.marketCapATH, crypto.circulatingSupply);
			const potentialUpside = calculatePotentialUpside(priceAdjustToMC, crypto.currentPrice);

			return {
				...crypto,
				mcDelta,
				potentialUpside,
				priceAdjustToMC,
				priceDelta
			};
		});

		return dataWithCalculations.sort((a, b) => {
			let aValue, bValue;

			switch (sortField) {
				case FIELDS.NAME:
					aValue = a.name;
					bValue = b.name;
					break;
				case FIELDS.MARKET_CAP_ATH:
					aValue = a.marketCapATH;
					bValue = b.marketCapATH;
					break;
				case FIELDS.CURRENT_MC:
					aValue = a.currentMC;
					bValue = b.currentMC;
					break;
				case FIELDS.MC_DELTA:
					aValue = a.mcDelta;
					bValue = b.mcDelta;
					break;
				case FIELDS.PRICE_ATH:
					aValue = a.priceATH;
					bValue = b.priceATH;
					break;
				case FIELDS.CURRENT_PRICE:
					aValue = a.currentPrice;
					bValue = b.currentPrice;
					break;
				case FIELDS.PRICE_DELTA:
					aValue = a.priceDelta;
					bValue = b.priceDelta;
					break;
				case FIELDS.PRICE_ADJUST_TO_MC:
					aValue = a.priceAdjustToMC;
					bValue = b.priceAdjustToMC;
					break;
				case FIELDS.POTENTIAL_UPSIDE:
					aValue = a.potentialUpside;
					bValue = b.potentialUpside;
					break;
				case FIELDS.CIRCULATING_SUPPLY:
					aValue = a.circulatingSupply;
					bValue = b.circulatingSupply;
					break;
				default:
					aValue = a.name;
					bValue = b.name;
			}

			if (typeof aValue === 'string' && typeof bValue === 'string') {
				return sortDirection === ORDER_ASC ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
			}

			if (typeof aValue === 'number' && typeof bValue === 'number') {
				return sortDirection === ORDER_ASC ? aValue - bValue : bValue - aValue;
			}

			return 0;
		});
	}, [cryptoMetrics, sortField, sortDirection]);

	const SortableHeader = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
		<th className='cursor-pointer font-semibold' onClick={() => handleSort(field)}>
			<div className='flex items-center gap-2 justify-center text-sm'>
				{children}

				{getSortIcon(field)}
			</div>
		</th>
	);

	return (
		<div>
			<SectionTitle level='h3'>Cryptocurrency Market Analysis</SectionTitle>

			<p className='mb-6 text-gray-600'>
				This analysis compares current market conditions with all-time highs (ATH) and calculates potential upside based on market cap adjustments.
				These are educational estimates and should not be considered investment advice.
			</p>

			<div className='overflow-x-auto'>
				<table>
					<thead className='bg-blue-50'>
						<tr className='h-16'>
							<SortableHeader field={FIELDS.NAME}>Coin</SortableHeader>
							<SortableHeader field={FIELDS.MARKET_CAP_ATH}>Market cap ATH (Millions)</SortableHeader>
							<SortableHeader field={FIELDS.CURRENT_MC}>Current MC (Millions)</SortableHeader>
							<SortableHeader field={FIELDS.MC_DELTA}>MC Delta</SortableHeader>
							<SortableHeader field={FIELDS.PRICE_ATH}>Price ATH (USDT)</SortableHeader>
							<SortableHeader field={FIELDS.CURRENT_PRICE}>Current price (USDT)</SortableHeader>
							<SortableHeader field={FIELDS.PRICE_DELTA}>Price Delta</SortableHeader>
							<SortableHeader field={FIELDS.PRICE_ADJUST_TO_MC}>Price adjust to MC (USDT)</SortableHeader>
							<SortableHeader field={FIELDS.POTENTIAL_UPSIDE}>Potential upside</SortableHeader>
							<SortableHeader field={FIELDS.CIRCULATING_SUPPLY}>Circulating supply</SortableHeader>
						</tr>
					</thead>

					<tbody>
						{sortedData.map((crypto) => (
							<tr className='h-16' key={crypto.ticker}>
								<td className='py-4 align-middle'>
									<div>
										<div className='font-semibold text-gray-800'>{crypto.name}</div>
										<div className='text-xs text-gray-500'>{crypto.ticker}</div>
									</div>
								</td>

								<td className='text-right font-mono py-4 align-middle'>${formatNumber(crypto.marketCapATH)}M</td>

								<td className='text-right font-mono py-4 align-middle'>${formatNumber(crypto.currentMC)}M</td>

								<td className='text-center py-4 align-middle'>
									<span className={crypto.mcDelta >= 0 ? 'text-green-600' : 'text-red-600'}>
										{crypto.mcDelta >= 0 ? '+' : ''}
										{crypto.mcDelta.toFixed(1)}%
									</span>
								</td>

								<td className='text-right font-mono py-4 align-middle'>{formatPrice(crypto.priceATH)}</td>

								<td className='text-right font-mono font-semibold py-4 align-middle'>{formatPrice(crypto.currentPrice)}</td>

								<td className='text-center py-4 align-middle'>
									<span className={crypto.priceDelta >= 0 ? 'text-green-600' : 'text-red-600'}>
										{crypto.priceDelta >= 0 ? '+' : ''}
										{crypto.priceDelta.toFixed(1)}%
									</span>
								</td>

								<td className='text-right font-mono text-primary font-semibold py-4 align-middle'>{formatPrice(crypto.priceAdjustToMC)}</td>

								<td className='text-center py-4 align-middle'>
									<span className={`badge badge-lg ${getPotentialColor(crypto.potentialUpside)}`}>
										{crypto.potentialUpside >= 0 ? '+' : ''}
										{crypto.potentialUpside.toFixed(1)}%
									</span>
								</td>

								<td className='text-right font-mono opacity-70 py-4 align-middle'>{formatNumber(crypto.circulatingSupply)}</td>
							</tr>
						))}
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
					<li>• Click on column headers to sort the table</li>
				</ul>

				<p className='text-xs text-amber-800 font-medium'>
					Always conduct your own research and consult with financial advisors before making investment decisions.
				</p>
			</div>
		</div>
	);
};

export default FairValueAnalysis;
