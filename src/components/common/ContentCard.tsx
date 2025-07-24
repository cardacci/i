import React from 'react';

interface ContentCardProps {
	children: React.ReactNode;
	className?: string;
}

const ContentCard: React.FC<ContentCardProps> = (props) => {
	const { children, className = '' } = props;

	return <div className={`bg-white p-6 rounded-lg ${className}`}>{children}</div>;
};

export default ContentCard;
