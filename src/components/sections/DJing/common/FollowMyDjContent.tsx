import { SectionTitle } from '@/components/common';
import { SocialNetwork } from '@/utils/constants/socialNetworks';
import { useSocialLinks } from '@/utils/hooks';

const FollowMyDjContent = () => {
	const { socialLinks } = useSocialLinks([SocialNetwork.YOUTUBE]);
	return (
		<div className='mt-12 pt-8 border-t border-[#A3FFD6]/20 flex flex-col items-center'>
			<SectionTitle className='text-center' level='h3'>
				<span className='text-white flex items-center gap-2 justify-center'>
					<span className='text-xl'>📡</span> Follow my DJ content on
				</span>
			</SectionTitle>

			<div className='flex flex-wrap items-center gap-4 justify-center'>
				{socialLinks.map((link) => (
					<a
						className='flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300'
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
	);
};

export default FollowMyDjContent;
