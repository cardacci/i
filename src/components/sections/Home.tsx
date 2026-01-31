import React from 'react';

import profileImage from '@/assets/images/profile.png';
import { BaseView } from '@/components/common';
import { SocialNetwork } from '@/utils/constants';
import { useSocialLinks } from '@/utils/hooks';

const Home: React.FC = () => {
	/* ===== Hooks ===== */
	const { socialLinks } = useSocialLinks([SocialNetwork.GITHUB, SocialNetwork.INSTAGRAM, SocialNetwork.LINKEDIN, SocialNetwork.YOUTUBE]);

	return (
		<BaseView id='home'>
			<div className='flex flex-col md:flex-row items-center gap-10 md:gap-12'>
				{/* Profile Image */}
				<div className='md:w-1/3 flex justify-center'>
					<div className='relative group'>
						{/* Decorative rings */}
						<div className='absolute -inset-4 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500' />
						<div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300' />
						<img
							alt='Gabriel Cardacci'
							className='relative rounded-full w-56 h-56 md:w-64 md:h-64 object-cover shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-105'
							src={profileImage}
						/>
					</div>
				</div>

				{/* Content */}
				<div className='md:w-2/3 text-center md:text-left'>
					<p className='text-lg md:text-xl text-slate-700 mb-5 leading-relaxed'>
						Passionate about technology, software development, and building high-quality digital products.
					</p>

					<p className='text-slate-600 mb-6 leading-relaxed'>
						Here you&apos;ll find a selection of professional work, side projects, explorations in crypto and blockchain, my
						journey as a DJ, and experiences shaped by travel, curiosity, and constant learning.
					</p>

					<p className='text-slate-700 font-medium mb-8'>Feel free to explore and connect.</p>

					{/* Social Links */}
					<div className='flex flex-wrap gap-3 justify-center md:justify-start'>
						{socialLinks.map((link) => (
							<a
								className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${link.className}`}
								href={link.url}
								key={link.name}
								rel='noopener noreferrer'
								target='_blank'
							>
								{link.icon && link.icon}

								{!link.icon && <span className='font-bold'>{link.name.substring(0, 2).toUpperCase()}</span>}

								{link.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</BaseView>
	);
};

export default Home;
