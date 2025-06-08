import React from 'react';

const UnderConstruction: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center py-6 px-4 text-center border-2 border-dashed border-yellow-400 bg-yellow-50 rounded-lg mb-8'>
			<svg className='h-12 w-12 text-yellow-500 mb-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
				/>
			</svg>
			<h2 className='text-xl font-semibold text-gray-800 mb-1'>Under Construction</h2>
			<p className='text-gray-600 text-sm'>This section is currently being built. Check back soon for updates!</p>
		</div>
	);
};

export default UnderConstruction;
