import Button from './button.vue'
import { mount } from '@vue/test-utils'

describe('Component', () => {
	it('should be named correctly', async () => {
		expect(Button.name).toEqual('NxButton')
	})

	it('should rendered correctly', async () => {
		const wrapper = mount(Button, {
			slots: {
				default: 'Content',
			},
		})

		expect(wrapper.html()).toContain('Content')
	})

	it('should add css class based on props', () => {
		const wrapper = mount(Button, {
			props: { variant: 'outlined', colorScheme: 'primary' },
		})

		expect(wrapper.attributes('class')).toBe('btn btn--outlined btn--primary')
	})

	it('should be disabled if disabled', async () => {
		const wrapper = mount(Button, {
			props: { disabled: true },
		})

		expect(wrapper.attributes('disabled')).toBeDefined()
	})

	it('should show loading if loading', async () => {
		const wrapper = mount(Button, {
			props: { loading: true },
		})

		expect(wrapper.find('.loader').isVisible()).toBeTruthy()
	})

	it('should show left icon if left icon slot not empty', () => {
		const wrapper = mount(Button, {
			slots: {
				leftIcon: '<div>left icon</div>',
			},
		})

		expect(wrapper.html()).toContain('<div>left icon</div>')
	})

	it('should show right icon if right icon slot not empty', () => {
		const wrapper = mount(Button, {
			slots: {
				rightIcon: '<div>right icon</div>',
			},
		})

		expect(wrapper.html()).toContain('<div>right icon</div>')
	})
})
