import React, { useMemo } from 'react';

import { COUNTRY_INFO, VisitedPlace } from '@/utils/constants/travel';

interface TimelineEntry {
	places: VisitedPlace[];
	year: number;
}

interface TravelTimelineProps {
	places: VisitedPlace[];
}

const TravelTimeline: React.FC<TravelTimelineProps> = (props) => {
	const { places } = props;

	/* ===== Helper Functions ===== */
	const getCountryFlag = (countryName: string): string => {
		const countryKey = Object.keys(COUNTRY_INFO).find((key) => COUNTRY_INFO[key as keyof typeof COUNTRY_INFO].name === countryName) as
			| keyof typeof COUNTRY_INFO
			| undefined;

		return countryKey ? COUNTRY_INFO[countryKey].flag : '';
	};

	/* ===== Memos ===== */
	const timelineEntries = useMemo(() => {
		const entriesMap = new Map<number, VisitedPlace[]>();

		places.forEach((p) => {
			const { year, years } = p;
			// Get years from the place (prioritize 'years' over deprecated 'year').
			const yearsData = year || years;

			if (!yearsData) {
				return;
			}

			const yearsList = Array.isArray(yearsData) ? yearsData : [yearsData];

			yearsList.forEach((year) => {
				if (!entriesMap.has(year)) {
					entriesMap.set(year, []);
				}

				entriesMap.get(year)!.push(p);
			});
		});

		// Convert to array and sort by year (most recent first)
		const entries: TimelineEntry[] = Array.from(entriesMap.entries())
			.map(([year, placesInYear]) => ({
				places: placesInYear,
				year
			}))
			.sort((a, b) => b.year - a.year);

		return entries;
	}, [places]);

	if (timelineEntries.length === 0) {
		return (
			<div className='text-center py-12 text-gray-500'>
				<p>No timeline data available yet.</p>
			</div>
		);
	}

	return (
		<div className='relative'>
			{/* Timeline line */}
			<div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500' />

			{/* Timeline entries */}
			<div className='space-y-12'>
				{timelineEntries.map((entry) => {
					const { places, year } = entry;

					return (
						<div className='relative pl-20' key={year}>
							{/* Year badge */}
							<div className='absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white'>
								<span className='text-white font-bold text-lg'>{year}</span>
							</div>

							{/* Places grid - 4 columns on desktop */}
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
								{places.map((p, idx) => {
									const { city, country, description, livedHere, photos } = p;

									return (
										<div
											className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-300'
											key={`${country}-${city}-${idx}`}
										>
											{/* Photo placeholder or actual photo */}
											<div className='relative h-32 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden'>
												{photos && photos.length > 0 ? (
													<img
														alt={`${city || country}`}
														className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
														src={photos[0]}
														style={{ filter: 'sepia(15%) contrast(95%)' }}
													/>
												) : (
													<div className='w-full h-full flex items-center justify-center'>
														<span className='text-5xl opacity-50'>📍</span>
													</div>
												)}

												{/* Lived here badge */}
												{livedHere && (
													<div className='absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold shadow-md'>
														🏠 Lived Here
													</div>
												)}
											</div>

											{/* Place info */}
											<div className='p-3'>
												<h4 className='font-bold text-gray-800 text-base mb-1 flex items-center gap-1'>
													<span>{getCountryFlag(country)}</span>
													<span>{city || country}</span>
												</h4>

												{city && <p className='text-xs text-gray-500 mb-2'>{country}</p>}

												{description && <p className='text-xs text-gray-600 line-clamp-2'>{description}</p>}

												{/* Photo count indicator */}
												{photos && photos.length > 1 && (
													<div className='mt-2 text-xs text-blue-600 font-medium'>📷 {photos.length} photos</div>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TravelTimeline;
