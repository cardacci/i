import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	build: {
		outDir: 'dist',
		sourcemap: true,
	},
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	server: {
		open: true,
		port: 2025,
	},
});
