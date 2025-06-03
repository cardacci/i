import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabView from '@/components/common/TabView';
import ProjectTech from './ProjectTech';
import MySkills from './MySkills';

const Tech: React.FC = () => {
	const tabs = [
		{
			id: 'skills',
			label: 'My Skills',
			content: <MySkills />,
		},
		{
			id: 'project',
			label: 'Project Technologies',
			content: <ProjectTech />,
		},
	];

	return (
		<section id="tech" className="py-10 max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-blue-800">Technology</h1>

			<div className="bg-white p-6 rounded-lg shadow-md">
				<p className="mb-6">
					This section is dedicated to exploring my interests in technology and software
					development. I&apos;ll share insights about programming languages, frameworks,
					and interesting projects I&apos;ve worked on.
				</p>

				<Routes>
					<Route path="/" element={<Navigate replace to="skills" />} />
					<Route
						path=":tabId"
						element={<TabView tabs={tabs} baseUrl="/tech" defaultTab="skills" />}
					/>
				</Routes>
			</div>
		</section>
	);
};

export default Tech;
