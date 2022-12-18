import { generateFile, removeFile } from '../shared'
import { development, library } from './content'

export const generateLocalDeclaration = () => {
	const content = development()
	const writePath = '/src/components.d.ts'

	generateFile({ content, writePath })
}

export const generateLibraryDeclaration = () => {
	const content = library()
	const writePath = '/global.d.ts'

	generateFile({ content, writePath })
}

export const removeUnusedDeclaration = () => {
	const files = ['app.vue.d.ts', 'main.d.ts']
	const path = 'dist/types'

	removeFile({ files, path })
}
