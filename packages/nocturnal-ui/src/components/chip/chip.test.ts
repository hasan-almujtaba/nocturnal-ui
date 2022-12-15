import Chip from './chip.vue'
import { mount } from '@vue/test-utils'

describe('Chip', () => {
	it('should be named correctly', () => {
		expect(Chip.name).toBe('NxChip')
	})

	it('should add css class based on props', () => {
		const wrapper = mount(Chip, {
			props: {
				colorScheme: 'secondary',
			},
		})

		expect(wrapper.find('.chip--secondary').exists()).toBe(true)
	})
})
