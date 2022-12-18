import { components } from '../shared'

export const scss = () => {
	const content = `// Auto generated scss
${components
	.map((item) => `@import '~/components/${item.folder}/${item.folder}.scss';`)
	.join('\n')}
`

	return content
}
