import { LuLightbulb } from 'react-icons/lu';

import { WorldMap } from '@/components/common';
import { VISITED_PLACES } from '@/utils/constants';

const Map = () => {
	return (
		<div>
			<WorldMap visitedCountries={VISITED_PLACES} />

			<div className='text-sm text-gray-500 mt-4'>
				<p className='flex items-center gap-2'>
					<LuLightbulb className='w-4 h-4 text-amber-500 shrink-0' />
					<em>Click on the markers to learn more about each destination</em>
				</p>
			</div>
		</div>
	);
};

export default Map;
