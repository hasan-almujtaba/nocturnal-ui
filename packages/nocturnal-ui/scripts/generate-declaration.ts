import fs from 'node:fs'
import process from 'node:process'
import { toPascalCase } from '../utils/case-converter'

const generateDeclaration = () => {
	const root = process.cwd()
	const readPath = root + '/src/components'
	const writePath = root + '/global.d.ts'

	const components = fs
		.readdirSync(readPath, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => `Nx${toPascalCase(dirent.name)}`)

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
