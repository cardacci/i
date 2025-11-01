import React, { useState } from 'react';

/* ===== Types & Interfaces ===== */
interface ImageWithModalProps {
	alt: string;
	className?: string;
	maxWidth?: string;
	src: string;
}

const ImageWithModal: React.FC<ImageWithModalProps> = (props) => {
	const { src, alt, className = '', maxWidth = 'max-w-xl' } = props;

	/* ===== State ===== */
	const [isModalOpen, setIsModalOpen] = useState(false);

	/* ===== Constants & Variables ===== */
	const baseClasses = `w-full ${maxWidth} h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity`;

	return (
		<>
			<div className='flex justify-center'>
				<img alt={alt} className={`${baseClasses} ${className}`} onClick={() => setIsModalOpen(true)} src={src} />
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50'
					onClick={() => setIsModalOpen(false)}
				>
					<div className='w-[95vw] max-h-[90vh] p-4'>
						<img
							alt={`${alt} - Full Size`}
							className='w-full h-auto max-h-[85vh] object-contain rounded-lg'
							onClick={(e) => e.stopPropagation()}
							src={src}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default ImageWithModal;
