/* ===== Imports ===== */
import { Navigate, Route, Routes } from 'react-router-dom';

import { SectionTitle, TabView } from '@/components/common';
import { FRONTEND_TOPICS, ROUTE_KEYS } from '@/utils/constants/routes';
import { createTabsFromRoutes, getFirstChildRoute } from '@/utils/helpers';

import {
	ComponentArchitecture,
	DataFetching,
	DesignSystem,
	FrontendInfrastructure,
	PerformanceOptimization,
	RealWorldExamples,
	RenderingPatterns,
	RoutingAndNavigation,
	StateManagement
} from './frontendTopics';

/* ===== Component Function ===== */
const Frontend = () => {
	/* ===== Derived Values ===== */
	const defaultTab = getFirstChildRoute(FRONTEND_TOPICS);
	const tabContent = {
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.COMPONENT_ARCHITECTURE]: <ComponentArchitecture />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.STATE_MANAGEMENT]: <StateManagement />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.ROUTING_AND_NAVIGATION]: <RoutingAndNavigation />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.DATA_FETCHING]: <DataFetching />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.RENDERING_PATTERNS]: <RenderingPatterns />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.PERFORMANCE_OPTIMIZATION]: <PerformanceOptimization />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.DESIGN_SYSTEM]: <DesignSystem />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.FRONTEND_INFRASTRUCTURE]: <FrontendInfrastructure />,
		[ROUTE_KEYS.SOFTWARE_ENGINEERING_FRONTEND.REAL_WORLD_EXAMPLES]: <RealWorldExamples />
	};
	const tabs = createTabsFromRoutes(FRONTEND_TOPICS, tabContent);

	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h2'>Frontend System Design</SectionTitle>

			<p className='mb-6 text-gray-600'>
				Explorations in frontend system design, component architecture, and modern UI patterns. Topics are organized from
				foundational concepts to advanced system design considerations.
			</p>

			<Routes>
				<Route element={<Navigate replace to={defaultTab.id} />} path='/' />
				<Route element={<TabView baseUrl={FRONTEND_TOPICS.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId' />
			</Routes>
		</div>
	);
};

/* ===== Exports ===== */
export default Frontend;
