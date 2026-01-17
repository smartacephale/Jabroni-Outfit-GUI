import '@unocss/reset/normalize.css';
import { defineCustomElement } from 'vue';
import AppCustomElement from './components/app.vue';
import { SchemeParser } from './scheme/parser';
import type { JabronioStore } from './store';
import type { SchemeInput } from './types';

export class JabronioGUI {
  private createCustomElement() {
    const TAG_NAME = 'jabronio-widget';
    const CustomElementDef = defineCustomElement(AppCustomElement);
    if (!customElements.get(TAG_NAME)) {
      customElements.define(TAG_NAME, CustomElementDef);
    }
    return new CustomElementDef();
  }

  public element: ReturnType<typeof this.createCustomElement>;

  public dispose() {
    this.element.remove();
  }

  constructor(
    scheme: SchemeInput,
    store: JabronioStore,
    position = 'fixed right-0 bottom-0',
  ) {
    const parsed = SchemeParser.parse(scheme, store);

    this.element = this.createCustomElement();

    Object.assign(this.element, {
      state: store.state,
      scheme: parsed.scheme,
      position: position,
    });

    document.body.appendChild(this.element);
  }
}
