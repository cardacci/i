import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

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
	/* ===== Hooks ===== */
	const navigate = useNavigate();
	const { tabId } = useParams<{ tabId: string }>();

	/* ===== Constants & Variables ===== */
	// Find active tab or use default.
	const activeTab = tabs.find((tab) => tab.id === tabId) || (defaultTab ? tabs.find((tab) => tab.id === defaultTab) : tabs[0]);

	const handleTabClick = (tabId: string) => {
		navigate(`${baseUrl}/${tabId}`);
	};

	return (
		<div className='w-full'>
			{/* Tab navigation */}
			<div className='border-b border-gray-200 mb-6'>
				<nav className='-mb-px flex space-x-8 overflow-x-auto scrollbar-hide'>
					{tabs.map((tab) => (
						<button
							aria-current={activeTab?.id === tab.id ? 'page' : undefined}
							className={`
				whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer shrink-0
				${activeTab?.id === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
				transition-colors duration-150
			  `}
							key={tab.id}
							onClick={() => handleTabClick(tab.id)}
						>
							{tab.label}
						</button>
					))}
				</nav>
			</div>

			{/* Tab content */}
			<div>{activeTab?.content}</div>
		</div>
	);
};

export default TabView;
