/* ===== Imports ===== */
import React from 'react';

import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const Frontend: React.FC = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h2'>Frontend System Design</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Explorations in frontend system design, component architecture, and modern UI patterns.
			</p>

			<div className='p-8 border-2 border-dashed border-gray-300 rounded-lg text-center'>
				<p className='text-gray-400 text-lg'>Content coming soon</p>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default Frontend;
