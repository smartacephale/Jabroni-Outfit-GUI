import { createApp, defineCustomElement, h, reactive } from 'vue';
import AppCustomElement from './components/app.vue';
import { SchemeParser } from './scheme/parser';
import type { JabronioStore } from './store';
import type { SchemeInput } from './types';

export class JabronioGUI {
  private createCustomElementFallback() {
    const host = document.createElement('div');
    const shadowRoot = host.attachShadow({ mode: 'open' });
    const mountPoint = document.createElement('div');

    shadowRoot.appendChild(mountPoint);

    if (AppCustomElement.styles) {
      const style = document.createElement('style');
      style.textContent = AppCustomElement.styles.join('\n');
      shadowRoot.appendChild(style);
    }

    const props = reactive<Record<string, any>>({
      state: undefined,
      scheme: undefined,
      title: undefined,
    });

    const app = createApp({
      render() {
        return h(AppCustomElement, props as any);
      }
    });

    app.mount(mountPoint);

    Object.defineProperties(host, {
      state: {
        get: () => props.state,
        set: (value) => { props.state = value; }
      },
      scheme: {
        get: () => props.scheme,
        set: (value) => { props.scheme = value; }
      },
      title: {
        get: () => props.title,
        set: (value) => { props.title = value; }
      },
      remove: {
        value: () => {
          app.unmount();
          Element.prototype.remove.call(host);
        }
      }
    });

    return host as any;
  }

  private createCustomElement() {
    const TAG_NAME = 'jabronio-widget';

    try {
      const CustomElementDef = defineCustomElement(AppCustomElement);
      if (!customElements.get(TAG_NAME)) {
        customElements.define(TAG_NAME, CustomElementDef);
      }
      return new CustomElementDef();
    } catch (error) {
      return this.createCustomElementFallback();
    }
  }

  public element: HTMLElement;

  public dispose() {
    this.element.remove();
  }

  constructor(
    scheme: SchemeInput,
    store: JabronioStore,
    title: string = 'Config',
  ) {
    const parsed = SchemeParser.parse(scheme, store);

    this.element = this.createCustomElement();

    Object.assign(this.element, {
      state: store.state,
      scheme: parsed.scheme,
      title,
    });

    document.body.appendChild(this.element);
  }
}