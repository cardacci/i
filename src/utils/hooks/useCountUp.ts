import { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 up to `target` with an ease-out curve once the returned
 * element becomes visible. Respects prefers-reduced-motion by jumping
 * straight to the final value.
 */
export const useCountUp = (target: number, durationMs: number = 1400) => {
	/* ===== State ===== */
	const [value, setValue] = useState(0);

	/* ===== Refs ===== */
	const elementRef = useRef<HTMLDivElement>(null);

	/* ===== Effects ===== */
	useEffect(() => {
		const element = elementRef.current;

		if (!element) {
			return;
		}

		let animationFrame = 0;

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const startCounting = () => {
			if (prefersReducedMotion) {
				setValue(target);

				return;
			}

			const startTime = performance.now();

			const tick = (now: number) => {
				const progress = Math.min((now - startTime) / durationMs, 1);
				// Ease-out cubic for a natural deceleration.
				const eased = 1 - Math.pow(1 - progress, 3);

				setValue(Math.round(eased * target));

				if (progress < 1) {
					animationFrame = requestAnimationFrame(tick);
				}
			};

			animationFrame = requestAnimationFrame(tick);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startCounting();
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.4 }
		);

		observer.observe(element);

		return () => {
			cancelAnimationFrame(animationFrame);
			observer.disconnect();
		};
	}, [durationMs, target]);

	return { elementRef, value };
};
