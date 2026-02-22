/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const DataFetching = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Data Fetching</SectionTitle>

			<p className='mb-4 text-gray-600'>
				REST vs GraphQL from a frontend perspective, caching strategies, optimistic updates, pagination patterns, real-time data
				with WebSockets and SSE, and retry handling.
			</p>

			<div className='rounded-lg border-2 border-dashed border-gray-300 p-8 text-center'>
				<p className='text-lg text-gray-400'>Content coming soon</p>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default DataFetching;
