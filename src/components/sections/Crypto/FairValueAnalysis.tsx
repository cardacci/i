import React, { useMemo, useState } from 'react';

import { SectionTitle, useApiRequest } from '@/utils';

interface CryptoMetric {
	circulatingSupply: number;
	currentMC: number;
	currentPrice: number;
	id: string;
	image: string; // Agregamos el campo image
	marketCapATH: number;
	name: string;
	priceATH: number;
	ticker: string;
}

// Full CoinGecko response interface (unfiltered).
interface CoinGeckoResponse {
	id: string;
	symbol: string;
	name: string;
	image: string;
	current_price: number;
	market_cap: number;
	market_cap_rank: number;
	fully_diluted_valuation: number | null;
	total_volume: number;
	high_24h: number;
	low_24h: number;
	price_change_24h: number;
	price_change_percentage_24h: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	circulating_supply: number;
	total_supply: number | null;
	max_supply: number | null;
	ath: number;
	ath_change_percentage: number;
	ath_date: string;
	atl: number;
	atl_change_percentage: number;
	atl_date: string;
	roi: {
		times: number;
		currency: string;
		percentage: number;
	} | null;
	last_updated: string;
	// Additional fields that can be included in the API.
	ath_market_cap?: number;
	price_change_percentage_1h_in_currency?: number;
	price_change_percentage_24h_in_currency?: number;
	price_change_percentage_7d_in_currency?: number;
	price_change_percentage_14d_in_currency?: number;
	price_change_percentage_30d_in_currency?: number;
	price_change_percentage_200d_in_currency?: number;
	price_change_percentage_1y_in_currency?: number;
}

const ORDER_ASC = 'asc';
const ORDER_DESC = 'desc';
type SortDirection = typeof ORDER_ASC | typeof ORDER_DESC;

// Field constants.
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
const CRYPTO_TICKERS = ['avalanche-2', 'bitcoin', 'chainlink', 'ethereum', 'solana'];

type SortField = keyof CryptoMetric | 'mcDelta' | 'priceDelta' | 'priceAdjustToMC' | 'potentialUpside';

const FairValueAnalysis: React.FC = () => {
	/* ===== Hooks ===== */
	const { data: rawCryptoData, error, isLoading, request } = useApiRequest<CoinGeckoResponse[]>();

	/* ===== State ===== */
	const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
	const [sortDirection, setSortDirection] = useState<SortDirection>(ORDER_DESC);
	const [sortField, setSortField] = useState<SortField>(FIELDS.CURRENT_MC);

	/* ===== Memos ===== */
	// Memoized crypto metrics parsed from raw data.
	const cryptoMetrics = useMemo(() => {
		if (!rawCryptoData) {
			return [];
		}

		return parseRawDataToCryptoMetrics(rawCryptoData);
	}, [rawCryptoData]);

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

	function calculateMCDelta(currentMC: number, athMC: number): number {
		if (athMC === 0) {
			return 0;
		}

		return ((currentMC - athMC) / athMC) * 100;
	}

	function calculatePotentialUpside(priceAdjustToMC: number, currentPrice: number): number {
		return ((priceAdjustToMC - currentPrice) / currentPrice) * 100;
	}

	function calculatePriceAdjustToMC(athMC: number, circulatingSupply: number): number {
		if (circulatingSupply === 0) {
			return 0;
		}

		return (athMC * 1000000) / circulatingSupply;
	}

	function calculatePriceDelta(currentPrice: number, athPrice: number): number {
		return ((currentPrice - athPrice) / athPrice) * 100;
	}

	/**
	 * Empty state component displayed when no cryptocurrency data is available.
	 * Prompts the user to fetch data from the API.
	 */
	function EmptyState() {
		return (
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
						Get started by fetching the latest cryptocurrency market data from API. We'll analyze market caps, prices, and potential upside for
						major cryptocurrencies.
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
	}

	async function fetchCryptoData() {
		const result = await request('coinGeckoMarkets', {
			ids: CRYPTO_TICKERS.join(','),
			order: 'market_cap_desc',
			page: 1,
			per_page: 20,
			price_change_percentage: '24h',
			sparkline: false,
			vs_currency: 'usd'
		});

		if (result) {
			setLastUpdated(new Date());
			console.log('Complete CoinGecko Response:', result);
		}
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

	function getSortIcon(field: SortField) {
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
	}

	function handleSort(field: SortField) {
		if (sortField === field) {
			setSortDirection(sortDirection === ORDER_ASC ? ORDER_DESC : ORDER_ASC);
		} else {
			setSortField(field);
			setSortDirection(ORDER_ASC);
		}
	}

	// Function for parsing raw data to our format.
	function parseRawDataToCryptoMetrics(rawData: CoinGeckoResponse[]): CryptoMetric[] {
		return rawData.map((coin) => ({
			circulatingSupply: Math.round(coin.circulating_supply),
			currentMC: Math.round(coin.market_cap / 1000000), // Convert to millions.
			currentPrice: coin.current_price,
			id: coin.id,
			image: coin.image, // Incluimos la imagen en el parsing
			marketCapATH: coin.ath_market_cap ? Math.round(coin.ath_market_cap / 1000000) : 0,
			name: coin.name,
			priceATH: coin.ath,
			ticker: coin.symbol.toUpperCase()
		}));
	}

	/**
	 * Sortable header component for table columns.
	 * It handles click events to sort the table by the specified field.
	 */
	function SortableHeader({ field, children }: { field: SortField; children: React.ReactNode }) {
		return (
			<th className='cursor-pointer font-semibold' onClick={() => handleSort(field)}>
				<div className='flex items-center gap-2 justify-center text-sm'>
					{children}

					{getSortIcon(field)}
				</div>
			</th>
		);
	}

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
									<th className='text-center text-sm font-semibold w-16'>
										<div className='flex items-center justify-center'>
											<svg className='w-4 h-4 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
												/>
											</svg>
										</div>
									</th>
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
								{sortedData.map((crypto, index) => (
									<tr
										className={`cursor-pointer h-16 transition-colors ${
											index % 2 === 0 ? 'bg-transparent hover:bg-primary/20' : 'bg-primary/5 hover:bg-primary/25'
										}`}
										key={crypto.ticker}
									>
										<td className='py-4 align-middle text-center w-16'>
											<div className='flex justify-center'>
												<img
													alt={`${crypto.name} logo`}
													className='w-10 h-10 rounded-full border-2 border-gray-100 shadow-sm'
													onError={(e) => {
														// Fallback en caso de que la imagen no cargue
														const target = e.target as HTMLImageElement;
														target.src =
															'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGM0Y0RjYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMlM2LjQ4IDIyIDEyIDIyUzIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTIgMlpNMTMgMTdIMTFWMTVIMTNWMTdaTTEzIDEzSDE1VjkiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cjwvc3ZnPgo=';
														target.className = 'w-10 h-10 rounded-full border-2 border-gray-200 opacity-50';
													}}
													src={crypto.image}
												/>
											</div>
										</td>
										<td className='py-4 align-middle'>
											<div>
												<div className='font-semibold text-base'>{crypto.name}</div>
												<div className='text-sm opacity-60 font-mono'>{crypto.ticker}</div>
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
					<li>• Data is fetched from an API and is for educational purposes only</li>
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
