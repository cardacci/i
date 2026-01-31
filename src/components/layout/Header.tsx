import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
	/* ===== State ===== */
	const [scrolled, setScrolled] = useState(false);
	const [typedText, setTypedText] = useState('');
	const [visible, setVisible] = useState(false);

	/* ===== Constants & Variables ===== */
	const textToType = 'Welcome';

	/* ===== Effects ===== */
	// Mount
	useEffect(() => {
		let currentIndex = 0;

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
			className={`fixed w-full top-0 z-40 transition-all duration-500 ease-out ${
				scrolled
					? 'py-2 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-lg shadow-lg shadow-blue-900/20'
					: 'py-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900'
			} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
		>
			{/* Subtle animated gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-blue-600/10 opacity-50' />

			{/* Decorative line at bottom */}
			<div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent' />

			<div className='container mx-auto px-4 flex items-center justify-between relative'>
				{/* Title with responsive margin to avoid hamburger overlap */}
				<div className='ml-12 md:ml-16 flex-1'>
					<h1 className='font-bold text-xl md:text-3xl transition-all duration-300'>
						<span className='bg-gradient-to-r from-cyan-300 via-blue-200 to-violet-300 bg-clip-text text-transparent drop-shadow-sm'>
							Gabriel Cardacci
						</span>
						<span className='block text-xs md:text-sm font-light mt-1.5 text-blue-200/80 tracking-wide'>
							Principal Frontend Engineer • Software Engineer • Investor • Crypto Enthusiast • World Explorer • DJ
						</span>
					</h1>
				</div>

				{/* Typing animation effect */}
				<div className='hidden md:flex items-center'>
					<div className='px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm'>
						<span className='text-blue-200/90 font-mono text-base relative pr-1 tracking-wider'>
							{typedText}
							<span className='absolute right-0 top-0 h-full w-0.5 bg-cyan-400 animate-pulse rounded-full'></span>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
