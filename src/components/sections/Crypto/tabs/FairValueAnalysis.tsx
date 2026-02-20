import { ReactNode, useMemo, useState } from 'react';

import { SectionTitle } from '@/components/common';
import { useApiRequest } from '@/utils/hooks';

/* ===== Types & Interfaces ===== */
interface CryptoMetric {
	category: string;
	circulatingPercentage: string; // Percentage or "∞".
	circulatingSupply: number;
	currentMC: number;
	currentPrice: number;
	id: string;
	image: string; // We add the image field.
	marketCapATH: number;
	name: string;
	priceATH: number;
	ticker: string;
}

// Full CoinGecko response interface (unfiltered).
interface CoinGeckoResponse {
	ath_change_percentage: number;
	ath_date: string;
	ath: number;
	atl_change_percentage: number;
	atl_date: string;
	atl: number;
	circulating_supply: number;
	current_price: number;
	fully_diluted_valuation: number | null;
	high_24h: number;
	id: string;
	image: string;
	last_updated: string;
	low_24h: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	market_cap_rank: number;
	market_cap: number;
	max_supply: number | null;
	name: string;
	price_change_24h: number;
	price_change_percentage_24h_in_currency?: number;
	price_change_percentage_24h: number;
	roi: {
		currency: string;
		percentage: number;
		times: number;
	} | null;
	symbol: string;
	total_supply: number | null;
	total_volume: number;
}

// Enum for cryptocurrency categories.
enum CryptoCategory {
	AI = 'AI',
	CEFI = 'CeFi',
	DEFI = 'DeFi',
	DESCI = 'DeSci',
	GAMING = 'Gaming',
	INFRASTRUCTURE = 'Infrastructure',
	INTEROPERABILITY = 'Interoperability',
	LAYER_1 = 'Layer 1',
	MEMECOIN = 'Memecoin',
	RWA = 'RWA',
	STORE_OF_VALUE = 'Store of Value'
}

const ORDER_ASC = 'asc';
const ORDER_DESC = 'desc';
type SortDirection = typeof ORDER_ASC | typeof ORDER_DESC;

// Field constants.
const FIELDS = {
	CATEGORY: 'category',
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

// Crypto tickers to fetch.
const CRYPTO_TICKERS = [
	'aerodrome-finance',
	'ankr',
	'avalanche-2',
	'based-brett',
	'billy',
	'binancecoin',
	'bio-protocol',
	'bitcoin',
	'chainlink',
	'clearpool',
	'coq-inu',
	'ethena',
	'ethereum',
	'goldfinch',
	'io',
	'joe',
	'maga',
	'near',
	'nexo',
	'paal-ai',
	'pancakeswap-token',
	'pepe',
	'popcat',
	'raydium',
	'ref-finance',
	'render-token',
	'ronin',
	'sidus',
	'solana',
	'sudeng',
	'sushi',
	'ton-fish-memecoin',
	'uniswap',
	'vulcan-forged',
	'wen-4',
	'wormhole'
];

// Static ATH Market Cap data (in USD).
const ATH_MARKET_CAP_DATA: Record<string, number> = {
	'aerodrome-finance': 1570000000, // Aerodrome Finance (AERO): ~$1.57B
	ankr: 1209000000, // Ankr Network (ANKR): ~$1.209B
	'avalanche-2': 30006000000, // Avalanche (AVAX): ~$30.006B
	'based-brett': 2109000000, // Brett (Based) (BRETT): ~$2.109B
	billy: 101850000, // Billy (BILLY): ~$101.85M
	binancecoin: 109505000000, // BNB (BNB): ~$109.505B
	'bio-protocol': 1052000000, // Bio Protocol (BIO): ~$1.052B
	bitcoin: 2387000000000, // Bitcoin (BTC): ~$2.387T
	chainlink: 20760000000, // Chainlink (LINK): ~$20.76B
	clearpool: 354058000, // Clearpool (CPOOL): ~$354.058M
	'coq-inu': 422752000, // Coq Inu (COQ): ~$422.752M
	ethena: 3796000000, // Ethena (ENA): ~$3.796B
	ethereum: 552214000000, // Ethereum (ETH): ~$552.214B
	goldfinch: 144702000, // Goldfinch (GFI): ~$144.702M
	io: 538368000, // io.net (IO): ~$538.368M
	joe: 407199000, // JOE (JOE): ~$407.199M
	maga: 752506000, // MAGA (magamemecoin.com) (TRUMP): ~$752.506M
	near: 11783000000, // NEAR Protocol (NEAR): ~$11.783B
	nexo: 2179000000, // Nexo (NEXO): ~$2.179B
	'paal-ai': 546778000, // PAAL AI (PAAL): ~$546.778M
	'pancakeswap-token': 6620000000, // PancakeSwap (CAKE): ~$6.62B
	pepe: 10430000000, // Pepe (PEPE): ~$10.43B
	popcat: 1928000000, // Popcat (SOL) (POPCAT): ~$1.928B
	raydium: 2088000000, // Raydium (RAY): ~$2.088B
	'ref-finance': 14811000, // Ref Finance (REF): ~$14.811M
	'render-token': 5228000000, // Render (RENDER): ~$5.228B
	ronin: 1292000000, // Ronin (RON): ~$1.292B
	sidus: 121234000, // SIDUS (SIDUS): ~$121.234M
	solana: 123295000000, // Solana (SOL): ~$123.295B
	sudeng: 277943000, // sudeng (HIPPO): ~$277.943M
	sushi: 2586000000, // SushiSwap (SUSHI): ~$2.586B
	'ton-fish-memecoin': 47170000, // TON FISH MEMECOIN (FISH): ~$47.17M
	uniswap: 21479000000, // Uniswap (UNI): ~$21.479B
	'vulcan-forged': 788667000, // Vulcan Forged (PYR): ~$788.667M
	'wen-4': 352045000, // Wen (WEN): ~$352.045M
	wormhole: 2366000000 // Wormhole (W): ~$2.366B
};

// Crypto categories for classification.
const CRYPTO_CATEGORIES: Record<string, string> = {
	'aerodrome-finance': CryptoCategory.DEFI,
	ankr: CryptoCategory.INFRASTRUCTURE,
	'avalanche-2': CryptoCategory.LAYER_1,
	'based-brett': CryptoCategory.MEMECOIN,
	billy: CryptoCategory.MEMECOIN,
	binancecoin: CryptoCategory.LAYER_1,
	'bio-protocol': CryptoCategory.DESCI,
	bitcoin: CryptoCategory.STORE_OF_VALUE,
	chainlink: CryptoCategory.DEFI,
	clearpool: CryptoCategory.RWA,
	'coq-inu': CryptoCategory.MEMECOIN,
	ethena: CryptoCategory.DEFI,
	ethereum: CryptoCategory.LAYER_1,
	goldfinch: CryptoCategory.RWA,
	io: CryptoCategory.AI,
	joe: CryptoCategory.DEFI,
	maga: CryptoCategory.MEMECOIN,
	near: CryptoCategory.LAYER_1,
	nexo: CryptoCategory.CEFI,
	'paal-ai': CryptoCategory.AI,
	'pancakeswap-token': CryptoCategory.DEFI,
	pepe: CryptoCategory.MEMECOIN,
	popcat: CryptoCategory.MEMECOIN,
	raydium: CryptoCategory.DEFI,
	'ref-finance': CryptoCategory.DEFI,
	'render-token': CryptoCategory.AI,
	ronin: CryptoCategory.GAMING,
	sidus: CryptoCategory.GAMING,
	solana: CryptoCategory.LAYER_1,
	sudeng: CryptoCategory.MEMECOIN,
	sushi: CryptoCategory.DEFI,
	'ton-fish-memecoin': CryptoCategory.MEMECOIN,
	uniswap: CryptoCategory.DEFI,
	'vulcan-forged': CryptoCategory.GAMING,
	'wen-4': CryptoCategory.MEMECOIN,
	wormhole: CryptoCategory.INTEROPERABILITY
};

type SortField = keyof CryptoMetric | 'mcDelta' | 'priceDelta' | 'priceAdjustToMC' | 'potentialUpside';

const FairValueAnalysis = () => {
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
			const { circulatingSupply, currentMC, currentPrice, marketCapATH, priceATH } = crypto;
			const mcDelta = calculateMCDelta(currentMC, marketCapATH);
			const priceDelta = calculatePriceDelta(currentPrice, priceATH);
			const priceAdjustToMC = calculatePriceAdjustToMC(marketCapATH, circulatingSupply);
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
				case FIELDS.CATEGORY:
					aValue = a.category;
					bValue = b.category;
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
	}, [cryptoMetrics, sortDirection, sortField]);

	/* ===== Functions ===== */
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

		return athMC / circulatingSupply;
	}

	function calculatePriceDelta(currentPrice: number, athPrice: number): number {
		return ((currentPrice - athPrice) / athPrice) * 100;
	}

	function renderFetchButton() {
		if (isLoading) {
			return (
				<>
					<span className='loading loading-spinner loading-sm'></span>
					Fetching Data...
				</>
			);
		}

		return (
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
		);
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
						{renderFetchButton()}
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
			per_page: 50,
			price_change_percentage: '24h',
			sparkline: false,
			vs_currency: 'usd'
		});

		if (result) {
			setLastUpdated(new Date());
		}
	}

	function formatNumber(num: number): string {
		return new Intl.NumberFormat('en-US').format(num);
	}

	function formatPrice(price: number): string {
		// If price is >= 1000, don't show decimals
		if (price >= 1000) {
			return new Intl.NumberFormat('en-US', {
				currency: 'USD',
				maximumFractionDigits: 0,
				minimumFractionDigits: 0,
				style: 'currency'
			}).format(price);
		}

		// If price is very small (close to 0.00), show more decimal places
		if (price > 0 && price < 0.01) {
			// Find the first non-zero digit and show at least 2 significant digits
			let decimals = 2;
			let temp = price;
			while (temp < 1 && decimals < 10) {
				temp *= 10;
				decimals++;
			}

			return new Intl.NumberFormat('en-US', {
				currency: 'USD',
				maximumFractionDigits: decimals,
				minimumFractionDigits: decimals,
				style: 'currency'
			}).format(price);
		}

		// Normal formatting for prices >= 0.01 and < 1000
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

	/**
	 * Function for parsing raw data to our format.
	 */
	function parseRawDataToCryptoMetrics(rawData: CoinGeckoResponse[]): CryptoMetric[] {
		return rawData.map((coin) => {
			const { ath, circulating_supply, current_price, id, image, market_cap, max_supply, name, symbol } = coin;
			const circulatingPercentage = max_supply ? ((circulating_supply / max_supply) * 100).toFixed(1) + '%' : '∞';

			return {
				category: CRYPTO_CATEGORIES[id] || 'Other',
				circulatingPercentage,
				circulatingSupply: Math.round(circulating_supply),
				currentMC: Math.round(market_cap), // Keep as full number to match ATH format.
				currentPrice: current_price,
				id: id,
				image: image, // We include the image in parsing.
				marketCapATH: ATH_MARKET_CAP_DATA[id] || 0, // Use static ATH market cap data.
				name: name,
				priceATH: ath,
				ticker: symbol.toUpperCase()
			};
		});
	}

	/**
	 * Sortable header component for table columns.
	 * It handles click events to sort the table by the specified field.
	 */
	function SortableHeader({ field, children }: { field: SortField; children: ReactNode }) {
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
			<SectionTitle level='h2'>Cryptocurrency Market Analysis</SectionTitle>

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

					<div className='overflow-x-auto max-h-[70vh]'>
						<table className='table'>
							<thead className='bg-blue-50 sticky text-gray-700 top-0 z-10'>
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
									<SortableHeader field={FIELDS.NAME}>Cryptocurrency</SortableHeader>
									<SortableHeader field={FIELDS.MARKET_CAP_ATH}>ATH Market Cap</SortableHeader>
									<SortableHeader field={FIELDS.CURRENT_MC}>Current Market Cap</SortableHeader>
									<SortableHeader field={FIELDS.MC_DELTA}>Market Cap Change</SortableHeader>
									<SortableHeader field={FIELDS.PRICE_ATH}>ATH Price</SortableHeader>
									<SortableHeader field={FIELDS.CURRENT_PRICE}>Current Price</SortableHeader>
									<SortableHeader field={FIELDS.PRICE_DELTA}>Price Change</SortableHeader>
									<SortableHeader field={FIELDS.PRICE_ADJUST_TO_MC}>Target Price</SortableHeader>
									<SortableHeader field={FIELDS.POTENTIAL_UPSIDE}>Potential Gain</SortableHeader>
									<SortableHeader field={FIELDS.CIRCULATING_SUPPLY}>Supply in Circulation</SortableHeader>
									<SortableHeader field={FIELDS.CATEGORY}>Category</SortableHeader>
								</tr>
							</thead>
							<tbody>
								{sortedData.map((crypto, index) => {
									const {
										category,
										circulatingPercentage,
										currentMC,
										currentPrice,
										image,
										marketCapATH,
										mcDelta,
										name,
										priceAdjustToMC,
										potentialUpside,
										priceATH,
										priceDelta,
										ticker
									} = crypto;

									return (
										<tr
											className={`h-16 transition-colors ${
												index % 2 === 0 ? 'bg-transparent hover:bg-primary/20' : 'bg-primary/5 hover:bg-primary/25'
											}`}
											key={ticker}
										>
											<td className='py-4 align-middle text-center w-16 min-w-16'>
												<div className='flex justify-center'>
													<img
														alt={`${name} logo`}
														className='w-10 h-10 min-w-10 rounded-full border-2 border-gray-100 shadow-sm'
														onError={(e) => {
															// Fallback en caso de que la imagen no cargue
															const target = e.target as HTMLImageElement;
															target.src =
																'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGM0Y0RjYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMlM2LjQ4IDIyIDEyIDIyUzIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTIgMlpNMTMgMTdIMTFWMTVIMTNWMTdaTTEzIDEzSDE1VjkiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cjwvc3ZnPgo=';
															target.className = 'w-10 h-10 rounded-full border-2 border-gray-200 opacity-50';
														}}
														src={image}
													/>
												</div>
											</td>
											<td className='align-middle py-4 text-gray-900'>
												<div>
													<div className='font-semibold text-base'>{name}</div>
													<div className='text-sm opacity-60 font-mono'>{ticker}</div>
												</div>
											</td>
											<td className='text-gray-900 text-sm text-right font-mono py-4 px-3 align-middle'>${formatNumber(marketCapATH)}</td>
											<td className='text-gray-900 text-sm text-right font-mono py-4 px-3 align-middle'>${formatNumber(currentMC)}</td>
											<td className='text-sm text-center py-4 align-middle'>
												<span className={mcDelta >= 0 ? 'text-green-600' : 'text-red-600'}>
													{mcDelta >= 0 ? '+' : ''}
													{mcDelta.toFixed(1)}%
												</span>
											</td>
											<td className='text-gray-900 text-sm text-right font-mono py-4 align-middle'>{formatPrice(priceATH)}</td>
											<td className='text-gray-900 text-sm text-right font-mono font-semibold py-4 align-middle'>
												{formatPrice(currentPrice)}
											</td>
											<td className='text-sm text-center py-4 align-middle'>
												<span className={priceDelta >= 0 ? 'text-green-600' : 'text-red-600'}>
													{priceDelta >= 0 ? '+' : ''}
													{priceDelta.toFixed(1)}%
												</span>
											</td>
											<td className='text-sm text-right font-mono text-primary font-semibold py-4 align-middle'>
												{formatPrice(priceAdjustToMC)}
											</td>
											<td className='text-center py-4 align-middle'>
												<span className={`badge badge-lg ${getPotentialColor(potentialUpside)}`}>
													{potentialUpside >= 0 ? '+' : ''}
													{potentialUpside.toFixed(1)}%
												</span>
											</td>
											<td className='text-gray-900 px-3 text-sm text-right font-mono opacity-70 py-4 align-middle'>
												{circulatingPercentage}
											</td>
											<td className='text-gray-900 py-4 align-middle text-center'>
												<span className='badge badge-outline badge-sm'>{category}</span>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</>
			)}

			<div className='mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
				<SectionTitle level='h4'>Column Definitions</SectionTitle>

				<div className='grid md:grid-cols-2 gap-4 mb-6'>
					<div className='space-y-2'>
						<div className='text-sm space-y-2'>
							<div>
								<strong>Cryptocurrency:</strong> Name and symbol of the digital asset.
							</div>
							<div>
								<strong>ATH Market Cap:</strong> All-time high market capitalization (highest total value ever reached).
							</div>
							<div>
								<strong>Current Market Cap:</strong> Present total market value (current price × circulating supply).
							</div>
							<div>
								<strong>Market Cap Change:</strong> Percentage difference between current and ATH market cap.
							</div>
							<div>
								<strong>ATH Price:</strong> All-time high price per token/coin.
							</div>
						</div>
					</div>
					<div className='space-y-2'>
						<div className='text-sm space-y-2'>
							<div>
								<strong>Current Price:</strong> Present market price per token/coin.
							</div>
							<div>
								<strong>Price Change:</strong> Percentage difference between current and ATH price.
							</div>
							<div>
								<strong>Target Price:</strong> Theoretical price if market cap returned to ATH levels.
							</div>
							<div>
								<strong>Potential Gain:</strong> Percentage gain if price reaches the target price.
							</div>
							<div>
								<strong>Supply in Circulation:</strong> Percentage of maximum supply currently in circulation. If 100%, it means the coin will
								have no more inflation (no new coins will be created). ∞ indicates unlimited supply.
							</div>
							<div>
								<strong>Category:</strong> Classification of the cryptocurrency by its primary use case or sector.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
				<SectionTitle level='h4'>Important Notes & Methodology</SectionTitle>

				<div className='text-sm space-y-1'>
					<li>All calculations are based on historical ATH data and current market conditions.</li>
					<li>Target prices assume the same circulating supply as current levels.</li>
					<li>Market cap changes reflect overall market sentiment and adoption.</li>
					<li>Price changes may differ from market cap changes due to supply variations.</li>
					<li>Data is fetched from CoinGecko API and is for educational purposes only.</li>
					<li>Click on column headers to sort the table by different criteria.</li>
				</div>

				<p className='text-xs text-blue-800 font-medium mt-4'>
					⚠️ This analysis is for educational purposes only. Always conduct your own research and consult with financial advisors before making
					investment decisions. Past performance does not guarantee future results.
				</p>
			</div>
		</div>
	);
};

export default FairValueAnalysis;
