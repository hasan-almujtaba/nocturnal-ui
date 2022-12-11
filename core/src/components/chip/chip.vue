<template>
	<Transition name="fade">
		<span
			v-show="show"
			:class="cssClasses"
			draggable="true"
		>
			<Transition
				name="fade"
				mode="out-in"
			>
				<span
					v-if="props.selected"
					class="chip__leading-icon"
				>
					<slot name="selectedIcon">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"
							/>
						</svg>
					</slot>
				</span>

				<span
					v-else-if="$slots.leadingIcon && !props.selected"
					class="chip__leading-icon"
				>
					<slot name="leadingIcon" />
				</span>
			</Transition>

			<slot />

			<button
				v-if="props.closable && !props.disabled"
				class="chip__trailing-icon"
				@click="onCloseButtonClick"
			>
				<slot name="trailingIcon">
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
						/>
					</svg>
				</slot>
			</button>
		</span>
	</Transition>
</template>

<script lang="ts">
export default {
	name: 'NxChip',
}
</script>

<script setup lang="ts">
import { computed, ref, useAttrs, useSlots } from 'vue'
import { ColorScheme } from '~/types/color'

const props = withDefaults(
	defineProps<{
		/**
		 * Component color scheme
		 */
		colorScheme?: ColorScheme
		/**
		 * Add remove button and hide chip functionality
		 */
		closable?: boolean
		/**
		 * Set chip style to selected state
		 */
		selected?: boolean
		disabled?: boolean
	}>(),
	{
		colorScheme: undefined,
		closable: false,
	}
)

const slots = useSlots()

const attributes = useAttrs()

const cssClasses = computed(() => [
	'chip',
	props.colorScheme ? `chip--${props.colorScheme}` : '',
	props.closable && !props.disabled ? 'chip--with-trailing-icon' : '',
	props.selected ? 'chip--selected' : '',
	props.disabled ? 'chip--disabled' : '',
	slots.leadingIcon || props.selected ? 'chip--with-leading-icon' : '',
	attributes.onClick ? 'chip--clickable' : '',
])

const show = ref(true)

const onCloseButtonClick = () => (show.value = false)
</script>

<style lang="postcss">
.chip {
	display: inline-flex;
	align-items: center;
	border-radius: 0.5rem;
	border: 0.0625rem solid var(--outline);
	padding: 0.375rem 0.75rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: var(--on-surface);
	position: relative;
	height: 2rem;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		background-color: currentColor;
		opacity: 0;
	}

	&:not(.checkbox--disabled) {
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

	&--disabled {
		opacity: 0.38;
		border: none;
		pointer-events: none;
	}

	&--primary {
		background-color: var(--primary-container);
		color: var(--on-primary-container);

		&.chip--selected {
			background-color: var(--primary);
			color: var(--on-primary);
		}
	}

	&--secondary {
		background-color: var(--secondary-container);
		color: var(--on-secondary-container);

		&.chip--selected {
			background-color: var(--secondary);
			color: var(--on-secondary);
		}
	}

	&--tertiary {
		background-color: var(--tertiary-container);
		color: var(--on-tertiary-container);

		&.chip--selected {
			background-color: var(--tertiary);
			color: var(--on-tertiary);
		}
	}

	&--error {
		background-color: var(--error-container);
		color: var(--on-error-container);

		&.chip--selected {
			background-color: var(--error);
			color: var(--on-error);
		}
	}

	&__leading-icon {
		margin-right: 8px;
	}

	&__trailing-icon {
		background-color: transparent;
		color: inherit;
		border: none;
		padding: 0;
		margin-left: 8px;
		cursor: pointer;
		z-index: 10;
	}

	&--with-leading-icon {
		padding-left: 8px;
	}

	&--with-trailing-icon {
		padding-right: 8px;
	}

	&--clickable {
		cursor: pointer;
		user-select: none;
	}
}
</style>
