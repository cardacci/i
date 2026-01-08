import React from 'react';

import asusTufF15Img from '@/assets/images/djing/asus-tuf-gaming-f15.jpg';
import ddjFlx4Img from '@/assets/images/djing/pioneer-ddj-flx4.webp';
import vm80Img from '@/assets/images/djing/pioneer-vm-80.webp';
import sandiskCruzerGlideImg from '@/assets/images/djing/sandisk-cruzer-glide-3.0-64gb.jpg';
import sennheiserHd25Img from '@/assets/images/djing/sennheiser-hd-25.jpg';
import { ContentCard, SectionTitle } from '@/components/common';

const DjEquipment = [
	{
		image: ddjFlx4Img,
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
		image: sennheiserHd25Img,
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
		image: vm80Img,
		name: 'Pioneer VM-80',
		specs: [
			'8-inch active studio monitor',
			'Class D amplifier, 120 W output',
			'Frequency response: 34 Hz – 36 kHz',
			'DSP control for room tuning',
			'Inputs: XLR/TRS combo, RCA'
		],
		url: 'https://www.pioneerdj.com/en/product/monitor-speakers/vm-80/black/overview/'
	},
	{
		image: asusTufF15Img,
		name: 'ASUS TUF Gaming F15',
		specs: [
			'Intel Core i7 12th Gen',
			'16GB RAM DDR4',
			'512GB NVMe SSD',
			'NVIDIA GeForce RTX 3050',
			'15.6" FHD 144Hz display',
			'Windows 11',
			'RGB backlit keyboard',
			'Military-grade durability'
		],
		url: 'https://www.asus.com/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f15-2022/'
	},
	{
		image: sandiskCruzerGlideImg,
		name: 'SanDisk Cruzer Glide 3.0 64GB (x2)',
		specs: [
			'USB 3.0 flash drive',
			'Capacity: 64GB each',
			'Retractable connector',
			'High-speed data transfer',
			'Ideal for storing and transferring music collections'
		],
		url: 'https://www.sandisk.com/home/usb-flash/cruzer-glide-usb'
	}
];

const DjInfo: React.FC = () => {
	return (
		<ContentCard>
			<SectionTitle level='h2'>About Me as a DJ</SectionTitle>

			<p className='mb-4 text-gray-900'>
				I am a DJ passionate about <strong>progressive house</strong> and <strong>organic house</strong>, genres that allow me to create sets with
				depth, melody, and atmosphere. I love taking the dancefloor on a progressive musical journey, with smooth transitions and an immersive sonic
				narrative.
			</p>

			<p className='mb-4 text-gray-900'>
				I also enjoy experimenting and having fun mixing <strong>deep house</strong>, <strong>house</strong>, and <strong>afro house</strong>—styles
				that bring groove, energy, and fresh rhythms to my sessions. This variety lets me adapt to different environments and audiences, always
				maintaining my own musical identity.
			</p>

			<SectionTitle className='mt-6' level='h3'>
				My Style
			</SectionTitle>

			<p className='mb-4 text-gray-900'>
				My sets usually blend electronic music with elements of house, techno, and organic sounds. I aim to create smooth experiences that take
				listeners on an emotional and danceable journey.
			</p>

			<SectionTitle className='mt-6' level='h3'>
				My DJ Setup
			</SectionTitle>

			<ul className='mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
				{DjEquipment.map((item) => (
					<li className='bg-white/5 border border-[#A3FFD6] flex flex-col items-center p-4 rounded-xl shadow-lg h-full' key={item.name}>
						<div className='shrink-0 flex items-center justify-center w-32 h-32 bg-linear-to-br from-[#A3FFD6]/30 to-[#18122B]/60 rounded-lg overflow-hidden shadow-lg mb-3 group transition-transform duration-300 hover:scale-105'>
							<img
								alt={item.name}
								className='object-cover w-full h-full bg-white/10 rounded-md transition-transform duration-300 group-hover:scale-125'
								src={item.image}
							/>
						</div>

						<a
							className='font-semibold hover:underline text-lg text-gray-900 text-center'
							href={item.url}
							rel='noopener noreferrer'
							target='_blank'
						>
							{item.name}
						</a>

						<ul className='list-disc list-inside mt-2 text-sm text-gray-800 text-left w-full pl-4'>
							{item.specs.map((spec) => (
								<li className='marker:text-[#393053]' key={spec}>
									{spec}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</ContentCard>
	);
};

export default DjInfo;
