// Global components

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		NxButton: typeof import('nocturnal-ui')['NxButton']
    NxCard: typeof import('nocturnal-ui')['NxCard']
    NxCheckbox: typeof import('nocturnal-ui')['NxCheckbox']
    NxChip: typeof import('nocturnal-ui')['NxChip']
    NxDialog: typeof import('nocturnal-ui')['NxDialog']
    NxListGroup: typeof import('nocturnal-ui')['NxListGroup']
    NxListItem: typeof import('nocturnal-ui')['NxListItem']
    NxMenu: typeof import('nocturnal-ui')['NxMenu']
	}
}

export {}
