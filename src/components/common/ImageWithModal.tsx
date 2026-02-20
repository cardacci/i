import { CSSProperties, MouseEvent, useState, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { KEYBOARD_KEYS } from '@/utils/constants/keyboard';

/* ===== Types & Interfaces ===== */
interface ImageWithModalProps {
	alt: string;
	className?: string;
	imgStyle?: CSSProperties;
	maxWidth?: string;
	photos?: string[]; // Array of photo URLs for multiple images.
	src: string; // First photo to display (thumbnail).
	title?: string;
}

const ImageWithModal = (props: ImageWithModalProps) => {
	const { src, alt, className = '', maxWidth = 'max-w-xl', title, imgStyle, photos } = props;

	/* ===== State ===== */
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
	const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0])); // Track loaded images

	/* ===== Constants & Variables ===== */
	const allPhotos = photos && photos.length > 0 ? photos : [src]; // Use photos array if provided, otherwise use single src
	const baseClasses = `w-full ${maxWidth} h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity`;
	const hasMultiplePhotos = allPhotos.length > 1;

	/* ===== Functions ===== */
	const handleNext = (event: KeyboardEvent | MouseEvent) => {
		event.stopPropagation();
		const nextIndex = (currentPhotoIndex + 1) % allPhotos.length;
		setCurrentPhotoIndex(nextIndex);
		// Mark next image as loaded
		setLoadedImages((prev) => new Set(prev).add(nextIndex));
	};

	const handlePrevious = (event: KeyboardEvent | MouseEvent) => {
		event.stopPropagation();
		const prevIndex = currentPhotoIndex === 0 ? allPhotos.length - 1 : currentPhotoIndex - 1;
		setCurrentPhotoIndex(prevIndex);
		// Mark previous image as loaded
		setLoadedImages((prev) => new Set(prev).add(prevIndex));
	};

	/* ===== Effects ===== */
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isModalOpen) return;

			if (event.key === KEYBOARD_KEYS.ESCAPE) {
				setIsModalOpen(false);
			} else if (event.key === KEYBOARD_KEYS.ARROW_LEFT && hasMultiplePhotos) {
				handlePrevious(event);
			} else if (event.key === KEYBOARD_KEYS.ARROW_RIGHT && hasMultiplePhotos) {
				handleNext(event);
			}
		};

		if (isModalOpen) {
			document.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [currentPhotoIndex, hasMultiplePhotos, isModalOpen]);

	// Reset to first photo when modal opens.
	useEffect(() => {
		if (isModalOpen) {
			setCurrentPhotoIndex(0);
			// Prevent body scroll when modal is open
			document.body.style.overflow = 'hidden';
		} else {
			// Restore body scroll when modal closes
			document.body.style.overflow = '';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = '';
		};
	}, [isModalOpen]);

	return (
		<>
			<div className='flex justify-center items-center h-full w-full'>
				<img alt={alt} className={`${baseClasses} ${className}`} onClick={() => setIsModalOpen(true)} src={src} style={imgStyle} />
			</div>

			{/* Modal - Using Portal to render at document body level */}
			{isModalOpen &&
				createPortal(
					<div
						className='fixed inset-0 flex items-center justify-center bg-black/85'
						onClick={() => setIsModalOpen(false)}
						style={{
							bottom: 0,
							left: 0,
							position: 'fixed',
							right: 0,
							top: 0,
							zIndex: 99999
						}}
					>
						<div className='relative w-[95vw] max-w-6xl max-h-[90vh] p-4' onClick={(e) => e.stopPropagation()}>
							{title && (
								<div className='text-center mb-4'>
									<h2 className='text-white text-xl font-semibold'>{title}</h2>
								</div>
							)}

							{/* Image Container */}
							<div className='relative'>
								<img
									alt={`${alt} - Full Size ${currentPhotoIndex + 1}/${allPhotos.length}`}
									className='w-full h-auto max-h-[85vh] object-contain rounded-lg'
									src={allPhotos[currentPhotoIndex]}
								/>

								{/* Navigation Arrows - Only show if multiple photos */}
								{hasMultiplePhotos && (
									<>
										{/* Previous Button */}
										<button
											aria-label='Previous photo'
											className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500'
											onClick={handlePrevious}
											type='button'
										>
											<svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
												<path d='M15 19l-7-7 7-7' strokeLinecap='round' strokeLinejoin='round' />
											</svg>
										</button>

										{/* Next Button */}
										<button
											aria-label='Next photo'
											className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500'
											onClick={handleNext}
											type='button'
										>
											<svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
												<path d='M9 5l7 7-7 7' strokeLinecap='round' strokeLinejoin='round' />
											</svg>
										</button>

										{/* Photo Counter */}
										<div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium'>
											{currentPhotoIndex + 1} / {allPhotos.length}
										</div>
									</>
								)}
							</div>

							{/* Close Button */}
							<button
								aria-label='Close modal'
								className='absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500'
								onClick={() => setIsModalOpen(false)}
								type='button'
							>
								<svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
									<path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' />
								</svg>
							</button>

							{/* Preload adjacent images for smooth navigation */}
							{hasMultiplePhotos && (
								<div className='hidden'>
									{loadedImages.has(currentPhotoIndex) && (
										<>
											{/* Preload next image */}
											{currentPhotoIndex < allPhotos.length - 1 && (
												<img alt='preload' src={allPhotos[currentPhotoIndex + 1]} />
											)}
											{/* Preload previous image */}
											{currentPhotoIndex > 0 && <img alt='preload' src={allPhotos[currentPhotoIndex - 1]} />}
										</>
									)}
								</div>
							)}
						</div>
					</div>,
					document.body
				)}
		</>
	);
};

export default ImageWithModal;
