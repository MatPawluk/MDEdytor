/// <reference types="vite/client" />

// Deklaracja dla plików .vue
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
