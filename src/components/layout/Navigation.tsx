import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
	return (
		<nav className="bg-gray-100 shadow-sm">
			<div className="container mx-auto px-4 py-3">
				<ul className="flex flex-wrap gap-4 md:gap-8">
					<li>
						<Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">
							Home
						</Link>
					</li>
					<li>
						<Link to="/resume" className="text-gray-800 hover:text-blue-600 font-medium">
							Resume
						</Link>
					</li>
					<li>
						<Link to="/crypto" className="text-gray-800 hover:text-blue-600 font-medium">
							Crypto
						</Link>
					</li>
					<li>
						<Link to="/tech" className="text-gray-800 hover:text-blue-600 font-medium">
							Tech
						</Link>
					</li>
					<li>
						<Link to="/djing" className="text-gray-800 hover:text-blue-600 font-medium">
							DJing
						</Link>
					</li>
					<li>
						<Link to="/travel" className="text-gray-800 hover:text-blue-600 font-medium">
							Travel
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
