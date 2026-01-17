import type {
  HTMLInputType,
  HTMLTag,
  HTMLTagOrInputType,
  Primitive,
  RawSchemeElement,
} from '../types';
import { propsDifference, uuidv4 } from '../utils';

export class SchemeElement {
  public name?: string;
  public value?: Primitive | (() => void);
  public watch?: string;
  public step?: string;
  public min?: string;
  public max?: string;
  public vif?: string;
  public text?: string;
  public type: HTMLTagOrInputType = 'div';
  public label?: string;
  public placeholder?: string;
  public id: string;

  constructor(schemeElement: RawSchemeElement) {
    const { d2 } = propsDifference(this, schemeElement);
    Object.assign(this, schemeElement);
    this.parseModel(d2);
    this.parseType();
    this.parseLabel();
    this.id = this.name || uuidv4();
  }

  private parseType() {
    if (this.type !== 'div') return;
    if (this.value !== undefined) {
      let parsedType: string = typeof this.value;
      if (parsedType === 'time') return;
      if (parsedType === 'function') {
        parsedType = 'button';
      } else if (parsedType === 'string') {
        parsedType = 'text';
      } else if (parsedType === 'number') {
        parsedType = 'number';
        this.parseNumber();
      } else if (parsedType === 'boolean') {
        parsedType = 'checkbox';
      }
      this.type = parsedType as HTMLInputType;
    } else if (this.text) {
      this.type = 'span';
    }
  }

  private parseNumber() {
    if (this.min || this.max || this.step) return;
    this.min = '0';
    this.step = '10';
  }

  private parseLabel() {
    if (this.label !== undefined || this.type === 'button') return;
    this.label = this.name;
  }

  private parseModel(differenceKeys: string[]) {
    if (this.name && this.value) return;
    const name = differenceKeys[0];
    if (name) {
      this.name = name;
      this.value = this[name] as Primitive | (() => void);
      delete this[name];
    }
  }

  get isInput() {
    return /checkbox|text|number/.test(this.type);
  }

  get htmlTag(): HTMLTag {
    return this.isInput ? 'input' : (this.type as HTMLTag);
  }

  get inputType(): HTMLInputType {
    return this.isInput ? (this.type as HTMLInputType) : '';
  }

  get callback(): (() => void) | undefined {
    return this.htmlTag === 'button' ? (this.value as () => void) : undefined;
  }
}
