import { existsSync, unlinkSync } from 'node:fs'
import { root } from './path'

interface RemoveFile {
	files: string[]
	path: string
}

export const removeFile = ({ files, path }: RemoveFile) => {
	for (const file of files) {
		if (existsSync(`${root}/${path}/${file}`)) {
			unlinkSync(`${root}/${path}/${file}`)
		}
	}
}
