import { generateFile } from '../shared'
import { scss } from './content'

export const generateScss = () => {
	const writePath = '/src/styles/component.scss'
	const content = scss()

	generateFile({ writePath, content })
}
