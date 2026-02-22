/* ===== Imports ===== */
import { ReactNode, useCallback, useEffect, useRef } from 'react';

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

const TabView = ({ baseUrl, defaultTab, tabs }: TabViewProps) => {
	/* ===== Hooks ===== */
	const navigate = useNavigate();
	const { tabId } = useParams<{ tabId: string }>();

	/* ===== Refs ===== */
	const activeButtonRef = useRef<HTMLButtonElement | null>(null);
	const navRef = useRef<HTMLElement>(null);

	/* ===== Derived Values ===== */
	const activeTab = tabs.find((tab) => tab.id === tabId) || (defaultTab ? tabs.find((tab) => tab.id === defaultTab) : tabs[0]);

	/* ===== Callbacks ===== */
	const handleTabClick = useCallback(
		(id: string) => {
			navigate(`${baseUrl}/${id}`);
		},
		[baseUrl, navigate]
	);

	/* ===== Effects ===== */
	useEffect(() => {
		const button = activeButtonRef.current;
		const nav = navRef.current;

		if (button && nav) {
			const navRect = nav.getBoundingClientRect();
			const buttonRect = button.getBoundingClientRect();
			const scrollLeft = nav.scrollLeft + buttonRect.left - navRect.left - navRect.width / 2 + buttonRect.width / 2;

			nav.scrollTo({ behavior: 'smooth', left: scrollLeft });
		}
	}, [activeTab?.id]);

	/* ===== JSX Return ===== */
	return (
		<div className='w-full'>
			{/* Tab navigation */}
			<div className='mb-8'>
				<nav className='flex gap-2 p-1.5 bg-slate-100/80 rounded-xl overflow-x-auto' ref={navRef}>
					{tabs.map((tab) => (
						<button
							aria-current={activeTab?.id === tab.id ? 'page' : undefined}
							className={`whitespace-nowrap py-2.5 px-4 rounded-lg font-medium text-sm cursor-pointer shrink-0 transition-all duration-200 ${activeTab?.id === tab.id ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
							key={tab.id}
							onClick={() => handleTabClick(tab.id)}
							ref={activeTab?.id === tab.id ? activeButtonRef : undefined}
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

/* ===== Exports ===== */
export default TabView;
