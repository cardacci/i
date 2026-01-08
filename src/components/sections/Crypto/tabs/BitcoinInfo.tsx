import React from 'react';

import { SectionTitle } from '@/components';

const BitcoinInfo: React.FC = () => {
	return (
		<div>
			<SectionTitle level='h2'>The History and Vision of Bitcoin</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Bitcoin was created in 2008 by an anonymous person or group known as Satoshi Nakamoto. It was introduced as a peer-to-peer electronic cash
				system that would allow online payments to be sent directly from one party to another without going through a financial institution.
			</p>

			<SectionTitle level='h4'>The Genesis</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The Bitcoin whitepaper, titled "Bitcoin: A Peer-to-Peer Electronic Cash System," was published on October 31, 2008. The first Bitcoin block,
				known as the Genesis Block, was mined on January 3, 2009, containing the famous message: "The Times 03/Jan/2009 Chancellor on brink of second
				bailout for banks."
			</p>

			<SectionTitle level='h4'>Core Principles</SectionTitle>

			<ul className='list-disc pl-5 space-y-2 mb-6 text-gray-600'>
				<li>
					<strong>Decentralization:</strong> No central authority controls Bitcoin. It operates on a distributed network of computers (nodes).
				</li>
				<li>
					<strong>Transparency:</strong> All transactions are recorded on a public ledger called the blockchain.
				</li>
				<li>
					<strong>Immutability:</strong> Once confirmed, transactions cannot be reversed or altered.
				</li>
				<li>
					<strong>Limited Supply:</strong> Only 21 million bitcoins will ever exist, making it a deflationary asset.
				</li>
				<li>
					<strong>Pseudonymity:</strong> Users can transact without revealing their real identities.
				</li>
			</ul>

			<SectionTitle level='h4'>Main Objectives</SectionTitle>

			<div className='grid gap-4 md:grid-cols-2 mb-6'>
				<div className='p-4 border rounded-lg bg-blue-50'>
					<h5 className='font-semibold text-blue-800 mb-2'>Financial Freedom</h5>
					<p className='text-sm text-gray-600'>
						Enable individuals to have complete control over their money without relying on banks or governments.
					</p>
				</div>

				<div className='p-4 border rounded-lg bg-green-50'>
					<h5 className='font-semibold text-green-800 mb-2'>Global Accessibility</h5>
					<p className='text-sm text-gray-600'>Provide financial services to anyone with internet access, regardless of location or status.</p>
				</div>

				<div className='p-4 border rounded-lg bg-purple-50'>
					<h5 className='font-semibold text-purple-800 mb-2'>Value Preservation</h5>
					<p className='text-sm text-gray-600'>Offer a store of value that cannot be inflated away by central bank policies.</p>
				</div>

				<div className='p-4 border rounded-lg bg-orange-50'>
					<h5 className='font-semibold text-orange-800 mb-2'>Censorship Resistance</h5>
					<p className='text-sm text-gray-600'>Enable transactions that cannot be blocked or censored by any authority.</p>
				</div>
			</div>

			<SectionTitle level='h4'>Impact and Evolution</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Since its inception, Bitcoin has evolved from a experimental digital currency to a recognized store of value, often referred to as "digital
				gold." It has inspired thousands of other cryptocurrencies and blockchain projects, fundamentally changing how we think about money and
				financial systems.
			</p>

			<p className='text-gray-600'>
				Today, Bitcoin continues to pursue its original vision while adapting to new challenges and opportunities in the global financial landscape.
			</p>
		</div>
	);
};

export default BitcoinInfo;
