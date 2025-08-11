import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '@/utils/constants/routes';

interface MenuItem {
	children?: Array<{ label: string; path: string }>;
	icon: string;
	id: string;
	label: string;
	path: string;
}

interface RouteItem {
	id: string;
	label: string;
	path: string;
}

const SidebarNavigation: React.FC = () => {
	/* ===== State ===== */
	const [isOpen, setIsOpen] = useState(false);

	/* ===== Hooks ===== */
	const location = useLocation();

	/* ===== Constants & Variables ===== */
	const appVersion = import.meta.env.VITE_BUILD_TIMESTAMP;
	const menuItems: MenuItem[] = [
		{
			...ROUTES.HOME
		},
		{
			...ROUTES.RESUME,
			children: getChildrenFromRoute(ROUTES.RESUME)
		},
		{
			...ROUTES.CRYPTO,
			children: getChildrenFromRoute(ROUTES.CRYPTO)
		},
		{
			...ROUTES.TECH,
			children: getChildrenFromRoute(ROUTES.TECH)
		},
		{
			...ROUTES.DJING,
			children: getChildrenFromRoute(ROUTES.DJING)
		},
		{
			...ROUTES.TRAVEL
		}
	];

	/* ===== Functions ===== */
	function closeSidebar() {
		setIsOpen(false);
	}

	function isActive(path: string): boolean {
		return location.pathname.startsWith(path);
	}

	function toggleSidebar() {
		setIsOpen(!isOpen);
	}

	function getChildrenFromRoute(route: Record<string, unknown>): Array<{ label: string; path: string }> {
		return Object.keys(route)
			.filter((key) => {
				const item = route[key] as RouteItem;
				return typeof item === 'object' && item && item.id && item.path && item.label;
			})
			.map((key) => {
				const item = route[key] as RouteItem;
				return {
					label: item.label,
					path: item.path
				};
			});
	}

	return (
		<>
			{/* Hamburger Button - always on the left but lower on mobile */}
			<div className='fixed top-4 left-4 md:top-4 md:left-4 z-50'>
				<button
					aria-label='Toggle menu'
					className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors cursor-pointer'
					onClick={toggleSidebar}
				>
					<svg className='h-5 w-5 md:h-6 md:w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
						{isOpen ? (
							<path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
						) : (
							<path d='M4 6h16M4 12h16M4 18h16' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
						)}
					</svg>
				</button>
			</div>

			{/* Blur Overlay */}
			{isOpen && <div className='fixed inset-0 backdrop-blur-sm bg-white/30 z-40' onClick={closeSidebar}></div>}

			{/* Sidebar - always from the left */}
			<div
				className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='p-6 h-full flex flex-col'>
					{/* Header */}
					<div className='flex items-center justify-between mb-6'>
						<h2 className='text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>🚀 Explore</h2>
						<button aria-label='Close menu' className='p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors' onClick={closeSidebar}>
							<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
							</svg>
						</button>
					</div>

					{/* File Tree Menu */}
					<nav className='flex-1 overflow-y-auto'>
						<ul className='space-y-2'>
							{menuItems.map((item) => (
								<li key={item.id}>
									{item.children ? (
										<details className='group' open={isActive(item.path)}>
											<summary
												className={`flex items-center p-3 rounded-lg cursor-pointer list-none font-semibold transition-colors ${
													isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-100'
												}`}
											>
												<span className='mr-3'>{item.icon}</span>
												<span className='flex-1'>{item.label}</span>
												<svg
													className='w-4 h-4 transition-transform group-open:rotate-90'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
												>
													<path d='M9 5l7 7-7 7' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} />
												</svg>
											</summary>
											<ul className='mt-2 ml-8 space-y-1'>
												{item.children.map((child) => (
													<li key={child.path}>
														<Link
															className={`block p-2 rounded-md transition-colors ${
																location.pathname === child.path
																	? 'bg-blue-600 text-white'
																	: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
															}`}
															onClick={closeSidebar}
															to={child.path}
														>
															{child.label}
														</Link>
													</li>
												))}
											</ul>
										</details>
									) : (
										<Link
											className={`flex items-center p-3 rounded-lg font-semibold transition-colors ${
												location.pathname === item.path ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
											}`}
											onClick={closeSidebar}
											to={item.path}
										>
											<span className='mr-3'>{item.icon}</span>
											{item.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>

					{/* Footer */}
					<div className='pt-6 border-t border-gray-200'>
						<div className='text-sm text-gray-500 text-center'>
							&copy; {new Date().getFullYear()} Gabriel Cardacci
							<br />
							<span className='text-xs'>{appVersion}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SidebarNavigation;
