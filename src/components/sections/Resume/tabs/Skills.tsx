import { SectionTitle } from '@/components/common';

import { SkillTree } from './SkillTree';

const Skills = () => {
	return (
		<div>
			<SectionTitle level='h3'>Skills</SectionTitle>

			<div className='mt-4'>
				<p className='text-gray-600 mb-4 text-sm'>
					Explore my skill tree! Scroll through the sections to see how my skills connect.
				</p>

				<SkillTree />
			</div>
		</div>
	);
};

export default Skills;
