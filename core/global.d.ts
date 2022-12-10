// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NxButton: typeof import('./src/components/button')['NxButton']
    NxCard: typeof import('./src/components/card')['NxCard']
    NxCheckbox: typeof import('./src/components/checkbox')['NxCheckbox']
  }
}

export {}
