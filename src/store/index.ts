import { parseIntegerOr } from 'billy-herrington-utils';
import { watch } from 'vue';
import type {
  Callback,
  Primitive,
  StoreState,
  StoreStateOptions,
  StoreStateRaw,
} from '../types';
import { StoreStateDefault } from './default-state';
import { PersistentState } from './persistent-state';

export class JabronioStore {
  private callbacks: Callback<StoreStateRaw>[] = [];
  public state: StoreState;

  constructor(options?: StoreStateOptions) {
    const storeOptions = Object.assign({}, StoreStateDefault, options);
    this.state = new PersistentState({}).state;
    this.parseState(storeOptions);
  }

  subscribe(callback: Callback<StoreStateRaw>) {
    this.callbacks.push(callback);
  }

  notify(subject: StoreStateRaw) {
    this.callbacks.forEach((cb) => {
      cb(subject);
    });
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
        this.notify({ [subject]: this.state[subject] as Primitive });
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
