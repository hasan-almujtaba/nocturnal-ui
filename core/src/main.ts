import { App } from 'vue'
import './styles/index.css'

/**
 * Install component as plugin
 * First get all components from components folder with glob import
 * then loop through all available components and register component with component name
 * @see https://vuejs.org/guide/reusability/plugins.html#plugins
 * @see https://vitejs.dev/guide/features.html#glob-import
 * @param app - Vue app
 */
const install = function (app: App) {
	const components = import.meta.glob('./components/**/*.vue', {
		eager: true,
	})

	for (const key in components) {
		// @ts-expect-error: component name will be provided manually
		app.component(components[key].default.name, components[key].default)
	}
}

export * from './components'
export default { install }
