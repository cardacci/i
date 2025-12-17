import { FC, ReactNode } from 'react';

/* ===== Types & Interfaces ===== */
interface SectionTitleProps {
	children: ReactNode;
	className?: string;
	level?: 'h2' | 'h3' | 'h4';
}

const SectionTitle: FC<SectionTitleProps> = (props) => {
	const { children, className = '', level = 'h3' } = props;

	/* ===== Constants & Variables ===== */
	const baseClasses = 'font-semibold text-gray-800 mb-4';
	const Component = level;
	const sizeClasses = {
		h2: 'text-2xl',
		h3: 'text-xl',
		h4: 'text-lg'
	};

	return <Component className={`${baseClasses} ${sizeClasses[level]} ${className}`}>{children}</Component>;
};

export default SectionTitle;
