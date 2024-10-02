import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { plugin, Mode } from 'vite-plugin-markdown';


export default defineConfig({
	plugins: [sveltekit(), plugin({ mode: [ Mode.HTML ] })],
});
