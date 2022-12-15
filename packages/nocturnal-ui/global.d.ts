// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NxButton: typeof import('./dist/types/components/button')['NxButton']
    NxCard: typeof import('./src/components/card')['NxCard']
    NxCheckbox: typeof import('./src/components/checkbox')['NxCheckbox']
    NxChip: typeof import('./src/components/chip')['NxChip']
    NxDialog: typeof import('./dist/types/components/dialog')['NxDialog']
  }
}

export {}
