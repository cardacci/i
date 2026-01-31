import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '@/utils/constants/routes';

/* ===== Types & Interfaces ===== */
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
			...ROUTES.BOOKS
		},
		{
			...ROUTES.DJING,
			children: getChildrenFromRoute(ROUTES.DJING)
		},
		{
			...ROUTES.TRAVEL,
			children: getChildrenFromRoute(ROUTES.TRAVEL)
		},
		{
			...ROUTES.ECONOMICS,
			children: getChildrenFromRoute(ROUTES.ECONOMICS)
		},
		{
			...ROUTES.TECH,
			children: getChildrenFromRoute(ROUTES.TECH)
		}
	];

	/* ===== Functions ===== */
	function closeSidebar() {
		setIsOpen(false);
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

	function isActive(path: string): boolean {
		return location.pathname.startsWith(path);
	}

	function renderArrow() {
		let contentPath;

		if (isOpen) {
			contentPath = <path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />;
		} else {
			contentPath = <path d='M4 6h16M4 12h16M4 18h16' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />;
		}

		return (
			<svg
				className='h-5 w-5 md:h-6 md:w-6 transition-transform duration-200'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				{contentPath}
			</svg>
		);
	}

	function renderMenuItem(item: MenuItem) {
		const { icon, label, path } = item;

		if (item.children) {
			return (
				<details className='group' open={isActive(path)}>
					<summary
						className={`flex items-center p-3 rounded-xl cursor-pointer list-none font-medium transition-all duration-200 ${
							isActive(path)
								? 'text-blue-600 bg-gradient-to-r from-blue-50 to-violet-50 shadow-sm'
								: 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
						}`}
					>
						<span className='mr-3 text-lg'>{icon}</span>

						<span className='flex-1'>{label}</span>

						<svg
							className='w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-90'
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
									className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
										location.pathname === child.path
											? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-500/25'
											: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:pl-4'
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
			);
		}

		return (
			<Link
				className={`flex items-center p-3 rounded-xl font-medium transition-all duration-200 ${
					location.pathname === path
						? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-500/25'
						: 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
				}`}
				onClick={closeSidebar}
				to={path}
			>
				<span className='mr-3 text-lg'>{icon}</span>

				{label}
			</Link>
		);
	}

	function toggleSidebar() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			{/* Hamburger Button - Modern floating style */}
			<div className='fixed top-4 left-4 md:top-4 md:left-4 z-50'>
				<button
					aria-label='Toggle menu'
					className='flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer'
					onClick={toggleSidebar}
				>
					{renderArrow()}
				</button>
			</div>

			{/* Blur Overlay */}
			{isOpen && (
				<div
					className='fixed inset-0 backdrop-blur-sm bg-slate-900/20 z-40 transition-opacity duration-300'
					onClick={closeSidebar}
				></div>
			)}

			{/* Sidebar - Modern glass effect */}
			<div
				className={`fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/10 z-50 transform transition-transform duration-300 ease-out ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				{/* Decorative gradient line */}
				<div className='absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500' />

				<div className='p-6 h-full flex flex-col'>
					{/* Header */}
					<div className='flex items-center justify-between mb-8'>
						<div>
							<h2 className='text-2xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent'>
								🚀 Explore
							</h2>
							<p className='text-xs text-gray-400 mt-1'>Navigate through sections</p>
						</div>

						<button
							aria-label='Close menu'
							className='p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:rotate-90'
							onClick={closeSidebar}
						>
							<svg
								className='h-5 w-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
							</svg>
						</button>
					</div>

					{/* File Tree Menu */}
					<nav className='flex-1 overflow-y-auto pr-2 -mr-2'>
						<ul className='space-y-1.5'>
							{menuItems.map((item) => (
								<li key={item.id}>{renderMenuItem(item)}</li>
							))}
						</ul>
					</nav>

					{/* Footer */}
					<div className='pt-6 mt-4 border-t border-gray-100'>
						<div className='text-center'>
							<p className='text-sm text-gray-500 font-medium'>&copy; {new Date().getFullYear()} Gabriel Cardacci</p>
							<span className='text-xs text-gray-400 mt-1 block'>{appVersion}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SidebarNavigation;
