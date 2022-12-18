import { components } from '../shared'

export const development = () => {
	const declarationImport = components
		.map((item) => `import { ${item.name} } from './components/${item.folder}'`)
		.join('\n')
	const declaration = components
		.map((item) => `${item.name}: typeof ${item.name}`)
		.join('\n		')

	const content = `// Global components for local development
	
${declarationImport}

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		${declaration}
	}
}
	
export {}
`

	return content
}

export const library = () => {
	const declaration = components
		.map(
			(item) => `${item.name}: typeof import('nocturnal-ui')['${item.name}']`
		)
		.join('\n    ')

	const content = `// Global components

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		${declaration}
	}
}

export {}
`

	return content
}
