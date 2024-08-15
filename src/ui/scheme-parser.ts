import { componentStyles } from "./styles";
import type { Scheme, SchemeRowEl } from "./types";

export function schemeParser(scheme: Scheme) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const callbacks: Record<string, any> = {};

  const parseElement = ({ type, model, innerText, label, labelBefore, callback, ...rest }: SchemeRowEl) => {
    if (type === 'button' && !callback) return "";
    const isInput = /checkbox|text|number/.test(type);
    const tag = isInput ? 'input' : type;
    const id = isInput ? model : (Math.random() * 10000000 | 0).toString(16);

    const props: Record<string, string | undefined> = {
      id,
      "v-model": isInput ? model : "",
      type: isInput ? type : "",
      "@click": callback ? `cb${id}` : "",
      class: componentStyles[type],
      ...rest
    }

    if (callback) props[":style"] = `{ backgroundColor: cbState.cb${id} ? 'blue' : '' }`
    if (callback) callbacks[`cb${id}`] = callback;

    const propsToTags = Object.entries(props).filter(([_, v]) => v).map(([k, v]) => `${k}="${v}"`).join(" ");

    const dom = `<${tag} ${propsToTags}>${innerText || ''}${isInput ? '' : `</${tag}>`}`;

    let res = dom;
    if (label || labelBefore) {
      const labelStr = `<label for="${props.id}" class="${labelBefore ? componentStyles.labelBefore : componentStyles.label}">${label || labelBefore}</label>`;
      res = (labelBefore ? [labelStr, dom] : [dom, labelStr]).join("\n");
    }
    return res;
  }

  const parsedScheme = Object.values(scheme).map(row => {
    const parsedRow = row.map(r => parseElement(r)).join("\n");
    return `<div class="${componentStyles.container}">${parsedRow}</div>`;
  }).join("\n");

  return { parsedScheme, callbacks };
}