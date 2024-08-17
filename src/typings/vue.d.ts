declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const component: DefineComponent<object, object, any>
  export default component
}