import React from 'react';

import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom';

import { Header, SidebarNavigation } from '@/components/layout';
import { Books, Crypto, DJing, Economics, Home, Resume, Tech, Travel } from '@/components/sections';
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
					<div className='container mx-auto py-6'>
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
				element: <Books />,
				path: `${ROUTES.BOOKS.id}/*`
			},
			{
				element: <Resume />,
				path: `${ROUTES.RESUME.id}/*`
			},
			{
				element: <Economics />,
				path: `${ROUTES.ECONOMICS.id}/*`
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
				path: `${ROUTES.TRAVEL.id}/*`
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
