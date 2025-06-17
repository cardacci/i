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
import { ROUTES } from '@/utils/constants/routes';
import './styles/app.css';

/**
 * Layout component that will be present on all pages.
 */
const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-white'>
			<Header />

			<SidebarNavigation />

			<div className='pt-32 md:pt-28'>
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
 * Define routes using ROUTES constants.
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
				path: ROUTES.RESUME.id
			},
			{
				element: <Crypto />,
				path: `${ROUTES.CRYPTO.id}/*`
			},
			{
				element: <Tech />,
				path: `${ROUTES.TECH.id}/*`
			},
			{
				element: <DJing />,
				path: `${ROUTES.DJING.id}/*`
			},
			{
				element: <Travel />,
				path: ROUTES.TRAVEL.id
			}
		],
		element: <Layout />,
		path: ROUTES.HOME.path
	}
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
