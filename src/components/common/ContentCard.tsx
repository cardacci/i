import { FC, ReactNode } from 'react';

/* ===== Types & Interfaces ===== */
interface ContentCardProps {
	children: ReactNode;
	className?: string;
}

const ContentCard: FC<ContentCardProps> = (props) => {
	const { children, className = '' } = props;

	return <div className={`bg-white p-6 rounded-lg ${className}`}>{children}</div>;
};

export default ContentCard;
