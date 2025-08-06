import React from 'react';

import { SectionTitle } from '@/utils';
import { SocialNetwork } from '@/utils/constants/socialNetworks';
import { useSocialLinks } from '@/utils/hooks/useSocialLinks';

const Personal: React.FC = () => {
	/* ===== Hooks ===== */
	const { getSocialLink } = useSocialLinks();
	const linkedinLink = getSocialLink(SocialNetwork.LINKEDIN);

	return (
		<div>
			<SectionTitle level='h3'>Personal Information</SectionTitle>

			{/* Modern Info Card */}
			<div className='bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8'>
				<div className='mb-6'>
					<h4 className='text-xl font-bold text-gray-900 mb-2'>Gabriel Cardacci</h4>
					<p className='font-medium mb-6'>Principal Frontend Engineer & Engineering Lead @ Klio | React Ecosystem | AI-Augmented Development</p>

					<div className='grid md:grid-cols-2 gap-4'>
						<div className='space-y-3'>
							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<div>
									<span className='text-sm font-medium text-gray-600'>Email</span>
									<div>
										<a className='text-blue-600 hover:text-blue-800 font-medium' href='mailto:gabrielcardacci@gmail.com'>
											gabrielcardacci@gmail.com
										</a>
									</div>
								</div>
							</div>

							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<div>
									<span className='text-sm font-medium text-gray-600'>Phone</span>
									<div className='font-medium text-gray-800'>+549 2257 547467</div>
								</div>
							</div>

							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<div>
									<span className='text-sm font-medium text-gray-600'>Location</span>
									<div className='font-medium text-gray-800'>Argentina</div>
								</div>
							</div>
						</div>

						<div className='space-y-3'>
							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<div>
									<span className='text-sm font-medium text-gray-600'>LinkedIn</span>
									<div>
										<a
											className='text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1'
											href={linkedinLink.url}
											rel='noopener noreferrer'
											target='_blank'
										>
											{linkedinLink.icon}
											linkedin.com/in/cardacci
										</a>
									</div>
								</div>
							</div>

							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<div>
									<span className='text-sm font-medium text-gray-600'>Languages</span>
									<div className='font-medium text-gray-800'>Spanish (Native), English (Professional)</div>
								</div>
							</div>

							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<div>
									<span className='text-sm font-medium text-gray-600'>Citizenship</span>
									<div className='font-medium text-gray-800'>Argentina 🇦🇷 & Lithuania 🇱🇹</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* About Section */}
			<div className='bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100'>
				<h4 className='text-lg font-semibold text-gray-800 mb-3'>About</h4>
				<div className='text-gray-700 leading-relaxed space-y-4'>
					<p>
						I'm a Principal Frontend Engineer & Engineering Lead at Klio, a fintech company building innovative solutions for both personal and
						business financial management. We've created an ecosystem of financial products and services to empower businesses and retailers.
					</p>
					<p>
						With over 10 years of experience in software development, I specialize in frontend engineering—designing and building scalable,
						high-performance, and user-focused applications. I've led multiple projects end-to-end, owning architecture, tooling, performance, and
						long-term maintainability.
					</p>
					<p>
						My core stack includes JavaScript, React, Redux (Toolkit & Saga), TypeScript, Vite, Stylus, WebSockets, PWAs, Web Workers, and Capacitor
						for mobile, among others. I also leverage AI tools daily to boost productivity, code quality, and technical decision-making.
					</p>
					<p>
						Beyond coding, I collaborate closely with backend, QA, product, and sales teams to align engineering with business strategy. I lead
						hiring processes, mentor engineers of all levels, and help shape product planning and release cycles.
					</p>
					<p>
						I hold dual citizenship (Argentina 🇦🇷 & Lithuania 🇱🇹), allowing me to live and work internationally. Let's connect and explore new
						opportunities!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Personal;
