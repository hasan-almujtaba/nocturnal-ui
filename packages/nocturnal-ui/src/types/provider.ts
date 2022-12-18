import type { ComputedRef } from 'vue'

export type ListProvider = {
	listColor: ComputedRef<unknown>
	listValue: ComputedRef<unknown>
	updateListValue: (value: unknown) => void
}
