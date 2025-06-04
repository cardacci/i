export enum SocialNetwork {
	GITHUB = 'github',
	INSTAGRAM = 'instagram',
	LINKEDIN = 'linkedin',
	YOUTUBE = 'youtube',
}

export interface SocialLinkData {
	className: string;
	icon?: React.ReactNode;
	name: string;
	url: string;
}

export type SocialLinksConfig = Record<SocialNetwork, SocialLinkData>;
