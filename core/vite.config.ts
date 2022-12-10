import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import dts from '../plugins/vite-plugin-dts-generator'

export default defineConfig({
	plugins: [vue(), dts()],
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
