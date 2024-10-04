import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { plugin, Mode } from 'vite-plugin-markdown';


export default defineConfig({
	plugins: [sveltekit(), plugin({ mode: [ Mode.HTML ] })],
	server: {
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd()),
				'/content',
			]
		}
	}
});
