export function parseIntegerOr(n: string, or: number) {
  return Number.isInteger(Number.parseInt(n)) ? Number.parseInt(n) : or;
}

export function GM_addStyle(css: string) {
  const head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css.replace(/;/g, ' !important;');
  head.appendChild(style);
}

export function parseDom(html: string): HTMLElement {
  const parsed = new DOMParser().parseFromString(html, 'text/html').body;
  return parsed.children.length > 1 ? parsed : parsed.firstElementChild as HTMLElement;
}