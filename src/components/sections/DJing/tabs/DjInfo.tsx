import asusTufF15Img from '@/assets/images/djing/asus-tuf-gaming-f15.jpg';
import ddjFlx4Img from '@/assets/images/djing/pioneer-ddj-flx4.webp';
import vm80Img from '@/assets/images/djing/pioneer-vm-80.webp';
import sandiskCruzerGlideImg from '@/assets/images/djing/sandisk-cruzer-glide-3.0-64gb.jpg';
import sennheiserHd25Img from '@/assets/images/djing/sennheiser-hd-25.jpg';
import { SectionTitle } from '@/components/common';

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

const DjInfo = () => {
	return (
		<div className='space-y-8'>
			{/* About Section */}
			<div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#A3FFD6]/20'>
				<SectionTitle level='h2'>
					<span className='text-[#A3FFD6]'>About Me</span>
					<span className='text-white'> as a DJ</span>
				</SectionTitle>

				<p className='mb-4 text-gray-200 leading-relaxed'>
					I am a DJ passionate about <strong className='text-[#A3FFD6]'>progressive house</strong> and{' '}
					<strong className='text-[#A3FFD6]'>organic house</strong>, genres that allow me to create sets with depth, melody, and
					atmosphere. I love taking the dancefloor on a progressive musical journey, with smooth transitions and an immersive
					sonic narrative.
				</p>

				<p className='mb-4 text-gray-200 leading-relaxed'>
					I also enjoy experimenting and having fun mixing <strong className='text-[#A3FFD6]'>deep house</strong>,{' '}
					<strong className='text-[#A3FFD6]'>house</strong>, and <strong className='text-[#A3FFD6]'>afro house</strong>—styles
					that bring groove, energy, and fresh rhythms to my sessions. This variety lets me adapt to different environments and
					audiences, always maintaining my own musical identity.
				</p>
			</div>

			{/* Style Section */}
			<div className='bg-gradient-to-r from-[#A3FFD6]/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-[#A3FFD6]/20'>
				<SectionTitle level='h3'>
					<span className='text-white flex items-center gap-2'>
						<span className='text-2xl'>🎧</span> My Style
					</span>
				</SectionTitle>

				<p className='text-gray-200 leading-relaxed'>
					My sets usually blend electronic music with elements of house, techno, and organic sounds. I aim to create smooth
					experiences that take listeners on an emotional and danceable journey.
				</p>

				{/* Genre tags */}
				<div className='flex flex-wrap gap-2 mt-4'>
					{['Progressive House', 'Organic House', 'Deep House', 'Afro House', 'Melodic Techno'].map((genre) => (
						<span
							className='px-3 py-1 bg-[#A3FFD6]/20 text-[#A3FFD6] rounded-full text-sm font-medium border border-[#A3FFD6]/30'
							key={genre}
						>
							{genre}
						</span>
					))}
				</div>
			</div>

			{/* Equipment Section */}
			<div>
				<SectionTitle level='h3'>
					<span className='text-white flex items-center gap-2'>
						<span className='text-2xl'>🎛️</span> My DJ Setup
					</span>
				</SectionTitle>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
					{DjEquipment.map((item) => (
						<div
							className='group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-5 border border-[#A3FFD6]/20 hover:border-[#A3FFD6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#A3FFD6]/10 hover:-translate-y-1'
							key={item.name}
						>
							{/* Equipment Image */}
							<div className='relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a]'>
								<img
									alt={item.name}
									className='w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110'
									src={item.image}
								/>
								{/* Glow effect on hover */}
								<div className='absolute inset-0 bg-[#A3FFD6]/0 group-hover:bg-[#A3FFD6]/5 transition-colors duration-300 rounded-lg' />
							</div>

							{/* Equipment Name */}
							<a
								className='block font-semibold text-lg text-white hover:text-[#A3FFD6] transition-colors text-center mb-3'
								href={item.url}
								rel='noopener noreferrer'
								target='_blank'
							>
								{item.name}
							</a>

							{/* Specs */}
							<ul className='space-y-1.5 text-sm text-gray-300'>
								{item.specs.map((spec) => (
									<li className='flex items-start gap-2' key={spec}>
										<span className='text-[#A3FFD6] mt-0.5'>•</span>
										<span>{spec}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DjInfo;
