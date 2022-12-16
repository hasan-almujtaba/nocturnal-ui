import fs from 'node:fs'
import process from 'node:process'

const generateDeclaration = () => {
	const root = process.cwd()
	const readPath = root + '/src/components'
	const writePath = root + '/global.d.ts'

	const components = fs
		.readdirSync(readPath, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => `Nx${dirent.name[0].toUpperCase()}${dirent.name.slice(1)}`)

	const content = `//Global Components
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
		${components
			.map((item) => `${item}: typeof import('nocturnal-ui')['${item}']`)
			.join('\n    ')}
  }
}

export {}
	`

	fs.writeFileSync(writePath, content)
}

generateDeclaration()
