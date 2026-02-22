/* ===== Imports ===== */
import { Navigate, Route, Routes } from 'react-router-dom';

import { BaseView, ContentCard } from '@/components/common';

import Backend from './tabs/Backend';
import Frontend from './tabs/Frontend';
import ProjectTech from './tabs/ProjectTech';

/* ===== Component Function ===== */
const SoftwareEngineering = () => {
	/* ===== JSX Return ===== */
	return (
		<BaseView id='software-engineering' title='Software Engineering'>
			<ContentCard>
				<Routes>
					<Route element={<Navigate replace to='project' />} path='/' />
					<Route element={<Backend />} path='backend' />
					<Route element={<Frontend />} path='frontend/*' />
					<Route element={<ProjectTech />} path='project' />
				</Routes>
			</ContentCard>
		</BaseView>
	);
};

/* ===== Exports ===== */
export default SoftwareEngineering;
