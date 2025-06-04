import React from 'react';

interface BaseViewProps {
	children: React.ReactNode;
	className?: string;
	id: string;
	title: string;
}

const BaseView: React.FC<BaseViewProps> = (props) => {
	const { children, className = '', id, title } = props;

	return (
		<section className={`py-6 max-w-5xl mx-auto ${className}`} id={id}>
			<h1 className="text-3xl font-bold mb-6 text-blue-800 text-center md:text-left">
				{title}
			</h1>
			{children}
		</section>
	);
};

export default BaseView;
