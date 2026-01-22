import { Subject } from 'rxjs';
import { watch } from 'vue';
import type {
  Primitive,
  StoreState,
  StoreStateOptions,
  StoreStateRaw,
} from '../types';
import { parseIntegerOr } from '../utils/index.ts';
import { StoreStateDefault } from './default-state';
import { PersistentState } from './persistent-state';

export class JabronioStore {
  public state: StoreState;
  public stateSubject = new Subject<StoreStateRaw>();
  public eventSubject = new Subject<string>();

  constructor(options?: StoreStateOptions) {
    const storeOptions = Object.assign({}, StoreStateDefault, options);
    this.state = new PersistentState({}).state;
    this.parseState(storeOptions);
  }

  add(key: string, value: Primitive, watchKey?: string, safe?: boolean) {
    this.state[key] =
      key in this.state ? (this.state[key] as Primitive) : value;

    watch(
      () => this.state[key],
      (a, b) => {
        if (safe !== false) {
          if (typeof value === 'number') {
            this.state[key] = parseIntegerOr(a as string, b as number);
          }
        }
        const subject = typeof watchKey === 'string' ? watchKey : key;
        this.stateSubject.next({ [subject]: this.state[subject] as Primitive });
      },
      { deep: true },
    );

    return this;
  }

  parseState(options: StoreStateOptions) {
    Object.entries(options).forEach(([k, v]) => {
      if (typeof v === 'object') {
        this.add(k, v.value, v.watch);
      } else {
        this.add(k, v);
      }
    });
  }
}
