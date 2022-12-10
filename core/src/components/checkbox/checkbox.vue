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

<style lang="postcss">
.checkbox {
	width: 18px;
	height: 18px;
	appearance: none;
	border: 2px solid var(--on-surface-variant);
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	position: relative;

	&__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&::before {
		content: '';
		position: absolute;
		top: -15px;
		right: -15px;
		bottom: -15px;
		left: -15px;
		border-radius: 100px;
		background-color: currentColor;
		opacity: 0;
		transition: opacity 0.2s;
	}

	&:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
		border-color: currentColor;
		background-color: currentColor;
	}

	&:hover {
		&::before {
			opacity: 0.12;
		}
	}

	&:active {
		&::before {
			opacity: 0.2;
		}
	}

	&:disabled {
		border-color: var(--on-surface);
		color: var(--on-surface);
		opacity: 0.38;
		pointer-events: none;

		& + label {
			color: var(--on-surface);
			opacity: 0.38;
			pointer-events: none;
		}
	}

	&--primary {
		color: var(--primary);
	}

	&--secondary {
		color: var(--secondary);
	}

	&--tertiary {
		color: var(--tertiary);
	}

	&--error {
		color: var(--error);
	}

	&__label {
		color: var(--on-surface);
		flex: 1 1 auto;
		font-size: 16px;
		cursor: pointer;
		font-weight: 500;
		user-select: none;
	}

	&--with-label {
		margin-right: 8px;
	}
}
</style>
