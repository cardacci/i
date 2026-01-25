import React, { useEffect, useRef, useState } from 'react';

import ImageWithModal from '@/components/common/ImageWithModal';

/**
 * Lazy Image Component with Intersection Observer.
 * Only loads images when they're about to become visible.
 */
interface LazyImageProps {
	alt: string;
	className?: string;
	imgStyle?: React.CSSProperties;
	maxWidth?: string;
	photos?: string[];
	src: string;
	title?: string;
}

const LazyImage: React.FC<LazyImageProps> = (props) => {
	const { alt, className, imgStyle, maxWidth, photos, src, title } = props;

	/* ===== State ===== */
	const [isLoaded, setIsLoaded] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	/* ===== Refs ===== */
	const imgRef = useRef<HTMLDivElement>(null);

	/* ===== Effects ===== */
	// Mount
	useEffect(() => {
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
				rootMargin: '100px' // Start loading 100px before the image enters viewport.
			}
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className='w-full h-full' ref={imgRef}>
			{isVisible ? (
				<>
					{/* Loading placeholder with smooth transition */}
					{!isLoaded && (
						<div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-pulse'>
							<span className='text-3xl opacity-30'>📸</span>
						</div>
					)}

					<div className={`w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
						<ImageWithModal alt={alt} className={className} imgStyle={imgStyle} maxWidth={maxWidth} photos={photos} src={src} title={title} />
					</div>

					{/* Hidden image to detect load completion with native lazy loading */}
					<img alt='' className='hidden' loading='lazy' onLoad={() => setIsLoaded(true)} src={src} />
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
