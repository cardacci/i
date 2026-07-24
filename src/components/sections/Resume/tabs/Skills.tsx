import { SectionTitle } from '@/components/common';

import { SkillTree } from './SkillTree';

const Skills = () => {
	return (
		<div>
			<SectionTitle level='h3'>Skills</SectionTitle>

			<div className='mt-4'>
				<p className='text-gray-600 mb-4 text-sm'>
					My skills grouped by category. Indented items build on the skill above them.
				</p>

				<SkillTree />
			</div>
		</div>
	);
};

export default Skills;
