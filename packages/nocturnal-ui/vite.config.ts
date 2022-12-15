import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import executor from 'vite-plugin-executor'

export default defineConfig({
	plugins: [
		vue(),
		executor({
			runOn: 'end',
			script: 'vue-tsc --emitDeclarationOnly',
		}),
	],
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'Nocturnal',
			fileName: (format) => `nocturnal.${format}.js`,
		},
		cssCodeSplit: true,
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
