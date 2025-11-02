/**
 * Travel destinations data for the interactive world map
 * Coordinates represent approximate center points of each destination
 */
export interface VisitedPlace {
	city?: string;
	coordinates?: [number, number]; // [latitude, longitude]
	country: string;
	description?: string;
	livedHere?: boolean;
	year?: number;
}

/**
 * Country information with name, code, and flag emoji
 */
export const COUNTRY_INFO = {
	ARGENTINA: { name: 'Argentina', code: 'AR', flag: '🇦🇷' },
	AUSTRIA: { name: 'Austria', code: 'AT', flag: '🇦🇹' },
	BELGIUM: { name: 'Belgium', code: 'BE', flag: '🇧🇪' },
	BOLIVIA: { name: 'Bolivia', code: 'BO', flag: '🇧🇴' },
	BRAZIL: { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
	CHILE: { name: 'Chile', code: 'CL', flag: '🇨🇱' },
	FRANCE: { name: 'France', code: 'FR', flag: '🇫🇷' },
	GERMANY: { name: 'Germany', code: 'DE', flag: '🇩🇪' },
	ITALY: { name: 'Italy', code: 'IT', flag: '🇮🇹' },
	LUXEMBOURG: { name: 'Luxembourg', code: 'LU', flag: '🇱🇺' },
	MONACO: { name: 'Monaco', code: 'MC', flag: '🇲🇨' },
	NETHERLANDS: { name: 'Netherlands', code: 'NL', flag: '🇳🇱' },
	PERU: { name: 'Peru', code: 'PE', flag: '🇵🇪' },
	SLOVENIA: { name: 'Slovenia', code: 'SI', flag: '🇸🇮' },
	SPAIN: { name: 'Spain', code: 'ES', flag: '🇪🇸' },
	SWITZERLAND: { name: 'Switzerland', code: 'CH', flag: '🇨🇭' },
	UNITED_KINGDOM: { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
	UNITED_STATES: { name: 'United States', code: 'US', flag: '🇺🇸' },
	URUGUAY: { name: 'Uruguay', code: 'UY', flag: '🇺🇾' }
} as const;

export type PlaceKey = keyof typeof COUNTRY_INFO;

export const VISITED_PLACES: VisitedPlace[] = [
	{
		country: 'Argentina',
		city: 'Achiras',
		coordinates: [-33.18, -64.99]
	},
	{
		country: 'Argentina',
		city: 'Cafayate',
		coordinates: [-26.07, -65.98]
	},
	{
		country: 'Argentina',
		city: 'Cataratas del Iguazú',
		coordinates: [-25.57736, -54.28607]
	},
	{
		country: 'Argentina',
		city: 'Choele Choel',
		coordinates: [-39.29, -65.66]
	},
	{
		country: 'Argentina',
		city: 'Cipolletti',
		coordinates: [-38.94, -68.0]
	},
	{
		country: 'Argentina',
		city: 'Córdoba',
		coordinates: [-31.4167, -64.1833]
	},
	{
		country: 'Argentina',
		city: 'El Bolsón',
		coordinates: [-41.97, -71.54]
	},
	{
		country: 'Argentina',
		city: 'El Calafate',
		coordinates: [-50.34, -72.26]
	},
	{
		country: 'Argentina',
		city: 'El Chaltén',
		coordinates: [-49.33, -72.89]
	},
	{
		country: 'Argentina',
		city: 'Federación',
		coordinates: [-30.99, -57.92]
	},
	{
		country: 'Argentina',
		city: 'Glaciar Perito Moreno',
		coordinates: [-50.5, -73.14]
	},
	{
		country: 'Argentina',
		city: 'Glaciar Torre',
		coordinates: [-49.33, -73.25]
	},
	{
		country: 'Argentina',
		city: 'Gualeguaychú',
		coordinates: [-33.01, -58.53]
	},
	{
		country: 'Argentina',
		city: 'Humahuaca',
		coordinates: [-23.2, -65.35]
	},
	{
		country: 'Argentina',
		city: 'La Plata',
		coordinates: [-34.92, -57.95]
	},
	{
		country: 'Argentina',
		city: 'La Quiaca',
		coordinates: [-22.11, -65.6]
	},
	{
		country: 'Argentina',
		city: 'Lago Puelo',
		coordinates: [-42.06, -71.6]
	},
	{
		country: 'Argentina',
		city: 'Laguna de los Tres',
		coordinates: [-49.28, -72.99]
	},
	{
		country: 'Argentina',
		city: 'Las Leñas',
		coordinates: [-35.15, -70.08]
	},
	{
		country: 'Argentina',
		city: 'Mar de Ajó',
		coordinates: [-36.72, -56.68],
		livedHere: true
	},
	{
		country: 'Argentina',
		city: 'Mar del Plata',
		coordinates: [-38.01, -57.54],
		livedHere: true
	},
	{
		country: 'Argentina',
		city: 'Mirador a la cercanía de las ruinas de Quilmes',
		coordinates: [-24.62, -65.36]
	},
	{
		country: 'Argentina',
		city: 'Palermo (Buenos Aires)',
		coordinates: [-34.58, -58.43]
	},
	{
		country: 'Argentina',
		city: 'Palpalá',
		coordinates: [-24.26, -65.21]
	},
	{
		country: 'Argentina',
		city: 'Pilar',
		coordinates: [-34.47, -58.92]
	},
	{
		country: 'Argentina',
		city: 'Puerto Blest',
		coordinates: [-41.03, -71.82]
	},
	{
		country: 'Argentina',
		city: 'Puerto Madryn',
		coordinates: [-42.76, -65.03]
	},
	{
		country: 'Argentina',
		city: 'Puerto Pirámides',
		coordinates: [-42.57, -64.28]
	},
	{
		country: 'Argentina',
		city: 'Purmamarca',
		coordinates: [-23.75, -65.5]
	},
	{
		country: 'Argentina',
		city: 'Quebrada de Humahuaca',
		coordinates: [-23.1, -65.33]
	},
	{
		country: 'Argentina',
		city: 'Río Colorado',
		coordinates: [-38.99, -64.1]
	},
	{
		country: 'Argentina',
		city: 'Salinas Grandes',
		coordinates: [-23.72, -66.03]
	},
	{
		country: 'Argentina',
		city: 'Salta',
		coordinates: [-25.25, -64.72]
	},
	{
		country: 'Argentina',
		city: 'Serranía de Hornocal',
		coordinates: [-23.3, -65.12]
	},
	{
		country: 'Argentina',
		city: 'San Carlos de Bariloche',
		coordinates: [-41.13, -71.31]
	},
	{
		country: 'Argentina',
		city: 'San Martín de los Andes',
		coordinates: [-40.16, -71.35]
	},
	{
		country: 'Argentina',
		city: 'San Rafael',
		coordinates: [-34.61, -68.34]
	},
	{
		country: 'Argentina',
		city: 'San Salvador de Jujuy',
		coordinates: [-24.18, -65.3]
	},
	{
		country: 'Argentina',
		city: 'Sierra de la Ventana',
		coordinates: [-38.14, -61.8]
	},
	{
		country: 'Argentina',
		city: 'Tandil',
		coordinates: [-37.33, -59.14]
	},
	{
		country: 'Argentina',
		city: 'Termas de Río Hondo',
		coordinates: [-27.5, -64.86]
	},
	{
		country: 'Argentina',
		city: 'Tilcara',
		coordinates: [-23.58, -65.4]
	},
	{
		country: 'Argentina',
		city: 'Valle de Calamuchita',
		coordinates: [-32.07, -64.52]
	},
	{
		country: 'Argentina',
		city: 'Villa Carlos Paz',
		coordinates: [-31.42, -64.5]
	},
	{
		country: 'Argentina',
		city: 'Villa de Merlo',
		coordinates: [-32.35, -64.97]
	},
	{
		country: 'Argentina',
		city: 'Villa Elisa',
		coordinates: [-32.16, -58.4]
	},
	{
		country: 'Argentina',
		city: 'Villa General Belgrano',
		coordinates: [-31.95, -64.45]
	},
	{
		country: 'Argentina',
		city: 'Villa La Angostura',
		coordinates: [-40.76, -71.64]
	},
	{
		country: 'Argentina',
		city: 'Yala',
		coordinates: [-24.13, -65.46]
	},
	{
		country: 'Austria',
		city: 'Salzburg',
		coordinates: [47.8, 13.04]
	},
	{
		country: 'Belgium',
		city: 'Bruges',
		coordinates: [51.21, 3.23]
	},
	{
		country: 'Bolivia',
		city: 'Cementerio de Trenes (Uyuni)',
		coordinates: [-20.46, -66.83]
	},
	{
		country: 'Bolivia',
		city: 'Copacabana',
		coordinates: [-16.17, -69.09]
	},
	{
		country: 'Bolivia',
		city: 'Coroico',
		coordinates: [-16.19, -67.73]
	},
	{
		country: 'Bolivia',
		city: 'Isla del Sol',
		coordinates: [-16.02, -69.18]
	},
	{
		country: 'Bolivia',
		city: 'Salar de Uyuni',
		coordinates: [-20.13, -67.49]
	},
	{
		country: 'Brazil',
		city: 'Armação dos Búzios',
		coordinates: [-22.76, -41.88]
	},
	{
		country: 'Brazil',
		city: 'Arraial do Cabo',
		coordinates: [-22.97, -42.03]
	},
	{
		country: 'Brazil',
		city: 'Belo Horizonte',
		coordinates: [-19.92, -43.94]
	},
	{
		country: 'Brazil',
		city: 'Morro de São Paulo',
		coordinates: [-13.38, -38.91]
	},
	{
		country: 'Brazil',
		city: 'Río de Janeiro',
		coordinates: [-22.91, -43.17]
	},
	{
		country: 'Brazil',
		city: 'Salvador',
		coordinates: [-12.98, -38.5]
	},
	{
		country: 'Chile',
		city: 'La Serena',
		coordinates: [-29.97, -71.25]
	},
	{
		country: 'Chile',
		city: 'Tongoy',
		coordinates: [-30.25, -71.51]
	},
	{
		country: 'France',
		city: 'Nice',
		coordinates: [43.71, 7.26]
	},
	{
		country: 'Germany',
		city: 'Munich',
		coordinates: [48.14, 11.58]
	},
	{
		country: 'Italy',
		city: 'Genoa',
		coordinates: [44.41, 8.93]
	},
	{
		country: 'Italy',
		city: 'Venice',
		coordinates: [45.44, 12.32]
	},
	{
		country: 'Italy',
		city: 'Verona',
		coordinates: [45.44, 10.99]
	},
	{
		country: 'Luxembourg',
		city: 'Luxembourg (City)',
		coordinates: [49.82, 6.13]
	},
	{
		country: 'Monaco',
		city: 'Monaco',
		coordinates: [43.7384, 7.4246]
	},
	{
		country: 'Netherlands',
		city: 'Amsterdam',
		coordinates: [52.37, 4.9]
	},
	{
		country: 'Peru',
		city: 'Aguas Calientes',
		coordinates: [-13.15458, -72.52484]
	},
	{
		country: 'Peru',
		city: 'Cusco',
		coordinates: [-13.53, -71.97]
	},
	{
		country: 'Peru',
		city: 'Santuario Histórico de Machu Picchu',
		coordinates: [-13.16, -72.55]
	},
	{
		country: 'Slovenia',
		city: 'Ljubljana',
		coordinates: [46.06, 14.51]
	},
	{
		country: 'Spain',
		city: 'Barcelona',
		coordinates: [41.39, 2.17]
	},
	{
		country: 'Spain',
		city: 'Graciosa (Isla)',
		coordinates: [29.25, -13.5]
	},
	{
		country: 'Spain',
		city: 'Ibiza',
		coordinates: [38.91, 1.42]
	},
	{
		country: 'Spain',
		city: 'Lanzarote',
		coordinates: [29.05, -13.59]
	},
	{
		country: 'Switzerland',
		city: 'Interlaken',
		coordinates: [46.69, 7.86]
	},
	{
		country: 'Switzerland',
		city: 'Lauterbrunnen',
		coordinates: [46.59, 7.91]
	},
	{
		country: 'United Kingdom',
		city: 'London',
		coordinates: [51.51, -0.13]
	},
	{
		country: 'United States',
		city: 'Aspen',
		coordinates: [39.19, -106.82],
		livedHere: true
	},
	{
		country: 'United States',
		city: 'Aspen Snowmass',
		coordinates: [39.19, -106.95]
	},
	{
		country: 'United States',
		city: 'Denver',
		coordinates: [39.74, -104.99]
	},
	{
		country: 'United States',
		city: 'Glenwood Springs',
		coordinates: [39.55, -107.32]
	},
	{
		country: 'United States',
		city: 'Grand Canyon National Park',
		coordinates: [36.27, -112.35]
	},
	{
		country: 'United States',
		city: 'Hoover Dam',
		coordinates: [36.02, -114.74]
	},
	{
		country: 'United States',
		city: 'Las Vegas',
		coordinates: [36.17, -115.14]
	},
	{
		country: 'United States',
		city: 'Miami Beach',
		coordinates: [25.79, -80.13]
	},
	{
		country: 'Uruguay',
		city: 'Casapueblo Hotel',
		coordinates: [-34.91, -55.04]
	},
	{
		country: 'Uruguay',
		city: 'Faro de José Ignacio',
		coordinates: [-34.84, -54.64]
	},
	{
		country: 'Uruguay',
		city: 'La Juanita',
		coordinates: [-34.84, -54.66]
	},
	{
		country: 'Uruguay',
		city: 'La Paloma',
		coordinates: [-34.66, -54.17]
	},
	{
		country: 'Uruguay',
		city: 'La Pedrera',
		coordinates: [-34.59, -54.13]
	},
	{
		country: 'Uruguay',
		city: 'Punta del Este',
		coordinates: [-34.94, -54.94]
	}
];

/**
 * Get total number of unique countries visited
 */
export const getTotalCountriesVisited = (): number => {
	const uniqueCountries = new Set(VISITED_PLACES.map((place) => place.country));

	return uniqueCountries.size;
};
