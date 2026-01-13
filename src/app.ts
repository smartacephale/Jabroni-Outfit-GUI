import './style/index.css';
import 'virtual:uno.css';
import { createApp } from 'vue';
import App from './components/App.vue';
import { SchemeParser } from './scheme/parser';
import type { JabronioStore } from './store';
import type { SchemeInput } from './types';

const DEFAULT_ROOT = 'jabroni-outfit-root';

export class JabronioGUI {
  public app: ReturnType<typeof createApp>;

  private createRoot() {
    const host = document.createElement('div');
    host.id = DEFAULT_ROOT;
    host.style.position = 'relative';
    host.style.zIndex = '9999999';
    document.body.appendChild(host);

    const appRoot = document.createElement('div');
    host.append(appRoot);

    return appRoot;
  }

  constructor(
    scheme: SchemeInput,
    store: JabronioStore,
    position = 'fixed right-0 bottom-0',
  ) {
    const parsed = SchemeParser.parse(scheme, store);
    this.app = createApp(App, {
      state: store.state,
      scheme: parsed.scheme,
      position,
    });
    const root = this.createRoot();
    this.app.mount(root);
  }
}
