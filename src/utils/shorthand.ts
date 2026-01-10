import { JabronioGUI } from '../app';
import { setupScheme } from '../scheme/default-scheme';
import { JabronioStore } from '../store';

export function jabroniInit<T extends Parameters<typeof setupScheme>>(
  a: T[0],
  b: T[1],
) {
  const scheme = setupScheme(a, b);
  const store = new JabronioStore();
  const gui = new JabronioGUI(scheme, store);
  return {
    store,
    gui,
  };
}
