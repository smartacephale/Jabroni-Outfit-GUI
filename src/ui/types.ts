export interface SchemeRowEl {
  type: 'checkbox' | 'text' | 'number' | 'span' | 'button';
  model?: string,
  label?: string,
  labelBefore?: string,
  innerText?: string,
  max?: string,
  min?: string,
  step?: string,
  "v-if"?: string,
  placeholder?: string
  callback?: () => void
}

export type SchemeRow = SchemeRowEl[];

export interface Scheme {
  [key: string]: SchemeRow
}