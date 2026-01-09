import animalFarm from '@/assets/images/books/animal-farm.png';
import liderazgoExitoso from '@/assets/images/books/liderazgo-exitoso.png';
import neverSplitTheDifference from '@/assets/images/books/never-split-the-difference.png';
import richDadPoorDad from '@/assets/images/books/rich-dad-poor-dad.png';
import theIntelligentInvestor from '@/assets/images/books/the-intelligent-investor.png';
import theMysteryOfTheYellowRoom from '@/assets/images/books/the-mystery-of-the-yellow-room.png';
import theWrongMan from '@/assets/images/books/the-wrong-man.png';
import thinkingFastAndSlow from '@/assets/images/books/thinking-fast-and-slow.png';

/* ===== Constants & Enums ===== */
enum BookGenre {
	Allegory = 'Allegory',
	BusinessEconomics = 'Business & Economics',
	DetectiveFiction = 'Detective fiction',
	DystopianFiction = 'Dystopian Fiction',
	Fable = 'Fable',
	FantasyFiction = 'Fantasy Fiction',
	Fiction = 'Fiction',
	Finance = 'Finance',
	Leadership = 'Leadership',
	Mystery = 'Mystery',
	Negotiation = 'Negotiation',
	NonFiction = 'Non-fiction',
	Novel = 'Novel',
	Novella = 'Novella',
	PersonalFinance = 'Personal finance',
	PoliticalSatire = 'Political Satire',
	PsychologicalFiction = 'Psychological Fiction',
	Psychology = 'Psychology',
	Reference = 'Reference work',
	RomanAClef = 'Roman à clef',
	Satire = 'Satire',
	SelfHelp = 'Self-help',
	Suspense = 'Suspense',
	Thriller = 'Thriller'
}

export interface Book {
	author: string[];
	coverPath: string;
	genre: BookGenre[];
	title: string;
	year: number;
}

const unsortedBooks: Book[] = [
	{
		title: 'The Intelligent Investor',
		author: ['Benjamin Graham'],
		year: 1949,
		genre: [BookGenre.BusinessEconomics],
		coverPath: theIntelligentInvestor
	},
	{
		title: 'Thinking, Fast and Slow',
		author: ['Daniel Kahneman'],
		year: 2011,
		genre: [BookGenre.NonFiction, BookGenre.Psychology],
		coverPath: thinkingFastAndSlow
	},
	{
		title: 'The Wrong Man',
		author: ['John Katzenbach'],
		year: 2006,
		genre: [BookGenre.PsychologicalFiction, BookGenre.Suspense, BookGenre.Thriller],
		coverPath: theWrongMan
	},
	{
		title: 'Rich Dad Poor Dad',
		author: ['Robert Kiyosaki'],
		year: 1997,
		genre: [BookGenre.NonFiction, BookGenre.PersonalFinance],
		coverPath: richDadPoorDad
	},
	{
		title: 'The Mystery of the Yellow Room',
		author: ['Gaston Leroux'],
		year: 1907,
		genre: [BookGenre.DetectiveFiction, BookGenre.FantasyFiction, BookGenre.Mystery, BookGenre.Novel],
		coverPath: theMysteryOfTheYellowRoom
	},
	{
		title: 'Animal Farm',
		author: ['George Orwell'],
		year: 1945,
		genre: [
			BookGenre.Allegory,
			BookGenre.DystopianFiction,
			BookGenre.Fable,
			BookGenre.Novella,
			BookGenre.PoliticalSatire,
			BookGenre.RomanAClef,
			BookGenre.Satire
		],
		coverPath: animalFarm
	},
	{
		title: 'Liderazgo exitoso',
		author: ['Bernardo Stamateas'],
		year: 2021,
		genre: [BookGenre.Leadership],
		coverPath: liderazgoExitoso
	},
	{
		title: 'Never Split the Difference',
		author: ['Christopher Voss', 'Tahl Raz'],
		year: 2016,
		genre: [BookGenre.Reference, BookGenre.SelfHelp],
		coverPath: neverSplitTheDifference
	}
];

export const books: Book[] = unsortedBooks.sort((a, b) => {
	const lastNameA = a.author[0].split(' ').pop() || '';
	const lastNameB = b.author[0].split(' ').pop() || '';

	return lastNameA.localeCompare(lastNameB);
});
