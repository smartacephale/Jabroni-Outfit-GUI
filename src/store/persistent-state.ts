import { type Reactive, reactive, type WatchStopHandle, watch } from 'vue';
import type { StoreStateRaw } from '../types';

const LOCAL_STORAGE_KEY = 'state_acephale';

export class PersistentState {
  public state: Reactive<StoreStateRaw>;
  private watchStopHandler: WatchStopHandle;

  constructor(
    storeStateRaw: StoreStateRaw,
    private key = LOCAL_STORAGE_KEY,
  ) {
    this.key = key;
    this.state = reactive(storeStateRaw);
    this.sync();
    this.watchStopHandler = this.watchPersistence();
  }

  dispose() {
    this.watchStopHandler();
    window.removeEventListener('focus', this.setFromLocalStorage);
    document.removeEventListener('visibilitychange', this.setFromLocalStorage);
  }

  sync() {
    this.setFromLocalStorage();
    window.addEventListener('focus', this.setFromLocalStorage);
    document.addEventListener('visibilitychange', this.setFromLocalStorage);
  }

  watchPersistence() {
    return watch(
      this.state,
      () => {
        this.saveToLocalStorage();
      },
      { immediate: false, deep: true },
    );
  }

  get persistentOnly() {
    const persistentKeys = Object.keys(this.state).filter(
      (k) => !k.startsWith('$'),
    );
    const persistentOnly = Object.assign(
      {},
      ...persistentKeys.map((k) => ({ [k]: this.state[k] })),
    );
    return persistentOnly;
  }

  saveToLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.persistentOnly));
  }

  setFromLocalStorage = () => {
    const localStorageValue = localStorage.getItem(this.key);
    if (localStorageValue !== null) {
      const parsedState = JSON.parse(localStorageValue) as StoreStateRaw;
      Object.assign(this.state, parsedState);
    }
  };
}
