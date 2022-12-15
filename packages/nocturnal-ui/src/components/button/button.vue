<template>
	<button
		:class="cssClasses"
		:disabled="props.disabled"
	>
		<div
			v-if="props.loading"
			class="btn__loader"
		>
			<span class="loader" />
		</div>

		<slot name="leftIcon" />

		<span class="btn__label">
			<slot />
		</span>

		<slot name="rightIcon" />
	</button>
</template>

<script lang="ts">
export default {
	name: 'NxButton',
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { Variant, ColorScheme } from './types'

const props = withDefaults(
	defineProps<{
		/**
		 * The variant to use.
		 * @default filled
		 */
		variant?: Variant
		/**
		 * The color of the component.
		 * @default primary
		 */
		colorScheme?: ColorScheme
		/**
		 * Loading state of the component
		 * @default false
		 */
		loading?: boolean
		/**
		 * Native button type
		 * @default button
		 */
		type?: 'button' | 'submit' | 'reset'
		/**
		 * Disabled state of the component
		 */
		disabled?: boolean
		/**
		 * Expands the button width to 100% of available space
		 */
		block?: boolean
	}>(),
	{
		variant: 'filled',
		colorScheme: 'primary',
		loading: false,
		type: 'button',
		block: false,
	}
)

const slots = useSlots()

/**
 * Main css classes
 */
const cssClasses = computed(() => [
	'btn',
	`btn--${props.variant}`,
	`btn--${props.colorScheme}`,
	props.loading ? 'btn--loading' : '',
	props.block ? 'btn--block' : '',
	slots.leftIcon ? 'btn--with-left-icon' : '',
	slots.rightIcon ? 'btn--with-right-icon' : '',
])
</script>
