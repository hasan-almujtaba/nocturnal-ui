import DefaultTheme from 'vitepress/theme'
import 'nocturnal-ui/style.css'

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx)
	},
}
