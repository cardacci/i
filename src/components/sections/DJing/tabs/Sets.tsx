import { useState } from 'react';

import { SectionTitle } from '@/components/common';
import { Genre, SETS } from '@/utils/constants';

const genreOptions = Object.values(Genre);

const Sets = () => {
	/* ===== State ===== */
	const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

	/* ===== Constants & Variables ===== */
	const filteredSets = selectedGenres.length === 0 ? SETS : SETS.filter((set) => set.genres.some((g) => selectedGenres.includes(g)));

	/* ===== Functions ===== */
	const handleGenreToggle = (genre: Genre) => {
		setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
	};

	return (
		<div className='space-y-8'>
			<div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#A3FFD6]/20'>
				<SectionTitle level='h2'>
					<span className='text-white flex items-center gap-2'>
						<span className='text-2xl'>🎵</span> My DJ Sets
					</span>
				</SectionTitle>

				{/* Genre Filter */}
				<div className='flex flex-wrap gap-2 mb-6'>
					{genreOptions.map((genre) => (
						<button
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								selectedGenres.includes(genre)
									? 'bg-[#A3FFD6] text-[#0f0f1a] shadow-lg shadow-[#A3FFD6]/30'
									: 'bg-white/10 text-gray-300 border border-white/20 hover:bg-[#A3FFD6]/20 hover:border-[#A3FFD6]/50'
							}`}
							key={genre}
							onClick={() => handleGenreToggle(genre as Genre)}
							type='button'
						>
							{genre}
						</button>
					))}
				</div>

				{/* Sets Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{filteredSets.map((set) => (
						<div
							className='group bg-gradient-to-b from-white/10 to-white/5 rounded-xl overflow-hidden border border-[#A3FFD6]/20 hover:border-[#A3FFD6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#A3FFD6]/10'
							key={set.youtubeId}
						>
							{/* Video Container */}
							<div className='relative aspect-video bg-[#0f0f1a]'>
								<iframe
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowFullScreen
									className='absolute inset-0 w-full h-full'
									src={`https://www.youtube.com/embed/${set.youtubeId}`}
									title={set.title}
								/>
							</div>

							{/* Set Info */}
							<div className='p-4 bg-gradient-to-r from-[#A3FFD6]/5 to-purple-500/5'>
								<h3 className='text-white font-semibold text-center group-hover:text-[#A3FFD6] transition-colors'>
									{set.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Subscribe CTA */}
			<div className='text-center'>
				<a
					className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#A3FFD6] to-[#7de8b8] text-[#0f0f1a] font-bold rounded-full shadow-lg shadow-[#A3FFD6]/30 hover:shadow-[#A3FFD6]/50 hover:scale-105 transition-all duration-300 text-lg'
					href='https://www.youtube.com/@CARDACCI?sub_confirmation=1'
					rel='noopener noreferrer'
					target='_blank'
				>
					<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
					</svg>
					Subscribe to my YouTube channel
				</a>
			</div>
		</div>
	);
};

export default Sets;
