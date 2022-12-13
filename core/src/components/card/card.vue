<template>
	<div
		:class="containerClasses"
		:style="containerStyles"
	>
		<div
			v-if="$slots.header"
			class="card__header"
			:class="props.headerClass"
		>
			<slot name="header" />
		</div>

		<slot />

		<div
			v-if="$slots.text"
			class="card__text"
			:class="props.textClass"
		>
			<slot name="text" />
		</div>

		<div
			v-if="$slots.actions"
			class="card__actions"
			:class="props.actionsClass"
		>
			<slot name="actions" />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'NxCard',
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Variant } from './types'

const props = withDefaults(
	defineProps<{
		/**
		 * Card variant
		 * @default outlined
		 */
		variant?: Variant
		/**
		 * Custom CSS class for header slot
		 */
		headerClass?: string
		/**
		 * Custom CSS class for text slot
		 */
		textClass?: string
		/**
		 * Custom CSS class for actions slot
		 */
		actionsClass?: string
		/**
		 * Customize card width
		 */
		width?: string
		/**
		 * Customize card width
		 */
		minWidth?: string
		/**
		 * Customize card width
		 */
		maxWidth?: string
	}>(),
	{
		variant: 'outlined',
		headerClass: '',
		textClass: '',
		actionsClass: '',
		width: undefined,
		minWidth: undefined,
		maxWidth: undefined,
	}
)

const containerClasses = computed(() => ['card', `card--${props.variant}`])

const containerStyles = computed(() => ({
	width: props.width,
	minWidth: props.minWidth,
	maxWidth: props.maxWidth,
}))
</script>
