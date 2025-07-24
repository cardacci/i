import React from 'react';

import { ContentCard, SectionTitle, ListWithTitle } from '@/utils';

const DjInfo: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const equipment = ['Pioneer DJ controllers', 'Serato DJ software', 'Custom audio interfaces', 'High-quality monitoring headphones'];

	return (
		<ContentCard>
			<p className='mb-6'>Welcome to my DJing section. Here I share my passion for music, playlists, and events where I have performed.</p>

			<SectionTitle className='mt-6' level='h3'>
				About Me as a DJ
			</SectionTitle>

			<p className='mb-4'>
				I am a DJ passionate about <strong>progressive house</strong> and <strong>organic house</strong>, genres that allow me to create sets with
				depth, melody, and atmosphere. I love taking the dancefloor on a progressive musical journey, with smooth transitions and an immersive sonic
				narrative.
			</p>

			<p className='mb-4'>
				I also enjoy experimenting and having fun mixing <strong>deep house</strong>, <strong>house</strong>, and <strong>afro house</strong>—styles
				that bring groove, energy, and fresh rhythms to my sessions. This variety lets me adapt to different environments and audiences, always
				maintaining my own musical identity.
			</p>

			<SectionTitle className='mt-6' level='h3'>
				My Style
			</SectionTitle>

			<p className='mb-4'>
				My sets usually blend electronic music with elements of house, techno, and organic sounds. I aim to create smooth experiences that take
				listeners on an emotional and danceable journey.
			</p>

			<ListWithTitle className='mt-6' items={equipment} title='Equipment' />

			<SectionTitle className='mt-6' level='h3'>
				Featured Mixes
			</SectionTitle>

			<p className='mb-4'>Coming soon! I will share some of my favorite mixes and sessions here.</p>
		</ContentCard>
	);
};

export default DjInfo;
