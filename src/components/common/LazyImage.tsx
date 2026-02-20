import { CSSProperties, useEffect, useRef, useState } from 'react';

import ImageWithModal from '@/components/common/ImageWithModal';

/**
 * Lazy Image Component with Intersection Observer.
 * Only loads images when they're about to become visible.
 */
interface LazyImageProps {
	alt: string;
	className?: string;
	imgStyle?: CSSProperties;
	maxWidth?: string;
	photos?: string[];
	src: string;
	title?: string;
}

const LazyImage = (props: LazyImageProps) => {
	const { alt, className, imgStyle, maxWidth, photos, src, title } = props;

	/* ===== State ===== */
	const [isLoaded, setIsLoaded] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	/* ===== Refs ===== */
	const imgRef = useRef<HTMLDivElement>(null);

	/* ===== Effects ===== */
	// Mount - Setup Intersection Observer
	useEffect(() => {
		// Check if IntersectionObserver is supported
		if (!('IntersectionObserver' in window)) {
			// Fallback: immediately show images if IntersectionObserver not supported
			setIsVisible(true);

			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{
				root: null, // Use viewport as root
				rootMargin: '200px 0px', // Start loading 200px before entering viewport
				threshold: 0 // Trigger as soon as even 1px is visible
			}
		);

		const currentRef = imgRef.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	// Preload image when visible
	useEffect(() => {
		if (!isVisible || !src) {
			return;
		}

		const img = new Image();

		img.onload = () => setIsLoaded(true);
		img.onerror = () => setIsLoaded(true); // Show even on error to avoid infinite loading
		img.src = src;

		// Cleanup
		return () => {
			img.onload = null;
			img.onerror = null;
		};
	}, [isVisible, src]);

	return (
		<div className='w-full h-full' ref={imgRef}>
			{isVisible ? (
				<>
					{/* Loading placeholder with smooth transition */}
					{!isLoaded && (
						<div className='absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-pulse'>
							<span className='text-3xl opacity-30'>📸</span>
						</div>
					)}

					<div className={`w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
						<ImageWithModal
							alt={alt}
							className={className}
							imgStyle={imgStyle}
							maxWidth={maxWidth}
							photos={photos}
							src={src}
							title={title}
						/>
					</div>
				</>
			) : (
				<div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'>
					<span className='text-3xl opacity-30'>📸</span>
				</div>
			)}
		</div>
	);
};

export default LazyImage;
