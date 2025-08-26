import { createApp } from "vue";
import { DefaultScheme } from "./default-scheme";
import type { Scheme, UIPosition } from "./types";
import type { JabroniOutfitStore } from "../store/store";
import App from "./vue-templates/App.vue"
import { parseDom } from "billy-herrington-utils";

const DEFAULT_ROOT = 'jabroni-outfit-root';

export class JabroniOutfitUI {
  public app: ReturnType<typeof createApp>;

  private getRoot(rootSelector: string) {
    if (rootSelector === DEFAULT_ROOT) {
      const rootEl = parseDom(`<div id="${rootSelector}" style="position: relative; z-index: 999999;"></div>`);
      document.body.appendChild(rootEl);
    }
    document.getElementById(rootSelector)?.classList.add('taper-class');
    return `#${rootSelector}`;
  }

  constructor(
    { state, localState }: JabroniOutfitStore,
    scheme: Scheme = DefaultScheme,
    rootSelector = DEFAULT_ROOT,
    position: UIPosition = { fixed: true, right: true, bottom: true }
  ) {
    this.app = createApp(App, { state, localState, scheme, position });
    this.app.mount(this.getRoot(rootSelector));
  }
}
