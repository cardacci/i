import { ReactNode } from 'react';

/* ===== Types & Interfaces ===== */
interface ContentCardProps {
	children: ReactNode;
	className?: string;
}

const ContentCard = (props: ContentCardProps) => {
	const { children, className = '' } = props;

	return (
		<div
			className={`bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:shadow-xl ${className}`}
		>
			{children}
		</div>
	);
};

export default ContentCard;
