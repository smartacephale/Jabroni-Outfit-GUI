import { JabronioGUI } from '../app';
import { setupScheme } from '../scheme/default-scheme';
import { JabronioStore } from '../store';

export function jabroniInit<T extends Parameters<typeof setupScheme>[0]>(a: T) {
  const scheme = setupScheme(a);
  const store = new JabronioStore();
  const gui = new JabronioGUI(scheme, store);
  return {
    store,
    gui,
  };
}
