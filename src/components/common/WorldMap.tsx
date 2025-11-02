import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';

// Import leaflet CSS
import 'leaflet/dist/leaflet.css';

import { COUNTRY_INFO } from '../../utils/constants/travel';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

/* ===== Types & Interfaces ===== */
interface WorldMapProps {
	className?: string;
	visitedCountries: Array<{
		city?: string;
		coordinates?: [number, number];
		country: string;
		description?: string;
		year?: number;
	}>;
}

const WorldMap: React.FC<WorldMapProps> = (props) => {
	const { className = '', visitedCountries } = props;

	/* ===== Constants & Enums ===== */
	// Center the map on the world
	const center: [number, number] = [20, 0];
	const zoom = 2;

	/* ===== Helper Functions ===== */
	const getCountryFlag = (countryName: string): string => {
		const countryKey = Object.keys(COUNTRY_INFO).find((key) => COUNTRY_INFO[key as keyof typeof COUNTRY_INFO].name === countryName) as
			| keyof typeof COUNTRY_INFO
			| undefined;

		return countryKey ? COUNTRY_INFO[countryKey].flag : '';
	};

	return (
		<div className={`w-full h-96 rounded-lg overflow-hidden shadow-lg ${className}`}>
			<MapContainer center={center} className='rounded-lg' style={{ height: '100%', width: '100%' }} zoom={zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				{visitedCountries
					.filter((country) => country.coordinates) // Only show countries with coordinates
					.map((country, index) => (
						<Marker key={index} position={country.coordinates!}>
							<Popup>
								<div className='text-center'>
									<h3 className='font-semibold text-lg text-gray-800 flex items-center justify-center gap-2'>
										<span>{getCountryFlag(country.country)}</span>

										<span>{country.country}</span>
									</h3>

									{country.city && <p className='text-sm text-gray-600'>{country.city}</p>}

									{country.year && <p className='text-xs text-gray-500 mt-1'>Visited in {country.year}</p>}

									{country.description && <p className='text-sm text-gray-700 mt-2'>{country.description}</p>}
								</div>
							</Popup>
						</Marker>
					))}
			</MapContainer>
		</div>
	);
};

export default WorldMap;
