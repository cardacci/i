import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';

const Home: React.FC = () => {
	return (
		<div>
			<Header />
			<Navigation />
			<main>
				<h1>Welcome to my personal website</h1>
				<p>
					Hello, I'm Gabriel Cardacci, passionate about technology, programming, DJing
					and traveling.
				</p>
				<section>
					<h2>About me</h2>
					<p>
						Here you can find information about my experiences, skills and
						projects.
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
