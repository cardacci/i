import { FC } from 'react';

import { ContentCard, SectionTitle } from '@/components/common';
import { books, Book } from '@/utils/constants';

const BookCard: FC<{ book: Book }> = (props) => {
	const { book } = props;
	const { author, coverPath, genre, title, year } = book;

	return (
		<div className='group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100'>
			<div className='aspect-w-2 aspect-h-3 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden'>
				<img
					alt={`${title} cover`}
					className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
					decoding='async'
					loading='lazy'
					src={coverPath}
				/>
			</div>

			<div className='p-4'>
				<h3 className='font-semibold text-base mb-2 line-clamp-2 text-slate-800 group-hover:text-blue-600 transition-colors'>
					{title}
				</h3>

				<p className='text-slate-600 text-sm mb-1'>by {author.join(' and ')}</p>

				<p className='text-xs text-slate-400 mb-3 font-medium'>{year}</p>

				<div className='flex flex-wrap gap-1'>
					{genre.map((g, index) => (
						<span
							className='inline-block bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium border border-blue-100/50'
							key={index}
						>
							{g}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

const Books: FC = () => {
	return (
		<ContentCard>
			<SectionTitle level='h2'>Books I've Read</SectionTitle>

			<p className='mb-8 text-slate-600 text-lg leading-relaxed'>
				A collection of books that have influenced my thinking and career. I enjoy reading about technology, economics, and personal
				development.
			</p>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
				{books.map((book, index) => (
					<BookCard book={book} key={index} />
				))}
			</div>
		</ContentCard>
	);
};

export default Books;
