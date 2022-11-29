import { defineConfig } from 'vitepress'

export default defineConfig({
	titleTemplate: 'Nocturnal UI',
	description: 'Vue UI Component Libraries',
	themeConfig: {
		siteTitle: 'Nocturnal UI',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
		],
	},
	srcDir: 'src/pages',
	outDir: 'dist',
})
