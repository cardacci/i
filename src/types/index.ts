export interface PersonalInfo {
	name: string;
	title: string;
	bio: string;
	email: string;
	phone: string;
	location: string;
}

export interface Experience {
	jobTitle: string;
	company: string;
	startDate: string;
	endDate: string;
	responsibilities: string[];
}

export interface Education {
	degree: string;
	institution: string;
	graduationYear: number;
}

export interface Project {
	title: string;
	description: string;
	technologies: string[];
	link?: string;
}

export interface CryptoInfo {
	name: string;
	symbol: string;
	marketCap: number;
	price: number;
	changePercentage: number;
}

export interface TechArticle {
	title: string;
	content: string;
	author: string;
	date: string;
}

export interface DJingExperience {
	event: string;
	location: string;
	date: string;
	description: string;
}

export interface TravelDestination {
	place: string;
	country: string;
	visitDate: string;
	highlights: string[];
}
