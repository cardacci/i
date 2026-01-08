import { FC } from 'react';

import { ContentCard, SectionTitle } from '@/components/common';
import { books, Book } from '@/utils/constants';

const BookCard: FC<{ book: Book }> = (props) => {
	const { book } = props;
	const { author, coverPath, genre, title, year } = book;

	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
			<div className='aspect-w-2 aspect-h-3 bg-gray-200'>
				<img alt={`${title} cover`} className='w-full h-full object-cover' decoding='async' loading='lazy' src={coverPath} />
			</div>

			<div className='p-4'>
				<h3 className='font-semibold text-lg mb-2 line-clamp-2'>{title}</h3>

				<p className='text-gray-600 mb-1'>by {author}</p>

				<p className='text-sm text-gray-500 mb-2'>{year}</p>

				<span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2'>{genre}</span>
			</div>
		</div>
	);
};

const Books: FC = () => {
	return (
		<ContentCard>
			<SectionTitle level='h2'>Books I've Read</SectionTitle>

			<p className='mb-6 text-gray-600'>
				A collection of books that have influenced my thinking and career. I enjoy reading about technology, business, economics, and personal
				development.
			</p>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
				{books.map((book, index) => (
					<BookCard book={book} key={index} />
				))}
			</div>
		</ContentCard>
	);
};

export default Books;
