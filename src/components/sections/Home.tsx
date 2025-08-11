import React from 'react';


import profileImage from '@/assets/images/profile.png';
import { BaseView, useSocialLinks, SocialNetwork } from '@/utils';
import { BaseView, useSocialLinks, SocialNetwork } from '@/utils';

const Home: React.FC = () => {
	/* ===== Hooks ===== */
	const { socialLinks } = useSocialLinks([SocialNetwork.GITHUB, SocialNetwork.INSTAGRAM, SocialNetwork.LINKEDIN, SocialNetwork.YOUTUBE]);

	/* ===== Hooks ===== */
	const { socialLinks } = useSocialLinks([SocialNetwork.GITHUB, SocialNetwork.INSTAGRAM, SocialNetwork.LINKEDIN, SocialNetwork.YOUTUBE]);

	return (
		<BaseView id='home' title='Welcome to My Personal Website'>
			<div className='flex flex-col md:flex-row items-center gap-8'>
				<div className='md:w-1/3 flex justify-center'>
		<BaseView id='home' title='Welcome to My Personal Website'>
			<div className='flex flex-col md:flex-row items-center gap-8'>
				<div className='md:w-1/3 flex justify-center'>
					<img
						alt='Gabriel Cardacci'
						className='rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-white ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300 hover:scale-105'
						alt='Gabriel Cardacci'
						className='rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-white ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300 hover:scale-105'
						src={profileImage}
					/>
				</div>

				<div className='md:w-2/3 text-center md:text-left'>
					<p className='text-lg mb-4'>
						Hello, I&apos;m <span className='font-semibold'>Gabriel Cardacci</span>, passionate about technology, programming, cryptocurrency, DJing
						and traveling.
				<div className='md:w-2/3 text-center md:text-left'>
					<p className='text-lg mb-4'>
						Hello, I&apos;m <span className='font-semibold'>Gabriel Cardacci</span>, passionate about technology, programming, cryptocurrency, DJing
						and traveling.
					</p>

					<p className='mb-6'>
						On this site, you&apos;ll find information about my professional experience, my projects in the cryptocurrency world, blockchain
						innovations, my DJ journey and music experiences, and my adventures around the globe.
					</p>

					<p className='text-gray-800 font-medium'>Explore and connect with me!</p>
					<p className='text-gray-800 font-medium'>Explore and connect with me!</p>

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
		</BaseView>
	);
};

export default Home;
