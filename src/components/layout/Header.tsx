import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);
	const [visible, setVisible] = useState(false);
	const [typedText, setTypedText] = useState('');

	const textToType = 'Welcome';

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		// Show header with animation after a brief delay for better visibility.
		const timer = setTimeout(() => {
			setVisible(true);
		}, 300);

		// Add scroll event to change header appearance when scrolling.
		window.addEventListener('scroll', handleScroll);

		// Reset typed text whenever the effect runs.
		setTypedText('');

		// Typing effect with fixed timing.
		let currentIndex = 0;
		const typeWriter = setInterval(() => {
			if (currentIndex < textToType.length) {
				setTypedText(textToType.substring(0, currentIndex + 1));
				currentIndex++;
			} else {
				clearInterval(typeWriter);
			}
		}, 150);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(timer);
			clearInterval(typeWriter);
		};
	}, []);

	return (
		<header
			className={`fixed w-full top-0 z-50 transition-all duration-700 ease-in-out ${
				scrolled ? 'bg-blue-900 shadow-lg py-2' : 'bg-blue-800 py-4'
			} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
		>
			<div className="container mx-auto px-4 flex items-center justify-between">
				<h1 className="text-white font-bold text-3xl transition-all duration-300">
					Gabriel Cardacci
					<span className="block text-sm font-light mt-1 text-blue-200 opacity-90">
						Principal Frontend Engineer | CS Engineer | Investor | Crypto Enthusiast |
						World Explorer | DJ
					</span>
				</h1>

				{/* Typing animation effect */}
				<div className="hidden md:flex items-center">
					<span className="text-blue-200 font-mono text-lg relative pr-1">
						{typedText}
						<span className="absolute right-0 top-0 h-full w-0.5 bg-blue-200 animate-blink"></span>
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
