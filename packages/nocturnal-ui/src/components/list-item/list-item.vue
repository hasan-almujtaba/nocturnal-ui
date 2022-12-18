<template>
	<li
		:class="cssClasses"
		@click="onListItemClick"
	>
		<div
			v-if="$slots.leadingIcon"
			class="list-item__leading-icon"
		>
			<slot name="leadingIcon" />
		</div>

		<div class="list-item__content">
			<div class="list-item__title">
				{{ props.title }}
			</div>

			<div class="list-item__text">
				{{ props.text }}
			</div>
		</div>

		<div
			v-if="$slots.trailingIcon"
			class="list-item__trailing-icon"
		>
			<slot name="trailingIcon" />
		</div>
	</li>
</template>

<script lang="ts">
export default {
	name: 'NxListItem',
}
</script>

<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue'
import { ColorScheme } from '~/types/color'
import { ListProvider } from '~/types/provider'

const props = withDefaults(
	defineProps<{
		value?: string | number | Record<string, unknown>
		title: string
		text?: string
		color?: ColorScheme
	}>(),
	{
		value: undefined,
		text: undefined,
		color: undefined,
	}
)

const attributes = useAttrs()

const { listColor, listValue, updateListValue } = inject(
	'listValue'
) as ListProvider

const listValueProvided = computed(() => listValue.value !== undefined)

const onListItemClick = () => {
	if (listValueProvided.value) {
		updateListValue(props.value)
		return
	}
}

const listColorProvided = computed(() => listColor.value !== undefined)

const listItemColor = computed(() => {
	if (listColorProvided.value) {
		return listColor.value
	}

	return props.color
})

const cssClasses = computed(() => [
	'list-item',
	listColorProvided.value ? `list-item--${listItemColor.value}` : '',
	listValueProvided.value && listValue.value === props.value
		? 'list-item--selected'
		: '',
	listValueProvided.value || attributes.onClick ? 'list-item--clickable' : '',
])
</script>
