import React from 'react';

import { TravelTimeline } from '@/components/common';
import { VISITED_PLACES } from '@/utils/constants';

const Timeline: React.FC = () => {
	return (
		<div>
			<TravelTimeline places={VISITED_PLACES} />
		</div>
	);
};

export default Timeline;
