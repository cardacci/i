import React from 'react';
import UnderConstruction from '@/components/common/UnderConstruction';

const Crypto: React.FC = () => {
	return (
		<section id="crypto" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">Cryptocurrency Insights</h1>

			<UnderConstruction />

			<div className="bg-white p-6 rounded-lg shadow-md">
				<p className="mb-6">
					Welcome to the cryptocurrency section of my personal website. Here, you will
					find information and insights about various cryptocurrencies, market trends, and
					investment strategies.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Popular Cryptocurrencies
				</h3>
				<ul className="list-disc pl-5 space-y-2">
					<li>Bitcoin (BTC)</li>
					<li>Ethereum (ETH)</li>
					<li>Solana (SOL)</li>
					<li>Litecoin (LTC)</li>
					<li>Cardano (ADA)</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Market Trends</h3>
				<p className="mb-4">
					Stay updated with the latest trends in the cryptocurrency market. Understanding
					market movements can help you make informed decisions.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
					Investment Strategies
				</h3>
				<p className="mb-4">
					Explore different investment strategies for cryptocurrencies, including
					long-term holding, day trading, and diversification.
				</p>
			</div>
		</section>
	);
};

export default Crypto;
