import React from 'react';

import UnderConstruction from '@/components/common/UnderConstruction';
import { BaseView, ContentCard, ListWithTitle, SectionTitle } from '@/utils';

const Travel: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const destinations = ['Barcelona, Spain', 'Tokyo, Japan', 'New York City, USA', 'Bali, Indonesia', 'Patagonia, Argentina'];

	return (
		<BaseView id='travel' title='Travel Adventures'>
			<UnderConstruction />

			<ContentCard>
				<p className='mb-6'>Welcome to my travel section. Here, I share experiences, photos, and stories from my adventures around the world.</p>

				<ListWithTitle className='mt-6' items={destinations} title='Favorite Destinations' />

				<SectionTitle className='mt-6' level='h3'>
					Travel Philosophy
				</SectionTitle>

				<p className='mb-4'>
					I believe that travel broadens the mind and enriches the soul. I try to immerse myself in local cultures, explore off-the-beaten-path
					destinations, and connect with people from different backgrounds.
				</p>

				<SectionTitle className='mt-6' level='h3'>
					Photo Gallery
				</SectionTitle>

				<p className='mb-4'>Coming soon! I&apos;ll be sharing photo galleries from my travels.</p>
			</ContentCard>
		</BaseView>
	);
};

export default Travel;
