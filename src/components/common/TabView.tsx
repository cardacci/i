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

	/* ===== Constants ===== */
	// Find active tab or use default.
	const activeTab = tabs.find((tab) => tab.id === tabId) || (defaultTab ? tabs.find((tab) => tab.id === defaultTab) : tabs[0]);

	const handleTabClick = (tabId: string) => {
		navigate(`${baseUrl}/${tabId}`);
	};

	return (
		<div className='w-full'>
			{/* Tab navigation */}
			<div className='border-b border-gray-200 mb-6'>
				<nav className='-mb-px flex space-x-8'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => handleTabClick(tab.id)}
							className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab?.id === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                transition-colors duration-150
              `}
							aria-current={activeTab?.id === tab.id ? 'page' : undefined}
						>
							{tab.label}
						</button>
					))}
				</nav>
			</div>

			{/* Tab content */}
			<div className='tab-content'>{activeTab?.content}</div>
		</div>
	);
};

export default TabView;
