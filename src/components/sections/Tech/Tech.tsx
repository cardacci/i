import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabView from '@/components/common/TabView';
import { BaseView, ContentCard } from '@/utils';
import MySkills from './MySkills';
import ProjectTech from './ProjectTech';

const Tech: React.FC = () => {
	/* ===== Constants ===== */
	const tabs = [
		{
			content: <MySkills />,
			id: 'skills',
			label: 'My Skills',
		},
		{
			content: <ProjectTech />,
			id: 'project',
			label: 'Project Technologies',
		},
	];

	return (
		<BaseView id="tech" title="Technology">
			<ContentCard>
				<p className="mb-6">
					This section is dedicated to exploring my interests in technology and software
					development. I&apos;ll share insights about programming languages, frameworks,
					and interesting projects I&apos;ve worked on.
				</p>

				<Routes>
					<Route element={<Navigate replace to="skills" />} path="/" />

					<Route
						element={<TabView tabs={tabs} baseUrl="/tech" defaultTab="skills" />}
						path=":tabId"
					/>
				</Routes>
			</ContentCard>
		</BaseView>
	);
};

export default Tech;
