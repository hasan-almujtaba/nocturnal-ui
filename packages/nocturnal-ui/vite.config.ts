import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import executor from 'vite-plugin-executor'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
	plugins: [
		vue(),
		executor({
			script: 'vue-tsc --emitDeclarationOnly',
		}),
		cssInjectedByJsPlugin(),
	],
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'Nocturnal',
			fileName: (format) => `nocturnal.${format}.js`,
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
				exports: 'named',
			},
		},
		minify: false,
	},
})
