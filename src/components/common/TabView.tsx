import { ReactNode } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

/* ===== Types & Interfaces ===== */
interface Tab {
	content: ReactNode;
	id: string;
	label: string;
}

interface TabViewProps {
	baseUrl: string;
	defaultTab?: string;
	tabs: Tab[];
}

const TabView = ({ tabs, baseUrl, defaultTab }: TabViewProps) => {
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
			<div className='mb-8'>
				<nav className='flex gap-2 p-1.5 bg-slate-100/80 rounded-xl overflow-x-auto scrollbar-hide'>
					{tabs.map((tab) => (
						<button
							aria-current={activeTab?.id === tab.id ? 'page' : undefined}
							className={`whitespace-nowrap py-2.5 px-4 rounded-lg font-medium text-sm cursor-pointer shrink-0 transition-all duration-200 ${activeTab?.id === tab.id ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
							key={tab.id}
							onClick={() => handleTabClick(tab.id)}
						>
							{tab.label}
						</button>
					))}
				</nav>
			</div>

			{/* Tab content */}
			<div className='animate-fade-in'>{activeTab?.content}</div>
		</div>
	);
};

export default TabView;
