import React from 'react';

import UnderConstruction from '@/components/common/UnderConstruction';
import { BaseView, ContentCard, ListWithTitle, SectionTitle } from '@/utils';

const Resume: React.FC = () => {
	/* ===== Constants ===== */
	const education = ['[Degree] in [Field of Study], [University], [Year]', '[Additional Degrees or Certifications]'];
	const experience = ['[Job Title] at [Company] - [Year] to [Year]', '[Job Title] at [Company] - [Year] to [Year]'];

	const skills = ['[Skill 1]', '[Skill 2]', '[Skill 3]'];

	return (
		<BaseView id='resume' title='CV'>
			<UnderConstruction />

			<ContentCard className='mt-8'>
				<SectionTitle level='h3'>Personal Information</SectionTitle>

				<p className='mb-2'>Name: Gabriel Cardacci</p>

				<p className='mb-2'>Email: gabrielcardacci@gmail.com</p>

				<p className='mb-2'>Phone: +549 2257 547467</p>

				<ListWithTitle className='mt-6' items={education} title='Education' />

				<ListWithTitle className='mt-6' items={experience} title='Experience' />

				<ListWithTitle className='mt-6' items={skills} title='Skills' />
			</ContentCard>
		</BaseView>
	);
};

export default Resume;
