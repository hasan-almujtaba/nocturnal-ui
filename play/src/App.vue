<template>
	<div>
		<NxButton
			variant="tonal"
			@click="value = true"
		>
			Open Dialog
		</NxButton>
		<NxChip>Blazing</NxChip>
		<!-- <OAutocomplete> </OAutocomplete> -->
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import IconAccessibility from '~icons/mdi/calendar-clock-outline'

const value = ref(false)
</script>
