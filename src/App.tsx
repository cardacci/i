import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navigation from './components/layout/Navigation';
import Home from './components/sections/Home';
import Resume from './components/sections/Resume';
import Crypto from './components/sections/Crypto';
import Tech from './components/sections/Tech';
import DJing from './components/sections/DJing';
import Travel from './components/sections/Travel';
import './styles/global.css';

// Layout component that will be present on all pages
const Layout = () => {
	return (
		<>
			<Header />
			<Navigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

// Define routes
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'resume',
				element: <Resume />
			},
			{
				path: 'crypto',
				element: <Crypto />
			},
			{
				path: 'tech',
				element: <Tech />
			},
			{
				path: 'djing',
				element: <DJing />
			},
			{
				path: 'travel',
				element: <Travel />
			}
		]
	}
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
