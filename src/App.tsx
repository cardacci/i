import React, { lazy, Suspense } from 'react';

import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom';

import { Header, SidebarNavigation } from '@/components/layout';
import { Home } from '@/components/sections';
import { ROUTES } from '@/utils/constants/routes';
import './styles/app.css';

const Books = lazy(() => import('@/components/sections/Books/Books'));
const Crypto = lazy(() => import('@/components/sections/Crypto/Crypto'));
const DJing = lazy(() => import('@/components/sections/DJing/DJing'));
const Economics = lazy(() => import('@/components/sections/Economics/Economics'));
const Resume = lazy(() => import('@/components/sections/Resume/Resume'));
const Tech = lazy(() => import('@/components/sections/Tech/Tech'));
const Travel = lazy(() => import('@/components/sections/Travel/Travel'));

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
						<Suspense fallback={<div className='text-center py-10'>Loading...</div>}>
							<Outlet />
						</Suspense>
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
