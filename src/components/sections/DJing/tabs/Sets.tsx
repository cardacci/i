import React from 'react';

import { ContentCard } from '@/utils';

const sets = [
	{
		title: 'CARDACCI #1 - Organic / Progressive House',
		youtubeId: 'K-NzdZJZ8pY'
	},
	{
		title: 'CARDACCI x Ramiro Avanzi x SOLER #2 - Organic / Progressive House',
		youtubeId: 'gzz-8-d2LxE'
	},
	{
		title: 'CARDACCI #3 - Deep House',
		youtubeId: 'KmLM1fLEk0g'
	},
	{
		title: 'CARDACCI x Fran Barone x SOLER #4 - Organic / Progressive House',
		youtubeId: 'P0haMIdd_j0'
	}
];

const Sets: React.FC = () => (
	<ContentCard>
		<h2 className='text-2xl font-bold mb-6 text-[#393053]'>My DJ Sets</h2>

		<div className='grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-8'>
			{sets.map((set) => (
				<div
					className='flex flex-col items-stretch rounded-xl shadow-lg overflow-hidden'
					key={set.youtubeId}
					style={{
						maxHeight: 380,
						minHeight: 380,
						minWidth: 0
					}}
				>
					<div className='flex-1 flex items-center justify-center bg-gradient-to-b from-[#635985]/40 via-[#393053]/30 to-[#A3FFD6]/20'>
						<iframe
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
							className='w-full h-full min-h-[200px] max-h-[240px] rounded-none border-none'
							src={`https://www.youtube.com/embed/${set.youtubeId}`}
							title={set.title}
						/>
					</div>

					<div className='text-center text-lg font-medium text-gray-900 bg-white/60 py-3 px-2 border-t border-[#A3FFD6] rounded-b-xl'>
						{set.title}
					</div>
				</div>
			))}
		</div>
	</ContentCard>
);

export default Sets;
