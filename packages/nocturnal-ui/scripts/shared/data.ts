import { readdirSync } from 'node:fs'
import { toPascalCase } from '../../utils/case-converter'
import { readPath } from './path'

export const components = readdirSync(readPath, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => ({
		name: `Nx${toPascalCase(dirent.name)}`,
		folder: dirent.name,
	}))
