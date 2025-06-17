import React from 'react';

import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';
import SidebarNavigation from '@/components/layout/SidebarNavigation';
import Crypto from '@/components/sections/Crypto/Crypto';
import DJing from '@/components/sections/DJing/DJing';
import Home from '@/components/sections/Home';
import Resume from '@/components/sections/Resume';
import Tech from '@/components/sections/Tech/Tech';
import Travel from '@/components/sections/Travel';
import './styles/app.css';

/**
 * Layout component that will be present on all pages.
 */
const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-white'>
			<Header />

			<SidebarNavigation />

			<div className='pt-20 md:pt-24'>
				<main className='grow'>
					<div className='container mx-auto px-4 py-6 md:pl-20'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

/**
 * Define routes.
 */
const router = createHashRouter([
	{
		children: [
			{
				element: <Home />,
				index: true
			},
			{
				element: <Resume />,
				path: 'resume'
			},
			{
				element: <Crypto />,
				path: 'crypto/*'
			},
			{
				element: <Tech />,
				path: 'tech/*'
			},
			{
				element: <DJing />,
				path: 'djing/*'
			},
			{
				element: <Travel />,
				path: 'travel'
			}
		],
		element: <Layout />,
		path: '/'
	}
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
