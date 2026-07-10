/* ===== Imports ===== */
import { LuArrowUp } from 'react-icons/lu';

import { SocialNetwork } from '@/utils/constants';
import { useSocialLinks } from '@/utils/hooks';

/* ===== Component Function ===== */
const Footer = () => {
	/* ===== Hooks ===== */
	const { socialLinks } = useSocialLinks([SocialNetwork.GITHUB, SocialNetwork.LINKEDIN, SocialNetwork.INSTAGRAM, SocialNetwork.YOUTUBE]);

	/* ===== Derived Values ===== */
	const currentYear = new Date().getFullYear();

	/* ===== Functions ===== */
	function handleBackToTop() {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	}

	/* ===== JSX Return ===== */
	return (
		<footer className='relative z-10 mt-16 border-t border-slate-200/70 bg-white/60 backdrop-blur-md'>
			<div className='container mx-auto px-4 sm:px-6 py-8'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
					{/* Identity */}
					<div className='text-center md:text-left'>
						<p className='font-display font-semibold text-slate-800 mb-0.5'>Gabriel Cardacci</p>
						<p className='text-sm text-slate-500 mb-0'>Senior Frontend Engineer &middot; &copy; {currentYear}</p>
					</div>

					{/* Social links */}
					<div className='flex items-center gap-2'>
						{socialLinks.map((link) => (
							<a
								aria-label={link.name}
								className='flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:text-white'
								href={link.url}
								key={link.name}
								rel='noopener noreferrer'
								target='_blank'
								title={link.name}
							>
								{link.icon}
							</a>
						))}

						<button
							aria-label='Back to top'
							className='flex items-center justify-center w-10 h-10 ml-2 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/35 cursor-pointer'
							onClick={handleBackToTop}
							title='Back to top'
						>
							<LuArrowUp className='w-4 h-4' />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

/* ===== Exports ===== */
export default Footer;
