import { useCallback } from 'react';

export const useCardHover = (intensity: number = 0.1) => {
	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			const card = e.currentTarget;
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			// Apply movement with configurable intensity
			const moveX = x * intensity;
			const moveY = y * intensity;

			card.style.transform = `translate(${moveX}px, ${moveY}px)`;
		},
		[intensity]
	);

	const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;

		card.style.transform = 'translate(0px, 0px)';
	}, []);

	return { handleMouseMove, handleMouseLeave };
};
