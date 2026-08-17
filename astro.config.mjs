// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Production URL. Read from here so a custom domain is a config change (D-023, D-032).
	site: 'https://3gso-platform.guilleggo73.workers.dev',
	output: 'static',
	integrations: [sitemap()],
});
