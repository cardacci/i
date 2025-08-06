import { ReactNode } from 'react';

interface RouteObject {
	id: string;
	label: string;
	path: string;
}

interface TabContent {
	[key: string]: ReactNode;
}

interface Tab {
	content: ReactNode;
	id: string;
	label: string;
}

// Type for a route that can contain child routes.
type RouteParent = {
	icon: string;
	id: string;
	label: string;
	path: string;
} & Record<string, unknown>;

/**
 * Creates tabs from route objects and their corresponding content components.
 * @param routeParent - The parent route object containing child routes.
 * @param tabContent - Object mapping route keys to React components.
 * @returns Array of tab objects for TabView component.
 */
export function createTabsFromRoutes(routeParent: RouteParent, tabContent: TabContent): Tab[] {
	return Object.keys(routeParent)
		.filter(
			(key) =>
				key !== 'icon' &&
				key !== 'id' &&
				key !== 'label' &&
				key !== 'path' &&
				typeof routeParent[key] === 'object' &&
				routeParent[key] !== null &&
				(routeParent[key] as Record<string, unknown>).id &&
				(routeParent[key] as Record<string, unknown>).label
		)
		.map((key) => {
			const content = tabContent[key];
			const route = routeParent[key] as RouteObject;

			if (!content) {
				throw new Error(`Content not provided for route key: ${key}`);
			}

			return {
				content,
				id: route.id,
				label: route.label
			};
		});
}

/**
 * Gets the first child route from a parent route object.
 * @param routeParent - The parent route object containing child routes.
 * @returns The first child route object.
 */
export function getFirstChildRoute(routeParent: RouteParent): RouteObject {
	const childKeys = Object.keys(routeParent).filter(
		(key) =>
			key !== 'icon' &&
			key !== 'id' &&
			key !== 'label' &&
			key !== 'path' &&
			typeof routeParent[key] === 'object' &&
			routeParent[key] !== null &&
			(routeParent[key] as Record<string, unknown>).id
	);

	if (childKeys.length === 0) {
		throw new Error('No child routes found in parent route');
	}

	return routeParent[childKeys[0]] as RouteObject;
}
