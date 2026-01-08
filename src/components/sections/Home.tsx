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
			<div className='flex flex-col md:flex-row items-center gap-8'>
				<div className='md:w-1/3 flex justify-center'>
					<img
						alt='Gabriel Cardacci'
						className='rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-white ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300 hover:scale-105'
						src={profileImage}
					/>
				</div>

				<div className='md:w-2/3 text-center md:text-left'>
					<p className='text-lg mb-4'>Passionate about technology, software development, and building high-quality digital products.</p>

					<p className='mb-6'>
						Here you&apos;ll find a selection of professional work, side projects, explorations in crypto and blockchain, my journey as a DJ, and
						experiences shaped by travel, curiosity, and constant learning.
					</p>

					<p className='text-gray-800'>Feel free to explore and connect.</p>

					<div className='mt-6 flex flex-wrap gap-4 justify-center md:justify-start'>
						{socialLinks.map((link) => (
							<a
								className={`flex items-center gap-2 px-4 py-2 rounded-md text-white transition-colors ${link.className}`}
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
