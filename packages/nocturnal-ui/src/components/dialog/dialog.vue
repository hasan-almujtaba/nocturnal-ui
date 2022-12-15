<template>
	<Transition
		name="fade"
		@after-enter="toggleContent"
	>
		<div
			v-if="showOverlay"
			class="dialog__wrapper"
			@click.self="toggleDialog"
		>
			<Transition
				name="scale-in"
				@after-leave="toggleOverlay"
			>
				<div
					v-if="showContent"
					class="dialog"
					:style="dialogStyles"
				>
					<div class="dialog__title">
						<slot name="title" />
					</div>

					<div class="dialog__content">
						<slot />
					</div>

					<div class="dialog__actions">
						<slot name="actions" />
					</div>
				</div>
			</Transition>
		</div>
	</Transition>
</template>

<script lang="ts">
export default {
	name: 'NxDialog',
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(
	defineProps<{
		/**
		 * Value used for v-model
		 */
		modelValue?: boolean
		/**
		 * Customize dialog width
		 */
		width?: string
		/**
		 * Customize dialog width
		 */
		minWidth?: string
		/**
		 * Customize dialog width
		 */
		maxWidth?: string
	}>(),
	{
		width: '312px',
		minWidth: undefined,
		maxWidth: undefined,
	}
)

const emits = defineEmits(['update:modelValue'])

const dialogStyles = computed(() => ({
	width: props.width,
	minWidth: props.minWidth,
	maxWidth: props.maxWidth,
}))

const showOverlay = ref(false)
const toggleOverlay = () => (showOverlay.value = !showOverlay.value)

const showContent = ref(false)
const toggleContent = () => (showContent.value = !showContent.value)

watch(props, () => {
	if (props.modelValue) {
		showOverlay.value = true
		return
	}

	showContent.value = !showContent.value
})

const toggleDialog = () => emits('update:modelValue', !props.modelValue)

onMounted(() => {
	document.addEventListener('keyup', (event) => {
		if (event.key === 'Escape') toggleDialog()
	})
})
</script>
