import React from 'react';

interface CardProps {
	title: string;
	content: string;
	imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
	return (
		<div className="card">
			{imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
			<h3 className="card-title">{title}</h3>
			<p className="card-content">{content}</p>
		</div>
	);
};

export default Card;
