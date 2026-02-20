import { ReactNode } from 'react';

/* ===== Types & Interfaces ===== */
interface SectionTitleProps {
	children: ReactNode;
	className?: string;
	level?: 'h2' | 'h3' | 'h4';
}

const SectionTitle = (props: SectionTitleProps) => {
	const { children, className = '', level = 'h3' } = props;

	/* ===== Constants & Variables ===== */
	const baseClasses = 'font-semibold text-slate-800 mb-4 tracking-tight';
	const Component = level;
	const sizeClasses = {
		h2: 'text-2xl',
		h3: 'text-xl',
		h4: 'text-lg'
	};

	return (
		<Component className={`${baseClasses} ${sizeClasses[level]} ${className}`}>
			<span className='relative'>
				{children}
				<span className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full' />
			</span>
		</Component>
	);
};

export default SectionTitle;
