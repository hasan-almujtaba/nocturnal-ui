import { writeFileSync } from 'node:fs'
import { root } from '../shared'

interface GenerateFile {
	writePath: string
	content: string
}

export const generateFile = ({ writePath, content }: GenerateFile) => {
	const path = root + writePath

	writeFileSync(path, content)
}
