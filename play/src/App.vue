<template>
	<div>
		<NxButton
			variant="elevated"
			@click="value = true"
		>
			Open Dialog
		</NxButton>
		<NxDialog v-model="value">
			<template #title>Dialog Title</template>
			<template #default>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi a
				minima ratione consectetur consequatur harum nihil qui eius nam?
			</template>
			<template #actions>
				<NxButton variant="text"> Agree </NxButton>
				<NxButton
					variant="text"
					@click="value = false"
				>
					Cancel
				</NxButton>
			</template>
		</NxDialog>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import IconAccessibility from '~icons/mdi/calendar-clock-outline'

const value = ref(false)
</script>
