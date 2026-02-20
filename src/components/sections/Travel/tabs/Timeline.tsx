import { TravelTimeline } from '@/components/common';
import { VISITED_PLACES } from '@/utils/constants';

const Timeline = () => {
	return (
		<div>
			<TravelTimeline places={VISITED_PLACES} />
		</div>
	);
};

export default Timeline;
