import Dialog from './dialog.vue'
import { mount } from '@vue/test-utils'

describe('Dialog', () => {
	beforeEach(() => {
		vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
			callback(0)
			return 0
		})
	})

	it('should be named correctly', () => {
		expect(Dialog.name).toBe('NxDialog')
	})

	it('should set width based on props', async () => {
		const wrapper = mount(Dialog, {
			props: {
				width: '400px',
			},
			global: {
				stubs: {
					transition: false,
				},
			},
		})

		await wrapper.setProps({ modelValue: true })

		expect(wrapper.get('.dialog').attributes('style')).toBe('width: 400px;')
	})

	it('should set max width based on props', async () => {
		const wrapper = mount(Dialog, {
			props: {
				maxWidth: '400px',
			},
			global: {
				stubs: {
					transition: false,
				},
			},
		})

		await wrapper.setProps({ modelValue: true })

		expect(wrapper.get('.dialog').attributes('style')).toContain(
			'max-width: 400px;'
		)
	})

	it('should set max width based on props', async () => {
		const wrapper = mount(Dialog, {
			props: {
				minWidth: '400px',
			},
			global: {
				stubs: {
					transition: false,
				},
			},
		})

		await wrapper.setProps({ modelValue: true })

		expect(wrapper.get('.dialog').attributes('style')).toContain(
			'min-width: 400px;'
		)
	})

	it('should set dialog title based on slot', async () => {
		const wrapper = mount(Dialog, {
			slots: {
				title: 'Dialog title',
			},
			global: {
				stubs: {
					transition: false,
				},
			},
		})

		await wrapper.setProps({ modelValue: true })

		expect(wrapper.html()).toContain('Dialog title')
	})

	it('should set dialog title based on slot', async () => {
		const wrapper = mount(Dialog, {
			slots: {
				default: 'Dialog content',
			},
			global: {
				stubs: {
					transition: false,
				},
			},
		})

		await wrapper.setProps({ modelValue: true })

		expect(wrapper.html()).toContain('Dialog content')
	})

	it('should set dialog actions based on slot', async () => {
		const wrapper = mount(Dialog, {
			slots: {
				actions: 'Dialog actions',
			},
			global: {
				stubs: {
					transition: false,
				},
			},
		})

		await wrapper.setProps({ modelValue: true })

		expect(wrapper.html()).toContain('Dialog actions')
	})
})
