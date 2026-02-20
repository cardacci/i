import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';

// Import leaflet CSS
import 'leaflet/dist/leaflet.css';

import { COUNTRY_INFO, VisitedPlace } from '../../utils/constants/travel';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

// Custom icons for different types of places
const defaultIcon = L.icon({
	iconAnchor: [12, 41],
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconSize: [25, 41],
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const homeIcon = L.divIcon({
	className: 'custom-home-marker',
	html: '<div style="background-color: #DAA520; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; display: flex; align-items: center; justify-content: center;"><span style="color: white; font-size: 16px; transform: rotate(45deg);">🏠</span></div>',
	iconAnchor: [15, 30],
	iconSize: [30, 30],
	popupAnchor: [0, -30]
});

/* ===== Types & Interfaces ===== */
interface WorldMapProps {
	className?: string;
	visitedCountries: VisitedPlace[];
}

const WorldMap = (props: WorldMapProps) => {
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
		<div className={`w-full h-96 rounded-lg overflow-hidden shadow-lg relative ${className}`} style={{ zIndex: 1 }}>
			<MapContainer center={center} className='rounded-lg' style={{ height: '100%', width: '100%', zIndex: 1 }} zoom={zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				{visitedCountries
					.filter((country) => country.coordinates) // Only show countries with coordinates
					.map((country, index) => (
						<Marker icon={country.livedHere ? homeIcon : defaultIcon} key={index} position={country.coordinates!}>
							<Popup>
								<div className='text-center'>
									<h3 className='font-semibold text-lg text-gray-800 flex items-center justify-center gap-2'>
										<span>{getCountryFlag(country.country)}</span>
										<span>{country.country}</span>
										{country.livedHere && <span className='text-yellow-600'>🏠</span>}
									</h3>

									{country.city && <p className='text-sm text-gray-600'>{country.city}</p>}

									{country.livedHere && <p className='text-xs text-yellow-700 font-medium mt-1'>Lived here</p>}

									{/* Display years - prioritize 'years' over deprecated 'year' */}
									{(() => {
										const yearsData = country.years || country.year;

										if (yearsData) {
											const yearsList = Array.isArray(yearsData) ? yearsData : [yearsData];

											if (yearsList.length === 1) {
												return <p className='text-xs text-blue-600 font-medium mt-1'>📅 {yearsList[0]}</p>;
											} else {
												return <p className='text-xs text-blue-600 font-medium mt-1'>📅 {yearsList.join(', ')}</p>;
											}
										}

										return null;
									})()}

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
