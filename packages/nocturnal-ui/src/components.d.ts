// Global components for local development
	
import { NxButton } from './components/button'
import { NxCard } from './components/card'
import { NxCheckbox } from './components/checkbox'
import { NxChip } from './components/chip'
import { NxDialog } from './components/dialog'
import { NxListGroup } from './components/list-group'
import { NxListItem } from './components/list-item'
import { NxMenu } from './components/menu'

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		NxButton: typeof NxButton
		NxCard: typeof NxCard
		NxCheckbox: typeof NxCheckbox
		NxChip: typeof NxChip
		NxDialog: typeof NxDialog
		NxListGroup: typeof NxListGroup
		NxListItem: typeof NxListItem
		NxMenu: typeof NxMenu
	}
}
	
export {}
