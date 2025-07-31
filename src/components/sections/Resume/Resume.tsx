import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import TabView from '@/components/common/TabView';
import { BaseView, ContentCard, createTabsFromRoutes, getFirstChildRoute } from '@/utils';
import { ROUTES } from '@/utils/constants/routes';

import Education from './tabs/Education';
import Experience from './tabs/Experience';
import Personal from './tabs/Personal';
import Projects from './tabs/Projects';
import Skills from './tabs/Skills';

const Resume: React.FC = () => {
	/* ===== Constants & Variables ===== */
	const tabContent = {
		EDUCATION: <Education />,
		EXPERIENCE: <Experience />,
		PERSONAL: <Personal />,
		PROJECTS: <Projects />,
		SKILLS: <Skills />
	};

	const tabs = createTabsFromRoutes(ROUTES.RESUME, tabContent);
	const defaultTab = getFirstChildRoute(ROUTES.RESUME);

	return (
		<BaseView id='resume' title='Resume'>
			<ContentCard>
				<p className='mb-6'>
					Welcome to my professional resume. Here you'll find detailed information about my background, experience, and skills as a Principal Frontend
					Engineer with expertise in React ecosystem and AI-augmented development.
				</p>

				<Routes>
					<Route element={<Navigate replace to={defaultTab.id} />} path='/' />
					<Route element={<TabView baseUrl={ROUTES.RESUME.path} defaultTab={defaultTab.id} tabs={tabs} />} path=':tabId' />
				</Routes>
			</ContentCard>
		</BaseView>
	);
};

export default Resume;
