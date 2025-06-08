import React from 'react';

import { ContentCard, SectionTitle, ListWithTitle } from '@/utils';

const DjInfo: React.FC = () => {
	/* ===== Constants ===== */
	const equipment = [
		'Pioneer DJ controllers',
		'Serato DJ software',
		'Custom audio interfaces',
		'High-quality monitoring headphones',
	];

	return (
		<ContentCard>
			<p className='mb-6'>
				Welcome to my DJing section. Here, I share my passion for music, playlists, and
				events where I&apos;ve performed.
			</p>

			<SectionTitle className='mt-6' level='h3'>
				My Style
			</SectionTitle>

			<p className='mb-4'>
				My DJ sets blend electronic music with elements of house, techno, and ambient
				sounds. I focus on creating flowing experiences that take listeners on a journey.
			</p>

			<ListWithTitle className='mt-6' items={equipment} title='Equipment' />

			<SectionTitle className='mt-6' level='h3'>
				Featured Mixes
			</SectionTitle>

			<p className='mb-4'>
				Coming soon! I&apos;ll be sharing some of my favorite mixes and recording sessions.
			</p>
		</ContentCard>
	);
};

export default DjInfo;
