import { FC, ReactNode } from 'react';

/* ===== Types & Interfaces ===== */
interface BaseViewProps {
	children: ReactNode;
	id: string;
	title?: string;
}

const BaseView: FC<BaseViewProps> = (props) => {
	const { children, id, title } = props;

	return (
		<section className='mx-4 sm:mx-auto' id={id}>
			{title && <h1 className='text-3xl font-bold mb-6 text-blue-800 text-center md:text-left'>{title}</h1>}

			{children}
		</section>
	);
};

export default BaseView;
