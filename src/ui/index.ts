import { createApp, reactive } from "vue";
import { parseDom } from "../utils";
import { DefaultScheme } from "./default-scheme";
import { schemeParser } from "./scheme-parser";
import type { Scheme } from "./types";
import type { JabroniOutfitStore } from "../store/store";

export class JabroniOutfitUI {
  template = (parsed: string) => `
  <div class="fixed bottom-0 right-0 z-9999 rounded bg-zinc-800 max-w-full p-2 m-2"
    :class="state.hidden ? 'hover:bg-gray-600' : ''" v-if="state.uiEnabled">

    <div class="flex items-center cursor-pointer py-1 px-2 m-1 rounded"
      :class="!state.hidden ? 'hover:bg-zinc-900' : ''" @click="state.hidden = !state.hidden">
      <span class="m-auto flex mono">
        <span v-if="state.hidden && stateLocale.pagIndexLast > 1" class="px-3 py-2 mr-2 bg-gray-700 text-zinc-300 font-mono rounded ">
          {{ stateLocale.pagIndexCur }}/{{ stateLocale.pagIndexLast }}
        </span>
        <svg v-if="state.hidden" class="h-7 w-7 fill-gray-600 stroke-gray-400" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
        <svg v-if="!state.hidden" class="h-7 w-7 fill-gray-600 stroke-gray-400" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </span>
    </div>

    <template v-if="!state.hidden">${parsed}</template>
  </div>`;

  constructor({ state, stateLocale }: JabroniOutfitStore, scheme: Scheme = DefaultScheme) {
    const root = parseDom('<div id="tapermonkey-app" style="position: relative; z-index: 999999;"></div>');
    document.body.appendChild(root);

    const { parsedScheme, callbacks } = schemeParser(scheme);
    const template = this.template(parsedScheme);

    const app = createApp({
      setup: () => {
        const cbState = reactive(Object.keys(callbacks).reduce(
          (acc, k) => { acc[k] = false; return acc }, {} as Record<string, boolean>));
        Object.entries(callbacks).forEach(([k, v]) => {
          callbacks[k] = async () => {
            await v();
            cbState[k] = true;
          }
        });
        return { state, stateLocale, ...callbacks, cbState };
      },
      template
    });

    app.mount("#tapermonkey-app");
  }
}
