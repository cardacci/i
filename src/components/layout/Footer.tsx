import React from 'react';

const Footer: React.FC = () => {
	// Use the BUILD_TIMESTAMP created during build time.
	const appVersion = import.meta.env.VITE_BUILD_TIMESTAMP;

	return (
		<footer className="bg-gray-800 text-white py-2 px-4 mt-auto">
			<div className="container mx-auto h-full">
				<div className="flex flex-col sm:flex-row justify-between items-center h-full">
					<div className="text-sm">
						&copy; {new Date().getFullYear()} Gabriel Cardacci. All rights reserved.
					</div>
					<div className="text-xs text-gray-400 mt-1 sm:mt-0 sm:ml-4">v{appVersion}</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
