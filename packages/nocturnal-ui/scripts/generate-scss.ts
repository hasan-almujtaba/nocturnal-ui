import fs from 'node:fs'
import process from 'node:process'

const generateScss = () => {
	const root = process.cwd()
	const readPath = root + '/src/components'
	const writePath = root + '/src/styles/component.scss'

	const styles = fs
		.readdirSync(readPath, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => `~/components/${dirent.name}/${dirent.name}.scss`)

	const content = `// Auto generated scss
${styles.map((item) => `@import '${item}';`).join('\n')}
	`
	fs.writeFileSync(writePath, content)
}

generateScss()
