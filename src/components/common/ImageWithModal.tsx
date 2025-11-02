import React, { useState, useEffect } from 'react';

import { KEYBOARD_KEYS } from '@/utils/constants/keyboard';

/* ===== Types & Interfaces ===== */
interface ImageWithModalProps {
	alt: string;
	className?: string;
	maxWidth?: string;
	src: string;
	title?: string;
}

const ImageWithModal: React.FC<ImageWithModalProps> = (props) => {
	const { src, alt, className = '', maxWidth = 'max-w-xl', title } = props;

	/* ===== State ===== */
	const [isModalOpen, setIsModalOpen] = useState(false);

	/* ===== Effects ===== */
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === KEYBOARD_KEYS.ESCAPE && isModalOpen) {
				setIsModalOpen(false);
			}
		};

		if (isModalOpen) {
			document.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isModalOpen]);

	/* ===== Constants & Variables ===== */
	const baseClasses = `w-full ${maxWidth} h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity`;

	return (
		<>
			<div className='flex justify-center'>
				<img alt={alt} className={`${baseClasses} ${className}`} onClick={() => setIsModalOpen(true)} src={src} />
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50' onClick={() => setIsModalOpen(false)}>
					<div className='relative w-[95vw] max-h-[90vh] p-4'>
						{title && (
							<div className='text-center mb-4'>
								<h2 className='text-white text-xl font-semibold'>{title}</h2>
							</div>
						)}
						<img alt={`${alt} - Full Size`} className='w-full h-auto max-h-[85vh] object-contain rounded-lg' src={src} />
					</div>
				</div>
			)}
		</>
	);
};

export default ImageWithModal;
