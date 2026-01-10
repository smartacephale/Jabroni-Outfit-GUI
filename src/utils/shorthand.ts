import { JabronioGUI } from '../app';
import { setupScheme } from '../scheme/default-scheme';
import { JabronioStore } from '../store';

export function jabroniInit<
  T extends Parameters<typeof setupScheme>,
  A extends T[0],
  B extends T[1],
>(a: A, b?: B) {
  const scheme = setupScheme(a, b);
  const store = new JabronioStore();
  const gui = new JabronioGUI(scheme, store);
  return {
    store,
    gui,
  };
}
