import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Generate version string in YY.MMDD.HHMM format.
const generateBuildTimestamp = () => {
	const now = new Date();
	const year = now.getFullYear().toString().slice(-2);
	const month = (now.getMonth() + 1).toString().padStart(2, '0');
	const day = now.getDate().toString().padStart(2, '0');
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');

	return `${year}.${month}${day}.${hours}${minutes}`;
};

export default defineConfig({
	base: '/i/',
	define: {
		// Define environment variable that will be available only at build time.
		'import.meta.env.VITE_BUILD_TIMESTAMP': JSON.stringify(generateBuildTimestamp()),
	},
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	build: {
		assetsDir: 'assets',
		outDir: 'dist',
		sourcemap: true,
	},
	server: {
		open: true,
		port: 2025,
	},
});
