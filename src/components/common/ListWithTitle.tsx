import React from 'react';

import { SectionTitle } from '@/components/common';

/* ===== Types & Interfaces ===== */
interface ListWithTitleProps {
	className?: string;
	items: string[];
	ordered?: boolean;
	title: string;
}

const ListWithTitle: React.FC<ListWithTitleProps> = (props) => {
	const { className = '', items, ordered = false, title } = props;

	/* ===== Constants & Variables ===== */
	const ListComponent = ordered ? 'ol' : 'ul';

	return (
		<div className={className}>
			<SectionTitle level='h3'>{title}</SectionTitle>

			<ListComponent className={`${ordered ? 'list-decimal' : 'list-disc'} pl-5 space-y-2`}>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ListComponent>
		</div>
	);
};

export default ListWithTitle;
