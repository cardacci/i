import React from 'react';

import BaseView from '@/components/common/BaseView';
import ContentCard from '@/components/common/ContentCard';
import ListWithTitle from '@/components/common/ListWithTitle';
import UnderConstruction from '@/components/common/UnderConstruction';

const Crypto: React.FC = () => {
	/* ===== Constants ===== */
	const cryptocurrencies = [
		'Bitcoin (BTC)',
		'Ethereum (ETH)',
		'Solana (SOL)',
		'Chainlink (LINK)',
		'Avalanche (AVAX)',
	];

	return (
		<BaseView id='crypto' title='Cryptocurrency Insights'>
			<UnderConstruction />

			<ContentCard>
				<p className='mb-6'>
					Welcome to the cryptocurrency section of my personal website. Here, you will
					find information and insights about various cryptocurrencies, market trends, and
					investment strategies.
				</p>

				<ListWithTitle
					className='mt-6'
					items={cryptocurrencies}
					title='Popular Cryptocurrencies'
				/>

				<h3 className='text-xl font-semibold mt-6 mb-4 text-gray-800'>Market Trends</h3>

				<p className='mb-4'>
					Stay updated with the latest trends in the cryptocurrency market. Understanding
					market movements can help you make informed decisions.
				</p>

				<h3 className='text-xl font-semibold mt-6 mb-4 text-gray-800'>
					Investment Strategies
				</h3>

				<p className='mb-4'>
					Explore different investment strategies for cryptocurrencies, including
					long-term holding, day trading, and diversification.
				</p>
			</ContentCard>
		</BaseView>
	);
};

export default Crypto;
