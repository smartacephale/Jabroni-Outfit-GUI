import '@unocss/reset/normalize.css';
import { defineCustomElement } from 'vue';
import AppCustomElement from './components/App.vue'; // Note the .ce.vue extension
import { SchemeParser } from './scheme/parser';
import type { JabronioStore } from './store';
import type { SchemeInput } from './types';

const TAG_NAME = 'jabronio-widget';
const CustomElementDef = defineCustomElement(AppCustomElement);
if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, CustomElementDef);
}

export class JabronioGUI {
  public element: InstanceType<typeof CustomElementDef>;

  constructor(
    scheme: SchemeInput,
    store: JabronioStore,
    position = 'fixed right-0 bottom-0',
  ) {
    const parsed = SchemeParser.parse(scheme, store);

    this.element = new CustomElementDef();

    Object.assign(this.element, {
      state: store.state,
      scheme: parsed.scheme,
      position: position,
    });

    document.body.appendChild(this.element);
  }

  public destroy() {
    this.element.remove();
  }
}
