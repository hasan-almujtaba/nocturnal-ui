<template>
	<button
		:class="cssClasses"
		:disabled="props.disabled"
	>
		<div
			v-if="props.loading"
			class="btn--loader"
		>
			<span class="loader" />
		</div>

		<slot name="leftIcon" />

		<span class="btn--label">
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

<style lang="postcss">
.btn {
	height: 40px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 0 8px;
	font-size: 14px;
	position: relative;
	cursor: pointer;
	outline: none;
	border-radius: 100px;
	font-weight: 500;
	letter-spacing: 0.1px;
	text-transform: capitalize;
	box-sizing: border-box;
	overflow: hidden;
	vertical-align: middle;
	border: none;
	padding-left: 24px;
	padding-right: 24px;

	/* Button on disable state */
	&:disabled {
		cursor: default;
		pointer-events: none;

		color: var(--on-surface);
		opacity: 0.38;

		&::after {
			background-color: var(--on-surface);
			opacity: 0.12;
		}
	}
	/* Button on disable state */

	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: currentColor;
		opacity: 0;
		border-radius: inherit;
		transition: opacity 0.2s;
	}

	&:not([disabled]) {
		&:hover {
			&::after {
				opacity: 0.08;
			}
		}

		&:active {
			&::after {
				opacity: 0.12;
			}
		}
	}

	& .btn--loader {
		background-color: var(--surface);
	}

	& .loader {
		border-color: currentColor;
		border-bottom-color: transparent;
	}

	/* Filled variant */
	&--filled {
		transition: box-shadow 0.2s;

		&:not([disabled]) {
			&:hover {
				box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
					0px 1px 3px 1px rgba(0, 0, 0, 0.15);
			}

			&:active {
				box-shadow: none;
			}

			/* Color scheme */
			&.btn--primary {
				background-color: var(--primary);
				color: var(--on-primary);
			}

			&.btn--secondary {
				background-color: var(--secondary);
				color: var(--on-secondary);
			}

			&.btn--tertiary {
				background-color: var(--tertiary);
				color: var(--on-tertiary);
			}

			&.btn--error {
				background-color: var(--error);
				color: var(--on-error);
			}
			/* Color scheme */
		}

		& .btn--loader {
			background-color: inherit;
		}
	}
	/* Filled variant */

	/* Outlined variant */
	&--outlined {
		background-color: transparent;
		border: 1px solid currentColor;

		&:not([disabled]) {
			/* Color scheme */
			&.btn--primary {
				color: var(--primary);
			}

			&.btn--secondary {
				color: var(--secondary);
			}

			&.btn--tertiary {
				color: var(--tertiary);
			}

			&.btn--error {
				color: var(--error);
			}
			/* Color scheme */
		}

		&:disabled {
			&::after {
				background-color: transparent;
				border: 1px solid var(--on-surface);
			}
		}
	}
	/* Outlined variant */

	/* Text variant */
	&--text {
		background-color: transparent;

		&:not([disabled]) {
			/* Color scheme */
			&.btn--primary {
				color: var(--primary);
			}

			&.btn--secondary {
				color: var(--secondary);
			}

			&.btn--tertiary {
				color: var(--tertiary);
			}

			&.btn--error {
				color: var(--error);
			}
			/* Color scheme */
		}

		&:disabled {
			&::after {
				background-color: transparent;
			}
		}
	}
	/* Text variant */

	/* Elevated variant */
	&--elevated {
		transition: box-shadow 0.2s;
		background-color: var(--surface);

		&:not([disabled]) {
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
				0px 1px 3px 1px rgba(0, 0, 0, 0.15);

			&::after {
				opacity: 0.05;
			}

			&:hover {
				box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
					0px 2px 6px 2px rgba(0, 0, 0, 0.15);
			}

			&:active {
				box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
					0px 1px 3px 1px rgba(0, 0, 0, 0.15);
			}

			/* Color scheme */
			&.btn--primary {
				color: var(--primary);
			}

			&.btn--secondary {
				color: var(--secondary);
			}

			&.btn--tertiary {
				color: var(--tertiary);
			}

			&.btn--error {
				color: var(--error);
			}
			/* Color scheme */
		}
	}
	/* Elevated variant */

	/* Tonal variant */
	&--tonal {
		transition: box-shadow 0.2s;

		/* Color scheme */
		&:not([disabled]) {
			&:hover {
				box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
					0px 1px 3px 1px rgba(0, 0, 0, 0.15);
			}

			&:active {
				box-shadow: none;
			}

			&.btn--primary {
				background-color: var(--primary-container);
				color: var(--on-primary-container);
			}

			&.btn--secondary {
				background-color: var(--secondary-container);
				color: var(--on-secondary-container);
			}

			&.btn--tertiary {
				background-color: var(--tertiary-container);
				color: var(--on-tertiary-container);
			}

			&.btn--error {
				background-color: var(--error-container);
				color: var(--on-error-container);
			}
		}
		/* Color scheme */

		& .btn--loader {
			background-color: inherit;
		}
	}
	/* Tonal variant */

	&--label {
		flex: 1 1 auto;
	}

	&--loading {
		pointer-events: none;
		cursor: default;
	}

	&--loader {
		position: absolute;
		border-radius: inherit;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&--with-left-icon {
		padding-left: 16px;
	}

	&--with-right-icon {
		padding-right: 16px;
	}

	&--block {
		display: flex;
		width: 100%;
	}
}
</style>
