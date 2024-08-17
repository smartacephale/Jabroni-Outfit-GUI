import { createApp } from "vue";
import { DefaultScheme } from "./default-scheme";
import type { Scheme } from "./types";
import type { JabroniOutfitStore } from "../store/store";
import App from "./vue-templates/App.vue"
import { parseDom } from "../utils";

export class JabroniOutfitUI {
  constructor({ state, stateLocale }: JabroniOutfitStore, scheme: Scheme = DefaultScheme) {
    const root = parseDom('<div id="tapermonkey-app" class="taper-class" style="position: relative; z-index: 999999;"></div>');
    document.body.appendChild(root);
    const app = createApp(App, { state, stateLocale, scheme });
    app.mount("#tapermonkey-app");
  }
}