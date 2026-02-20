import { WorldMap } from '@/components/common';
import { VISITED_PLACES } from '@/utils/constants';

const Map = () => {
	return (
		<div>
			<WorldMap visitedCountries={VISITED_PLACES} />

			<div className='text-sm text-gray-500 mt-4'>
				<p>
					💡 <em>Click on the markers to learn more about each destination</em>
				</p>
			</div>
		</div>
	);
};

export default Map;
