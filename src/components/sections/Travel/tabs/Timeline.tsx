import React from 'react';

import TravelTimeline from '@/components/common/TravelTimeline';
import { VISITED_PLACES } from '@/utils/constants/travel';

const Timeline: React.FC = () => {
	return (
		<div>
			<TravelTimeline places={VISITED_PLACES} />
		</div>
	);
};

export default Timeline;
