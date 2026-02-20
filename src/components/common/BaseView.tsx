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
		<section className='mx-4 sm:mx-auto animate-fade-in' id={id}>
			{title && (
				<div className='mb-8 text-center md:text-left'>
					<h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text pb-1 text-transparent tracking-tight'>
						{title}
					</h1>
					<div className='mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto md:mx-0' />
				</div>
			)}

			{children}
		</section>
	);
};

export default BaseView;
