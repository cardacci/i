import { useState } from 'react';

interface ApiRequestState<T> {
	data: T | null;
	error: string | null;
	isLoading: boolean;
}

interface ApiService {
	url: string;
	options?: RequestInit;
}

type ApiServices = {
	[key: string]: (params?: Record<string, any>) => ApiService;
};

const apiServices: ApiServices = {
	coinGeckoCoin: (params: { id: string }) => ({
		options: {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'GET'
		},
		url: `https://api.coingecko.com/api/v3/coins/${params.id}`
	}),

	coinGeckoMarkets: (params = {}) => {
		const defaultParams = {
			market_cap_change_percentage: '24h',
			order: 'market_cap_desc',
			page: 1,
			per_page: 50,
			price_change_percentage: '24h',
			sparkline: false,
			vs_currency: 'usd',
			...params
		};
		const searchParams = new URLSearchParams();

		Object.entries(defaultParams).forEach(([key, value]) => {
			if (value !== undefined && value !== null) {
				searchParams.append(key, String(value));
			}
		});

		return {
			options: {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'GET'
			},
			url: `https://api.coingecko.com/api/v3/coins/markets?${searchParams.toString()}`
		};
	}
};

export const useApiRequest = <T = any>() => {
	const [state, setState] = useState<ApiRequestState<T>>({
		data: null,
		error: null,
		isLoading: false
	});

	const request = async (serviceName: keyof typeof apiServices, params?: Record<string, any>): Promise<T | null> => {
		setState((prev) => ({
			...prev,
			error: null,
			isLoading: true
		}));

		try {
			const service = apiServices[serviceName];
			if (!service) {
				throw new Error(`API service "${String(serviceName)}" not found`);
			}

			const { url, options } = service(params);

			const response = await fetch(url, options);

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
			}

			const data: T = await response.json();

			setState({
				data,
				error: null,
				isLoading: false
			});

			return data;
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';

			setState({
				data: null,
				error: errorMessage,
				isLoading: false
			});

			return null;
		}
	};

	const reset = () => {
		setState({
			data: null,
			error: null,
			isLoading: false
		});
	};

	return {
		...state,
		request,
		reset
	};
};
