import Checkbox from './checkbox.vue'
import { mount } from '@vue/test-utils'

describe('Checkbox', () => {
	it('should be named correctly', () => {
		expect(Checkbox.name).toBe('NxCheckbox')
	})

	it('should add css class based on props', () => {
		const wrapper = mount(Checkbox, {
			props: { colorScheme: 'tertiary' },
		})

		expect(wrapper.find('.checkbox.checkbox--tertiary').exists()).toBe(true)
	})

	it('should add label based on props', () => {
		const wrapper = mount(Checkbox, {
			props: { label: 'Something is here' },
		})

		expect(wrapper.html()).toContain('Something is here')
	})

	it('should add label based on slots', () => {
		const wrapper = mount(Checkbox, {
			slots: { label: 'Something is here' },
		})

		expect(wrapper.html()).toContain('Something is here')
	})

	it('should automatically generate id for input', () => {
		const wrapper = mount(Checkbox, { props: { label: 'Something is here' } })

		expect(wrapper.get('.checkbox').attributes('id')).not.toBe('')
		expect(wrapper.get('.checkbox').attributes('id')).not.toBe(false)
		expect(wrapper.get('.checkbox').attributes('id')).not.toBe(undefined)
		expect(wrapper.get('.checkbox').attributes('id')).toEqual(
			wrapper.get('.checkbox__label').attributes('for')
		)
	})

	it('should add id based on props', () => {
		const wrapper = mount(Checkbox, {
			props: { id: 'checkbox', label: 'Something is here' },
		})

		expect(wrapper.find('#checkbox').exists()).toBe(true)
		expect(wrapper.find('[for="checkbox"]').exists()).toBe(true)
	})

	it('should disabled based on props', () => {
		const wrapper = mount(Checkbox, { props: { disabled: true } })

		expect(wrapper.get('.checkbox').attributes('disabled')).toBeDefined()
	})

	it('should set checked', async () => {
		const wrapper = mount(Checkbox, {
			props: {
				modelValue: false,
				'onUpdate:modelValue': (event: boolean) =>
					wrapper.setProps({ modelValue: event }),
			},
		})

		await wrapper.setValue(true)

		expect(wrapper.props('modelValue')).toBe(true)
	})

	it('should set modelValue based on selected value', async () => {
		const wrapper = mount(Checkbox, {
			props: {
				modelValue: [],
				'onUpdate:modelValue': (event: string) =>
					wrapper.setProps({
						modelValue: [...wrapper.props('modelValue'), event],
					}),
			},
		})

		await wrapper.setValue('Value')
		await wrapper.setValue('Value 2')
		await wrapper.setValue('Value 3')

		expect(wrapper.props('modelValue')).toEqual(['Value', 'Value 2', 'Value 3'])
	})
})
