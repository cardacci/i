import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import Crypto from '@/components/sections/Crypto';
import DJing from '@/components/sections/DJing/DJing';
import Header from '@/components/layout/Header';
import Home from '@/components/sections/Home';
import SidebarNavigation from '@/components/layout/SidebarNavigation';
import Resume from '@/components/sections/Resume';
import Tech from '@/components/sections/Tech/Tech';
import Travel from '@/components/sections/Travel';
import './styles/app.css';

// Layout component that will be present on all pages.
const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen bg-white">
			<Header />
			<SidebarNavigation />
			<div className="pt-32 md:pt-28">
				<main className="grow">
					<div className="container mx-auto px-4 py-6 md:pl-20">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

// Define routes.
const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'resume',
				element: <Resume />,
			},
			{
				path: 'crypto',
				element: <Crypto />,
			},
			{
				path: 'tech/*',
				element: <Tech />,
			},
			{
				path: 'djing/*',
				element: <DJing />,
			},
			{
				path: 'travel',
				element: <Travel />,
			},
		],
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
