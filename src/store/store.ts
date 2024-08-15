import { type Reactive, reactive, watch } from "vue";
import type { NotifyApply, RecordV, StateOption, StateOptions } from "./types";
import { PersistentState } from "./persistent-state";
import { parseIntegerOr } from "../utils";
import { defaultStateInclExclMiscPagination } from "./default-state";

export class JabroniOutfitStore {
  private callbacks: (NotifyApply)[] = [];
  public state: Reactive<RecordV> | undefined;
  public stateLocale: Reactive<RecordV> | undefined;

  constructor(options: StateOptions = defaultStateInclExclMiscPagination) {
    this.parseState(options);
  }

  subscribe(callback: NotifyApply) {
    this.callbacks.push(callback);
  }

  notify(subject: RecordV) {
    this.callbacks.forEach(cb => cb(subject));
  }

  parseState = (st: StateOptions) => {
    const persistent = {};
    const nonpersistent = {};

    Object.entries(st).forEach(([k, v]: [string, StateOption]) => {
      ((v.persistent ? persistent : nonpersistent) as RecordV)[k] = v.value;
    });

    Object.assign(this, {
      state: new PersistentState(persistent).state,
      stateLocale: reactive(nonpersistent)
    });

    Object.entries(st).forEach(([k, v]: [string, StateOption]) => {
      if (!v.watch) return;
      const state = (v.persistent ? this.state : this.stateLocale) as Reactive<RecordV>;
      watch(() => state[k], (a, b) => {
        if (v.type === 'number') state[k] = parseIntegerOr(a as string, b as number);
        const isWatchBool = typeof v.watch === 'boolean';
        if (isWatchBool || state[v.watch as string]) {
          const subject = isWatchBool ? k : v.watch as string;
          this.notify({ [subject]: state[subject] } as RecordV);
        }
      }, { deep: true });
    });
  }
}
