import type { Subject } from 'rxjs';
import type {
  HTMLInputType,
  HTMLTag,
  HTMLTagOrInputType,
  Primitive,
  RawSchemeElement,
} from '../types';
import { propsDifference } from '../utils';

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

  constructor(schemeElement: RawSchemeElement, eventSubject: Subject<string>) {
    const { d2 } = propsDifference(this, schemeElement);
    Object.assign(this, schemeElement);
    this.parseModel(d2);
    this.parseType(eventSubject);
    this.parseLabel();
    this.id = this.name || window.crypto.randomUUID();
  }

  private parseType(eventSubject: Subject<string>) {
    if (this.type !== 'div') return;
    if (this.value !== undefined) {
      let parsedType: string = typeof this.value;
      if (parsedType === 'time') return;
      if (parsedType === 'function') {
        parsedType = 'button';
        this.parseButton(eventSubject);
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

  private parseButton(eventSubject: Subject<string>) {
    if (typeof this.value === 'function') {
      this.type = 'button';
      const temp = this.value;
      this.value = () => {
        eventSubject.next(this.name as string);
        temp();
      };
    } else if (this.type === 'button') {
      this.value = () => {
        eventSubject.next(this.name as string);
      };
    }
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
