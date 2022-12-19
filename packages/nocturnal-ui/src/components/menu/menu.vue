<template>
	<div :class="cssClasses">
		<slot
			name="activator"
			:click="onActivatorClick"
		/>

		<Transition name="fade">
			<ul
				v-if="showMenuOverlay"
				class="menu__item-wrapper"
			>
				<slot :on="on" />
			</ul>
		</Transition>
	</div>
</template>

<script lang="ts">
export default {
	name: 'NxMenu',
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{ closeOnClick?: boolean }>(), {
	closeOnClick: false,
})

const showMenuOverlay = ref(false)
const onActivatorClick = () => (showMenuOverlay.value = !showMenuOverlay.value)

const onMenuItemClick = () => {
	if (props.closeOnClick) {
		showMenuOverlay.value = false
	}
}
const on = { click: onMenuItemClick }

const cssClasses = computed(() => ['menu'])
</script>
