import { type Reactive, reactive, watch } from 'vue'
import type { RecordV } from './types';

export class PersistentState {
  public state: Reactive<RecordV>;

  constructor(state_: RecordV, private key = "state_acephale") {
    this.key = key;
    this.state = reactive(state_);
    this.sync();
    this.watchPersistence();
  }

  sync() {
    this.trySetFromLocalStorage();
    window.addEventListener('focus', this.trySetFromLocalStorage);
  }

  watchPersistence() {
    watch(this.state, (value) => {
      this.saveToLocalStorage(this.key, value);
    });
  }

  saveToLocalStorage(key: string, value: RecordV) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  trySetFromLocalStorage = () => {
    const localStorageValue = localStorage.getItem(this.key);
    if (localStorageValue !== null) {
      const parsedState = JSON.parse(localStorageValue) as RecordV;
      Object.assign(this.state, parsedState);
    }
  }
}