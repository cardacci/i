import { lazy, Suspense, useEffect } from 'react';

import { Outlet, RouterProvider, createHashRouter, useLocation } from 'react-router-dom';

import { Footer, Header, ScrollProgress, SidebarNavigation } from '@/components/layout';
import { Home } from '@/components/sections';
import { ROUTES } from '@/utils/constants/routes';
import './styles/app.css';

const Books = lazy(() => import('@/components/sections/Books/Books'));
const Crypto = lazy(() => import('@/components/sections/Crypto/Crypto'));
const DJing = lazy(() => import('@/components/sections/DJing/DJing'));
const Economics = lazy(() => import('@/components/sections/Economics/Economics'));
const Resume = lazy(() => import('@/components/sections/Resume/Resume'));
const SoftwareEngineering = lazy(() => import('@/components/sections/SoftwareEngineering/SoftwareEngineering'));
const Travel = lazy(() => import('@/components/sections/Travel/Travel'));

/**
 * Layout component that will be present on all pages.
 */
const Layout = () => {
	const location = useLocation();

	// Reset scroll position when navigating between pages, so each section
	// starts at its top instead of inheriting the previous scroll offset.
	useEffect(() => {
		window.scrollTo({ behavior: 'auto', top: 0 });
	}, [location.pathname]);

	return (
		<div className='relative flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30'>
			{/* Ambient gradient atmosphere — adds depth behind the glass surfaces.
			    The drift classes parallax the blobs with CSS scroll-driven animations. */}
			<div aria-hidden='true' className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
				<div className='absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl drift-down' />
				<div className='absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-violet-400/20 blur-3xl drift-up' />
				<div className='absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-cyan-300/15 blur-3xl float' />
			</div>

			<ScrollProgress />

			<Header />

			<SidebarNavigation />

			<div className='relative z-10 flex flex-col grow pt-32 md:pt-28'>
				<main className='grow'>
					<div className='container mx-auto py-8 px-4 sm:px-6'>
						<Suspense
							fallback={
								<div className='flex items-center justify-center py-20'>
									<div className='flex flex-col items-center gap-4'>
										<div className='w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin' />
										<p className='text-slate-500 font-medium'>Loading...</p>
									</div>
								</div>
							}
						>
							<Outlet />
						</Suspense>
					</div>
				</main>

				<Footer />
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
				element: <SoftwareEngineering />,
				path: `${ROUTES.SOFTWARE_ENGINEERING.id}/*`
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

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
