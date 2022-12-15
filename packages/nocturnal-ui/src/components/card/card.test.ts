import Card from './card.vue'
import { mount } from '@vue/test-utils'

describe('Card', () => {
	it('should be named properly', () => {
		expect(Card.name).toEqual('NxCard')
	})

	it('should render correctly', () => {
		const wrapper = mount(Card, {
			slots: {
				default: '<div>Content</div>',
			},
		})

		expect(wrapper.html()).toContain('<div>Content</div>')
	})

	it('should add css class variant based on props', () => {
		const wrapper = mount(Card, {
			props: {
				variant: 'elevated',
			},
		})

		expect(wrapper.classes()).toContain('card--elevated')
	})

	it('should render default slot correctly', () => {
		const wrapper = mount(Card, {
			slots: {
				default: '<div>Content</div>',
			},
		})

		expect(wrapper.html()).toContain('<div>Content</div>')
	})

	it('should render header slot correctly', () => {
		const wrapper = mount(Card, {
			slots: {
				header: '<h2>Header</h2>',
			},
		})

		expect(wrapper.html({ raw: true })).toContain(
			'<div class="card__header"><h2>Header</h2></div>'
		)
	})

	it('should render text slot correctly', () => {
		const wrapper = mount(Card, {
			slots: {
				text: '<p>Text</p>',
			},
		})

		expect(wrapper.html({ raw: true })).toContain(
			'<div class="card__text"><p>Text</p></div>'
		)
	})

	it('should render actions slot correctly', () => {
		const wrapper = mount(Card, {
			slots: {
				actions: '<button>Action</button>',
			},
		})

		expect(wrapper.html({ raw: true })).toContain(
			'<div class="card__actions"><button>Action</button></div>'
		)
	})

	it('should add custom class to header slot', () => {
		const wrapper = mount(Card, {
			props: {
				headerClass: 'custom-class-to-add',
			},
			slots: {
				header: '<h2>Header</h2>',
			},
		})

		expect(wrapper.get('.card__header').classes()).toContain(
			'custom-class-to-add'
		)
	})

	it('should add custom class to text slot', () => {
		const wrapper = mount(Card, {
			props: {
				textClass: 'custom-class-to-add',
			},
			slots: {
				text: '<p>Text</p>',
			},
		})

		expect(wrapper.get('.card__text').classes()).toContain(
			'custom-class-to-add'
		)
	})

	it('should add custom class to actions slot', () => {
		const wrapper = mount(Card, {
			props: {
				actionsClass: 'custom-class-to-add',
			},
			slots: {
				actions: '<button>Action</button>',
			},
		})

		expect(wrapper.get('.card__actions').classes()).toContain(
			'custom-class-to-add'
		)
	})

	it('should add custom width', () => {
		const wrapper = mount(Card, {
			props: {
				width: '300px',
				minWidth: '100px',
				maxWidth: '500px',
			},
		})

		expect(wrapper.attributes('style')).toContain('width: 300px;')
		expect(wrapper.attributes('style')).toContain('min-width: 100px;')
		expect(wrapper.attributes('style')).toContain('max-width: 500px;')
	})
})
