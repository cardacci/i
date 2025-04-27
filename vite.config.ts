import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/i/',
	plugins: [react()],
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
