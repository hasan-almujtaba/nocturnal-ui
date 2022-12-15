<template>
	<div class="checkbox__wrapper">
		<input
			:id="inputId"
			type="checkbox"
			:class="checkboxClasses"
			:value="props.value"
			:checked="checked"
			:disabled="props.disabled"
			@input="onValueChange"
		/>
		<label
			v-if="$slots.label || props.label !== ''"
			:for="inputId"
			class="checkbox__label"
		>
			<slot name="label">
				{{ props.label }}
			</slot>
		</label>
	</div>
</template>

<script lang="ts">
export default {
	name: 'NxCheckbox',
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { ColorScheme } from './types'
import { useIdGenerator } from '~/composables/id-generator'

const props = withDefaults(
	defineProps<{
		/**
		 * Text for checkbox label
		 */
		label?: string
		/**
		 * Id for component and label
		 */
		id?: string
		/**
		 * The color of the component.
		 * @default primary
		 */
		colorScheme?: ColorScheme
		/**
		 * The native input’s value
		 */
		value?: string
		/**
		 * Value used for v-model
		 */
		modelValue?: boolean | string[]
		/**
		 * Disabled state of the component
		 */
		disabled?: boolean
	}>(),
	{
		label: '',
		colorScheme: 'primary',
		id: '',
		modelValue: undefined,
		value: '',
		disabled: false,
	}
)

const emits = defineEmits(['update:modelValue'])

const generatedId = useIdGenerator()
const inputId = computed(() => (props.id === '' ? generatedId : props.id))

const slots = useSlots()

/**
 * Main css classes
 */
const checkboxClasses = computed(() => [
	'checkbox',
	`checkbox--${props.colorScheme}`,
	props.label === '' ? '' : 'checkbox--with-label',
	slots.label ? 'checkbox--with-label' : '',
])

const checked = computed(() => {
	if (typeof props.modelValue === 'object') {
		return props.modelValue.includes(props.value)
	}

	return props.modelValue
})

const onValueChange = () => {
	if (typeof props.modelValue === 'object') {
		if (checked.value) {
			const filteredValue = props.modelValue.filter(
				(item) => item !== props.value
			)
			emits('update:modelValue', filteredValue)

			return
		}

		const updatedValue = [...props.modelValue, props.value]
		emits('update:modelValue', updatedValue)

		return
	}

	emits('update:modelValue', !props.modelValue)
}
</script>
