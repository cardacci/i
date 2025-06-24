import React, { useMemo, useState } from 'react';

import { SectionTitle } from '@/utils';

interface CryptoMetric {
	circulatingSupply: number;
	currentMC: number;
	currentPrice: number;
	id: string;
	marketCapATH: number;
	name: string;
	priceATH: number;
	ticker: string;
}

interface CoinGeckoResponse {
	ath_market_cap: number;
	ath: number;
	circulating_supply: number;
	current_price: number;
	id: string;
	market_cap: number;
	name: string;
	symbol: string;
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

// Crypto tickers to fetch
const CRYPTO_TICKERS = ['bitcoin', 'ethereum', 'solana', 'chainlink', 'avalanche-2', 'cardano', 'polkadot', 'polygon'];

type SortField = keyof CryptoMetric | 'mcDelta' | 'priceDelta' | 'priceAdjustToMC' | 'potentialUpside';

const FairValueAnalysis: React.FC = () => {
	/* ===== State ===== */
	const [cryptoMetrics, setCryptoMetrics] = useState<CryptoMetric[]>([]);
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);
	const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
	const [sortDirection, setSortDirection] = useState<SortDirection>(ORDER_DESC);
	const [sortField, setSortField] = useState<SortField>(FIELDS.CURRENT_MC);

	const fetchCryptoData = async () => {
		setIsLoading(true);
		setError('');

		try {
			const response = await fetch(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_TICKERS.join(',')}&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h&market_cap_change_percentage=24h`
			);

			if (!response.ok) {
				throw new Error('Failed to fetch crypto data');
			}

			const data: CoinGeckoResponse[] = await response.json();
			const formattedData: CryptoMetric[] = data.map((coin) => ({
				circulatingSupply: Math.round(coin.circulating_supply),
				currentMC: Math.round(coin.market_cap / 1000000), // Convert to millions.
				currentPrice: coin.current_price,
				id: coin.id,
				marketCapATH: coin.ath_market_cap ? Math.round(coin.ath_market_cap / 1000000) : 0,
				name: coin.name,
				priceATH: coin.ath,
				ticker: coin.symbol.toUpperCase()
			}));

			setCryptoMetrics(formattedData);
			setLastUpdated(new Date());
		} catch (err) {
			setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
		} finally {
			setIsLoading(false);
		}
	};

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
		if (cryptoMetrics.length === 0) return [];

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

	// Empty State Component
	const EmptyState = () => (
		<div className='flex flex-col items-center justify-center py-16 px-8'>
			<div className='text-center max-w-md'>
				<div className='mb-6'>
					<svg className='w-16 h-16 mx-auto text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path
							d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
						/>
					</svg>
				</div>
				<h3 className='text-xl font-semibold text-gray-900 mb-2'>No Cryptocurrency Data</h3>
				<p className='text-gray-600 mb-6'>
					Get started by fetching the latest cryptocurrency market data from CoinGecko API. We'll analyze market caps, prices, and potential upside
					for major cryptocurrencies.
				</p>
				<button className='btn btn-primary' disabled={isLoading} onClick={fetchCryptoData}>
					{isLoading ? (
						<>
							<span className='loading loading-spinner loading-sm'></span>
							Fetching Data...
						</>
					) : (
						<>
							<svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path
									d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
								/>
							</svg>
							Fetch Crypto Data
						</>
					)}
				</button>
			</div>
		</div>
	);

	return (
		<div>
			<SectionTitle level='h3'>Cryptocurrency Market Analysis</SectionTitle>

			<p className='mb-6 text-gray-600'>
				This analysis compares current market conditions with all-time highs (ATH) and calculates potential upside based on market cap adjustments.
				These are educational estimates and should not be considered investment advice.
			</p>

			{error && (
				<div className='alert alert-error mb-6'>
					<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} />
					</svg>
					<span>{error}</span>
				</div>
			)}

			{cryptoMetrics.length === 0 && !isLoading ? (
				<EmptyState />
			) : (
				<>
					<div className='flex justify-between items-center mb-4'>
						<div className='text-sm text-gray-500'>{lastUpdated && <span>Last updated: {lastUpdated.toLocaleString()}</span>}</div>
						<button className='btn btn-secondary btn-sm' disabled={isLoading} onClick={fetchCryptoData}>
							{isLoading ? (
								<>
									<span className='loading loading-spinner loading-xs'></span>
									<span className='loading loading-infinity loading-xl'></span>
									Updating...
								</>
							) : (
								<>
									<svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path
											d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
										/>
									</svg>
									Refresh Data
								</>
							)}
						</button>
					</div>

					<div className='overflow-x-auto'>
						<table className='table table-zebra'>
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

										<td className='text-right font-mono py-4 align-middle'>${formatNumber(crypto.marketCapATH)}</td>

										<td className='text-right font-mono py-4 align-middle'>${formatNumber(crypto.currentMC)}</td>

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

										<td className='text-right font-mono text-primary font-semibold py-4 align-middle'>
											{formatPrice(crypto.priceAdjustToMC)}
										</td>

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
				</>
			)}

			<div className='mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
				<SectionTitle level='h4'>Methodology & Disclaimer</SectionTitle>

				<ul className='text-sm text-gray-700 space-y-1 mb-4'>
					<li>• MC Delta: Percentage change from ATH market cap to current market cap</li>
					<li>• Price Delta: Percentage change from ATH price to current price</li>
					<li>• Price adjust to MC: What the price would be if market cap returned to ATH levels</li>
					<li>• Potential upside: Percentage gain if price reaches the MC-adjusted target</li>
					<li>• Data is fetched from CoinGecko API and is for educational purposes only</li>
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
