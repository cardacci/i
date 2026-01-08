import animalFarm from '@/assets/images/books/animal-farm.png';
import liderazgoExitoso from '@/assets/images/books/liderazgo-exitoso.png';
import richDadPoorDad from '@/assets/images/books/rich-dad-poor-dad.png';
import theIntelligentInvestor from '@/assets/images/books/the-intelligent-investor.png';
import theMysteryOfTheYellowRoom from '@/assets/images/books/the-mystery-of-the-yellow-room.png';
import theWrongMan from '@/assets/images/books/the-wrong-man.png';
import thinkingFastAndSlow from '@/assets/images/books/thinking-fast-and-slow.png';

/* ===== Constants & Enums ===== */
enum BookGenre {
	Fiction = 'Fiction',
	Finance = 'Finance',
	Leadership = 'Leadership',
	Mystery = 'Mystery',
	PoliticalSatire = 'Political Satire',
	Psychology = 'Psychology'
}

export interface Book {
	author: string;
	coverPath: string;
	genre: BookGenre;
	title: string;
	year: number;
}

const unsortedBooks: Book[] = [
	{
		title: 'The Intelligent Investor',
		author: 'Benjamin Graham',
		year: 1949,
		genre: BookGenre.Finance,
		coverPath: theIntelligentInvestor
	},
	{
		title: 'Thinking, Fast and Slow',
		author: 'Daniel Kahneman',
		year: 2011,
		genre: BookGenre.Psychology,
		coverPath: thinkingFastAndSlow
	},
	{
		title: 'The Wrong Man',
		author: 'John Katzenbach',
		year: 2006,
		genre: BookGenre.Fiction,
		coverPath: theWrongMan
	},
	{
		title: 'Rich Dad Poor Dad',
		author: 'Robert Kiyosaki',
		year: 1997,
		genre: BookGenre.Finance,
		coverPath: richDadPoorDad
	},
	{
		title: 'The Mystery of the Yellow Room',
		author: 'Gaston Leroux',
		year: 1907,
		genre: BookGenre.Mystery,
		coverPath: theMysteryOfTheYellowRoom
	},
	{
		title: 'Animal Farm',
		author: 'George Orwell',
		year: 1945,
		genre: BookGenre.PoliticalSatire,
		coverPath: animalFarm
	},
	{
		title: 'Liderazgo exitoso',
		author: 'Bernardo Stamateas',
		year: 2021,
		genre: BookGenre.Leadership,
		coverPath: liderazgoExitoso
	}
];

export const books: Book[] = unsortedBooks.sort((a, b) => {
	const lastNameA = a.author.split(' ').pop() || '';
	const lastNameB = b.author.split(' ').pop() || '';

	return lastNameA.localeCompare(lastNameB);
});
