import { Link } from 'react-router-dom';

import profileImage from '@/assets/images/profile_1.png';
import { BaseView } from '@/components/common';
import { SocialNetwork } from '@/utils/constants';
import { ROUTES } from '@/utils/constants/routes';
import { useSocialLinks } from '@/utils/hooks';

const Home = () => {
	/* ===== Hooks ===== */
	const { socialLinks } = useSocialLinks([SocialNetwork.GITHUB, SocialNetwork.INSTAGRAM, SocialNetwork.LINKEDIN, SocialNetwork.YOUTUBE]);

	return (
		<BaseView id='home'>
			<div className='flex flex-col md:flex-row items-center gap-10 md:gap-14'>
				{/* Profile Image */}
				<div className='md:w-1/3 flex justify-center'>
					<div
						className='relative group animate-scale-in'
						style={{ animationDelay: '80ms', animationFillMode: 'both' }}
					>
						{/* Offset gradient backdrop */}
						<div className='absolute -bottom-5 -right-5 w-full h-full rounded-[2rem] bg-gradient-to-br from-blue-500 to-violet-600 opacity-90 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1' />

						{/* Soft ambient glow */}
						<div className='absolute -inset-6 bg-gradient-to-br from-blue-400/30 to-violet-500/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500' />

						{/* Framed portrait */}
						<div className='relative p-1.5 rounded-[2rem] bg-gradient-to-br from-white to-slate-100 shadow-2xl shadow-blue-900/20'>
							<img
								alt='Gabriel Cardacci'
								className='rounded-[1.6rem] w-56 h-56 md:w-64 md:h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]'
								src={profileImage}
							/>
						</div>

						{/* Floating glass badge */}
						<div className='absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg shadow-slate-900/10 ring-1 ring-slate-200/80 whitespace-nowrap'>
							<span className='relative flex h-2 w-2'>
								<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping' />
								<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
							</span>
							<span className='text-xs font-semibold text-slate-700'>Available for work</span>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className='md:w-2/3 text-center md:text-left'>
					{/* Eyebrow */}
					<div
						className='inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-sm animate-slide-up'
						style={{ animationDelay: '120ms', animationFillMode: 'both' }}
					>
						<span className='relative flex h-2 w-2'>
							<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping' />
							<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
						</span>

						<span className='text-xs font-semibold tracking-wide text-slate-600 uppercase'>Senior Frontend Engineer</span>
					</div>

					{/* Headline */}
					<h1
						className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5 animate-slide-up'
						style={{ animationDelay: '200ms', animationFillMode: 'both' }}
					>
						<span className='bg-gradient-to-r from-slate-900 via-blue-800 to-violet-700 bg-clip-text text-transparent'>
							Building high-quality digital products for the web.
						</span>
					</h1>

					<p
						className='text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-slide-up'
						style={{ animationDelay: '280ms', animationFillMode: 'both' }}
					>
						Here you&apos;ll find a selection of professional work, side projects, explorations in crypto and blockchain, my
						journey as a DJ, and experiences shaped by travel, curiosity, and constant learning.
					</p>

					<p
						className='text-slate-700 font-medium mb-8 animate-slide-up'
						style={{ animationDelay: '340ms', animationFillMode: 'both' }}
					>
						Feel free to explore and connect.
					</p>

					{/* Call to action + social links */}
					<div
						className='flex flex-wrap gap-3 justify-center md:justify-start animate-slide-up'
						style={{ animationDelay: '420ms', animationFillMode: 'both' }}
					>
						<Link
							className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
							to={ROUTES.RESUME.path}
						>
							View resume

							<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path d='M14 5l7 7m0 0l-7 7m7-7H3' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} />
							</svg>
						</Link>

						{socialLinks.map((link) => (
							<a
								className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${link.className}`}
								href={link.url}
								key={link.name}
								rel='noopener noreferrer'
								target='_blank'
							>
								{link.icon && link.icon}

								{!link.icon && <span className='font-bold'>{link.name.substring(0, 2).toUpperCase()}</span>}

								{link.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</BaseView>
	);
};

export default Home;
