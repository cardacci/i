/* ===== Imports ===== */
import { ReactNode, useEffect, useRef, useState } from 'react';

/* ===== Constants & Enums ===== */
const DIRECTION_CLASSES: Record<RevealDirection, string> = {
	fade: '',
	left: 'reveal-left',
	right: 'reveal-right',
	scale: 'reveal-scale',
	up: 'reveal-up'
};

/* ===== Types & Interfaces ===== */
type RevealDirection = 'fade' | 'left' | 'right' | 'scale' | 'up';

interface RevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: RevealDirection;
	threshold?: number;
}

/* ===== Component Function ===== */
const Reveal = ({ children, className = '', delay = 0, direction = 'up', threshold = 0.15 }: RevealProps) => {
	/* ===== State ===== */
	const [isVisible, setIsVisible] = useState(false);

	/* ===== Refs ===== */
	const elementRef = useRef<HTMLDivElement>(null);

	/* ===== Effects ===== */
	useEffect(() => {
		const element = elementRef.current;

		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '0px 0px -10% 0px', threshold }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [threshold]);

	/* ===== JSX Return ===== */
	return (
		<div
			className={`reveal ${DIRECTION_CLASSES[direction]} ${isVisible ? 'is-visible' : ''} ${className}`}
			ref={elementRef}
			style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
};

/* ===== Exports ===== */
export default Reveal;
export type { RevealDirection, RevealProps };
