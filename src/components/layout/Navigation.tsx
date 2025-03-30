import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/resume">Resume</Link>
				</li>
				<li>
					<Link to="/crypto">Crypto</Link>
				</li>
				<li>
					<Link to="/tech">Tech</Link>
				</li>
				<li>
					<Link to="/djing">DJing</Link>
				</li>
				<li>
					<Link to="/travel">Travel</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
