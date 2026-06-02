/* ===== Imports ===== */
import { LuServer } from 'react-icons/lu';

import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const Backend = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h2'>Backend System Design</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Explorations in backend system design, architecture patterns, and scalable server-side solutions.
			</p>

			<div className='relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-8 py-16 text-center'>
				{/* Ambient glow */}
				<div aria-hidden='true' className='pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl' />

				<div className='relative flex flex-col items-center'>
					<span className='flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30'>
						<LuServer className='w-8 h-8' />
					</span>

					<h3 className='mt-6 text-xl font-semibold text-slate-800'>Content coming soon</h3>

					<p className='mt-2 max-w-md text-sm text-slate-500 leading-relaxed'>
						I&apos;m currently crafting in-depth write-ups on distributed systems, API design, and scalable architecture. Check back
						shortly.
					</p>

					<span className='mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-600 ring-1 ring-blue-100 shadow-sm'>
						<span className='relative flex h-2 w-2'>
							<span className='absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping' />
							<span className='relative inline-flex h-2 w-2 rounded-full bg-blue-500' />
						</span>
						In progress
					</span>
				</div>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default Backend;
