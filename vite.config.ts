import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/i/', // Repository name with trailing slash.
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	build: {
		assetsDir: 'assets',
	},
	server: {
		open: true,
		port: 2025,
	},
});
