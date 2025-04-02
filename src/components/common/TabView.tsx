import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Tab {
	id: string;
	label: string;
	content: React.ReactNode;
}

interface TabViewProps {
	tabs: Tab[];
	baseUrl: string;
	defaultTab?: string;
}

const TabView: React.FC<TabViewProps> = ({ tabs, baseUrl, defaultTab }) => {
	const navigate = useNavigate();
	const location = useLocation();

	// Extract the active tab from the URL or use the default
	const currentPath = location.pathname;
	const activeTabId = currentPath.split('/').pop();

	// Handle case when no specific tab is in the URL
	const activeTab =
		tabs.find((tab) => tab.id === activeTabId) ||
		(defaultTab ? tabs.find((tab) => tab.id === defaultTab) : tabs[0]);

	const handleTabClick = (tabId: string) => {
		navigate(`${baseUrl}/${tabId}`);
	};

	return (
		<div className="w-full">
			{/* Tab navigation */}
			<div className="border-b border-gray-200 mb-6">
				<nav className="flex space-x-8">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => handleTabClick(tab.id)}
							className={`py-4 px-1 font-medium text-sm border-b-2 ${
								activeTab?.id === tab.id
									? 'border-blue-500 text-blue-600'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
							} transition-colors`}
							aria-current={activeTab?.id === tab.id ? 'page' : undefined}
						>
							{tab.label}
						</button>
					))}
				</nav>
			</div>

			{/* Tab content */}
			<div className="tab-content">{activeTab?.content}</div>
		</div>
	);
};

export default TabView;
