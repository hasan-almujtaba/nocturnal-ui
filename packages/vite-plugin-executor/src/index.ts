import type { Logger, Plugin } from 'vite'
import { exec } from 'node:child_process'
import chalk from 'chalk'

interface Options {
	script: string
}

const dts = ({ script }: Options) => {
	const { blueBright, greenBright } = chalk
	let logger: Logger
	let startTime

	const config: Plugin = {
		name: 'vite-executor',
		configResolved(config) {
			logger = config.logger
		},
		closeBundle() {
			startTime = Date.now()
			logger.info(blueBright(`\nRunning ${script}`))
			exec(script)
			logger.info(greenBright(`Completed in ${Date.now() - startTime}ms.\n`))
		},
	}

	return config
}

export default dts
