<template>
	<div>
		<NxListGroup color="primary">
			<NxListItem
				v-for="(item, i) in dummy"
				:key="i"
				:title="item.title"
				:value="i"
			>
			</NxListItem>
		</NxListGroup>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const dummy = [
	{
		title: 'Lorem ipsum dolor sit.',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, saepe.',
	},
	{
		title: 'Lorem ipsum dolor sit.',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, saepe.',
	},
	{
		title: 'Lorem ipsum dolor sit.',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, saepe.',
	},
]

// const test = (value_) => alert(value_)

const value = ref('')
</script>
