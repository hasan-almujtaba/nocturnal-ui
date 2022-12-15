import type { Plugin } from 'vite'
import { exec } from 'node:child_process'
import { pluginOptions } from './types'

const dts = ({ runOn, script }: pluginOptions) => {
	const config: Plugin = {
		name: 'vite-executor',
	}

	if (runOn === 'start') {
		config.buildStart = () => {
			exec(script)
		}
	}

	if (runOn === 'end') {
		config.buildEnd = (error?: Error) => {
			if (!error) {
				console.log('Srunning')
				exec(script)
			}
		}
	}
	return config
}

export default dts
