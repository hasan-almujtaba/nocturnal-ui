export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setGenerator('component', {
		description: 'Component required file',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: "What's the component name?",
			},
		],
		actions: [
			{
				type: 'add',
				path: 'packages/nocturnal-ui/src/components/{{name}}/index.ts',
				templateFile: 'plop-templates/component/index.hbs',
			},
			{
				type: 'add',
				path: 'packages/nocturnal-ui/src/components/{{name}}/{{name}}.vue',
				templateFile: 'plop-templates/component/sfc.hbs',
			},
			{
				type: 'add',
				path: 'packages/nocturnal-ui/src/components/{{name}}/{{name}}.scss',
				templateFile: 'plop-templates/component/scss.hbs',
			},
		],
	})
}
