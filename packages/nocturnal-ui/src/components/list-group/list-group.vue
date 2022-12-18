<template>
	<div>
		<ul :class="cssClasses">
			<slot />
		</ul>
	</div>
</template>

<script lang="ts">
export default {
	name: 'NxListGroup',
}
</script>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { ColorScheme } from '~/types/color'

const props = withDefaults(
	defineProps<{
		modelValue?: string | number
		color?: ColorScheme
	}>(),
	{
		modelValue: undefined,
		color: undefined,
	}
)

const emits = defineEmits(['update:modelValue'])

const listValue = computed(() => props.modelValue)
const listColor = computed(() => props.color)
const updateListValue = (value: unknown) => emits('update:modelValue', value)

provide('listValue', { listValue, listColor, updateListValue })

const cssClasses = computed(() => ['list-group'])
</script>
