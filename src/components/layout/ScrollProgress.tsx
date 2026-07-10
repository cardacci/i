/* ===== Imports ===== */
import { useEffect, useRef } from 'react';

/* ===== Component Function ===== */
const ScrollProgress = () => {
	/* ===== Refs ===== */
	const barRef = useRef<HTMLDivElement>(null);

	/* ===== Effects ===== */
	useEffect(() => {
		// Modern browsers animate the bar with a CSS scroll-driven animation
		// (see .scroll-progress in tailwind.css). This JS fallback only runs
		// where animation-timeline is not supported.
		if (typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()')) {
			return;
		}

		const bar = barRef.current;

		if (!bar) {
			return;
		}

		let animationFrame = 0;

		const updateProgress = () => {
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

			bar.style.transform = `scaleX(${progress})`;
		};

		const handleScroll = () => {
			cancelAnimationFrame(animationFrame);
			animationFrame = requestAnimationFrame(updateProgress);
		};

		updateProgress();
		window.addEventListener('resize', handleScroll, { passive: true });
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener('resize', handleScroll);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	/* ===== JSX Return ===== */
	return <div aria-hidden='true' className='scroll-progress' ref={barRef} />;
};

/* ===== Exports ===== */
export default ScrollProgress;
