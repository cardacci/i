import React from 'react';

import { SectionTitle } from '@/utils/components';
import { SocialNetwork } from '@/utils/constants/socialNetworks';
import { useSocialLinks } from '@/utils/hooks';

const FollowMyDjContent: React.FC = () => {
	const { socialLinks } = useSocialLinks([SocialNetwork.YOUTUBE]);
	return (
		<div className='mt-12 pt-8 border-t border-gray-200 flex flex-col items-center'>
			<SectionTitle className='text-center' level='h3'>
				Follow my DJ content on
			</SectionTitle>

			<div className='flex flex-wrap items-center gap-4 justify-center'>
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
	);
};

export default FollowMyDjContent;
