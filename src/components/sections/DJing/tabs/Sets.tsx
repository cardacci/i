import React, { useState } from 'react';

import { ContentCard, SectionTitle } from '@/utils';

enum Genre {
	OrganicHouse = 'Organic House',
	ProgressiveHouse = 'Progressive House',
	DeepHouse = 'Deep House'
}

const sets = [
	{
		genres: [Genre.OrganicHouse, Genre.ProgressiveHouse],
		title: 'CARDACCI #1 - Organic / Progressive House',
		youtubeId: 'K-NzdZJZ8pY'
	},
	{
		genres: [Genre.OrganicHouse, Genre.ProgressiveHouse],
		title: 'CARDACCI x Ramiro Avanzi x SOLER #2 - Organic / Progressive House',
		youtubeId: 'gzz-8-d2LxE'
	},
	{
		genres: [Genre.DeepHouse],
		title: 'CARDACCI #3 - Deep House',
		youtubeId: 'KmLM1fLEk0g'
	},
	{
		genres: [Genre.OrganicHouse, Genre.ProgressiveHouse],
		title: 'CARDACCI x Fran Barone x SOLER #4 - Organic / Progressive House',
		youtubeId: 'P0haMIdd_j0'
	}
];

const genreOptions = Object.values(Genre);

const Sets: React.FC = () => {
	/* ===== State ===== */
	const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

	/* ===== Constants & Variables ===== */
	const filteredSets = selectedGenres.length === 0 ? sets : sets.filter((set) => set.genres.some((g) => selectedGenres.includes(g)));

	/* ===== Functions ===== */
	const handleGenreToggle = (genre: Genre) => {
		setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
	};

	return (
		<ContentCard>
			<SectionTitle level='h2'>My DJ Sets</SectionTitle>

			<div className='flex flex-wrap gap-3 mb-8 overflow-x-auto whitespace-nowrap sm:overflow-visible sm:whitespace-normal'>
				{genreOptions.map((genre) => (
					<button
						className={`px-4 py-2 rounded-full border border-[#A3FFD6] text-sm font-medium transition-colors duration-200 ${
							selectedGenres.includes(genre) ? 'bg-[#A3FFD6] text-[#18122B] shadow' : 'bg-white/60 text-[#393053] hover:bg-[#A3FFD6]/30'
						}`}
						key={genre}
						onClick={() => handleGenreToggle(genre as Genre)}
						type='button'
					>
						{genre}
					</button>
				))}
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-8'>
				{filteredSets.map((set) => (
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

			<div className='flex justify-center mt-10'>
				<a
					className='inline-block px-6 py-3 bg-[#A3FFD6] text-[#18122B] font-semibold rounded-full shadow hover:bg-[#393053] hover:text-white transition-colors duration-200 text-lg text-center'
					href='https://www.youtube.com/@CARDACCI?sub_confirmation=1'
					rel='noopener noreferrer'
					target='_blank'
				>
					Subscribe to my YouTube channel
				</a>
			</div>
		</ContentCard>
	);
};

export default Sets;
