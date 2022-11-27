import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		viteCompression()
	]
};

export default config;
