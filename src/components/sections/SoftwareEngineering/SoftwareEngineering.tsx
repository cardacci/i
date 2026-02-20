/* ===== Imports ===== */
import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { BaseView, ContentCard } from '@/components/common';

import Backend from './tabs/Backend';
import Frontend from './tabs/Frontend';
import ProjectTech from './tabs/ProjectTech';

/* ===== Component Function ===== */
const SoftwareEngineering: React.FC = () => {
	/* ===== JSX Return ===== */
	return (
		<BaseView id='software-engineering' title='Software Engineering'>
			<ContentCard>
				<p className='mb-8 text-slate-700 text-lg leading-relaxed'>
					This section is dedicated to exploring my interests in software engineering and development. I'll share insights about
					programming languages, frameworks, system design, and interesting projects I've worked on.
				</p>

				<Routes>
					<Route element={<Navigate replace to='project' />} path='/' />
					<Route element={<Backend />} path='backend' />
					<Route element={<Frontend />} path='frontend' />
					<Route element={<ProjectTech />} path='project' />
				</Routes>
			</ContentCard>
		</BaseView>
	);
};

/* ===== Exports ===== */
export default SoftwareEngineering;
