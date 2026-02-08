import { ReactNode } from 'react';

import resumePdf from '@/assets/files/resume/Cardacci, Gabriel - CV 2026-01.pdf';
import { SectionTitle } from '@/components/common';
import { SocialNetwork } from '@/utils/constants';
import { useSocialLinks } from '@/utils/hooks';

const Personal: React.FC = () => {
	/* ===== Hooks ===== */
	const { getSocialLink } = useSocialLinks();
	const linkedinLink = getSocialLink(SocialNetwork.LINKEDIN);

	function getItem(label: string, description: ReactNode | string) {
		return (
			<div className='flex items-center gap-3'>
				<div className='w-2 h-2 bg-blue-500 rounded-full'></div>

				<div>
					<span className='text-sm font-medium text-gray-600'>{label}</span>

					<div className='font-medium text-gray-800'>{description}</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<SectionTitle level='h3'>Personal Information</SectionTitle>

			{/* Modern Info Card */}
			<div className='bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8'>
				<div className='mb-6'>
					<h4 className='text-xl font-bold text-gray-900 mb-2'>Gabriel Cardacci</h4>
					<p className='font-medium mb-6'>Principal Frontend Engineer & Engineering Lead @ klio | React Ecosystem</p>

					<div className='grid md:grid-cols-2 gap-4'>
						<div className='space-y-3'>
							{getItem(
								'Email',
								<a className='text-blue-600 hover:text-blue-800 font-medium' href='mailto:gabrielcardacci@gmail.com'>
									gabrielcardacci@gmail.com
								</a>
							)}

							{getItem('Location', 'Argentina')}

							{getItem('Citizenship', 'Argentina 🇦🇷 & Lithuania 🇱🇹')}
						</div>

						<div className='space-y-3'>
							{getItem(
								'LinkedIn',
								<a
									className='text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1'
									href={linkedinLink.url}
									rel='noopener noreferrer'
									target='_blank'
								>
									{linkedinLink.icon}
									linkedin.com/in/cardacci
								</a>
							)}

							{getItem('Languages', 'English (Professional working proficiency) · Spanish (Native)')}
						</div>
					</div>
				</div>
			</div>

			{/* Download CV Section */}
			<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8'>
				<h4 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>Download CV</h4>

				<div className='flex items-center justify-between'>
					<div>
						<p className='text-gray-600 mb-2'>Get my latest resume in PDF format</p>

						<p className='text-sm text-gray-500'>Last updated: January 2026</p>
					</div>
					<a
						className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium'
						download='Cardacci, Gabriel - CV 2026-01.pdf'
						href={resumePdf}
					>
						<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path
								d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
							/>
						</svg>
						Download CV
					</a>
				</div>
			</div>

			{/* About Section */}
			<div className='bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100'>
				<h4 className='text-lg font-semibold text-gray-800 mb-3'>About</h4>

				<div className='leading-relaxed space-y-4'>
					<p>
						Product-minded Principal Frontend Engineer with 10+ years of experience building and scaling web, PWA, and hybrid
						mobile applications.
					</p>

					<p>
						I combine hands-on expertise in React, Redux, and TypeScript with leadership in architecture, delivery, and hiring.
						Known for translating business goals into high-impact solutions, improving performance and reliability, and enabling
						teams to ship faster with confidence.
					</p>

					<p>I hold dual citizenship (Argentina 🇦🇷 & Lithuania 🇱🇹), allowing me to live and work internationally.</p>

					<p>You can reach me at gabrielcardacci@gmail.com for relevant opportunities.</p>
				</div>
			</div>
		</div>
	);
};

export default Personal;
