// import 'virtual:uno.css';// main.ts
import './style/index.css';
import { parseDom } from 'billy-herrington-utils';
import { createApp } from 'vue';
import App from './components/App.vue';
import { SchemeParser } from './scheme/parser';
import type { JabronioStore } from './store';
import type { SchemeInput } from './types';

const DEFAULT_ROOT = 'jabroni-outfit-root';

export class JabronioGUI {
  public app: ReturnType<typeof createApp>;

  private getRoot(rootSelector: string) {
    if (rootSelector === DEFAULT_ROOT) {
      const rootEl = parseDom(
        `<div id="${rootSelector}" style="position: relative; z-index: 999999;"></div>`,
      );
      document.body.appendChild(rootEl);
    }
    document.getElementById(rootSelector)?.classList.add('taper-class');
    return `#${rootSelector}`;
  }

  constructor(
    scheme: SchemeInput,
    store: JabronioStore,
    rootSelector = DEFAULT_ROOT,
    position = 'fixed right-0 bottom-0',
  ) {
    const parsed = SchemeParser.parse(scheme, store);
    this.app = createApp(App, {
      state: store.state,
      scheme: parsed.scheme,
      position,
    });
    this.app.mount(this.getRoot(rootSelector));
  }
}
