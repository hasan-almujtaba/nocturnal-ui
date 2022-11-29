// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NxButton: typeof import('./src/components/button')['NxButton']
  }
}

export {}
