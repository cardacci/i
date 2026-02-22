/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const RenderingPatterns = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Rendering Patterns</SectionTitle>

			<p className='mb-4 text-gray-600'>
				CSR, SSR, SSG, ISR, streaming SSR, progressive and partial hydration, and React Server Components. Trade-offs in terms of
				TTFB, FCP, TTI, and SEO.
			</p>

			<div className='rounded-lg border-2 border-dashed border-gray-300 p-8 text-center'>
				<p className='text-lg text-gray-400'>Content coming soon</p>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default RenderingPatterns;
