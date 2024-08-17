import { createApp } from "vue";
import { DefaultScheme } from "./default-scheme";
import type { Scheme, UIPosition } from "./types";
import type { JabroniOutfitStore } from "../store/store";
import App from "./vue-templates/App.vue"
import { parseDom } from "billy-herrington-utils";

export class JabroniOutfitUI {
  private getRoot(rootSelector: string | undefined) {
    let root: string | undefined = rootSelector;
    if (!root) {
      const rootEl = parseDom('<div id="jabroni-outfit" style="position: relative; z-index: 999999;"></div>');
      document.body.appendChild(rootEl);
      root = "#tapermonkey-app";
    }
    document.querySelector(root)?.classList.add('taper-class');
    return root;
  }

  constructor(
    { state, stateLocale }: JabroniOutfitStore,
    scheme: Scheme = DefaultScheme,
    rootSelector?: string,
    position: UIPosition = { fixed: true, right: true, bottom: true }
  ) {
    const app = createApp(App, { state, stateLocale, scheme, position });
    app.mount(this.getRoot(rootSelector));
  }
}
