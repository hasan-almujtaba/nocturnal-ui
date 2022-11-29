import { type Plugin } from 'vite'
import { exec } from 'node:child_process'

const dts = () => {
	const config: Plugin = {
		name: 'vite-plugin-dts-generator',
		buildEnd: (error?: Error) => {
			if (!error) {
				exec('vue-tsc --emitDeclarationOnly')
			}
		},
	}

	return config
}

export default dts
