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
				templateFile: 'templates/component/index.hbs',
			},
			{
				type: 'add',
				path: 'packages/nocturnal-ui/src/components/{{name}}/{{name}}.vue',
				templateFile: 'templates/component/sfc.hbs',
			},
			{
				type: 'add',
				path: 'packages/nocturnal-ui/src/components/{{name}}/{{name}}.scss',
				templateFile: 'templates/component/scss.hbs',
			},
		],
	})
}
