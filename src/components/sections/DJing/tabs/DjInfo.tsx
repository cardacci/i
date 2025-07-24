import React from 'react';

import { ContentCard, SectionTitle } from '@/utils';

const DjEquipment = [
	{
		name: 'Pioneer DDJ-FLX4',
		specs: [
			'2-channel DJ controller',
			'USB bus powered',
			'Compatible with rekordbox and Serato DJ Lite',
			'Performance Pads, Smart Fader, Smart CFX',
			'Audio output: RCA, Headphones'
		],
		url: 'https://www.pioneerdj.com/en/product/controller/ddj-flx4/black/overview/'
	},
	{
		name: 'Sennheiser HD 25',
		specs: [
			'Closed-back, on-ear DJ headphones',
			'Impedance: 70 Ω',
			'Frequency response: 16–22,000 Hz',
			'Max SPL: 120 dB',
			'Rotatable capsule for single-ear listening'
		],
		url: 'https://www.sennheiser.com/en-us/catalog/products/headphones/hd-25/hd-25-506909'
	},
	{
		name: 'Pioneer VM-80',
		specs: [
			'8-inch active studio monitor',
			'Class D amplifier, 120 W output',
			'Frequency response: 34 Hz – 36 kHz',
			'DSP control for room tuning',
			'Inputs: XLR/TRS combo, RCA'
		],
		url: 'https://www.pioneerdj.com/en/product/monitor-speakers/vm-80/black/overview/'
	}
];

const DjInfo: React.FC = () => {
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

			<SectionTitle className='mt-6' level='h3'>
				My DJ Setup
			</SectionTitle>

			<ul className='mt-4 space-y-6'>
				{DjEquipment.map((item) => (
					<li key={item.name}>
						<a className='font-semibold text-blue-700 hover:underline' href={item.url} rel='noopener noreferrer' target='_blank'>
							{item.name}
						</a>

						<ul className='list-disc list-inside ml-4 mt-1 text-sm text-gray-700'>
							{item.specs.map((spec) => (
								<li key={spec}>{spec}</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			<SectionTitle className='mt-6' level='h3'>
				Featured Mixes
			</SectionTitle>

			<p className='mb-4'>Coming soon! I will share some of my favorite mixes and sessions here.</p>
		</ContentCard>
	);
};

export default DjInfo;
