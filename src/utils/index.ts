export function parseIntegerOr(n: string, or: number) {
  return Number.isInteger(Number.parseInt(n)) ? Number.parseInt(n) : or;
}

export function parseDom(html: string): HTMLElement {
  const parsed = new DOMParser().parseFromString(html, 'text/html').body;
  return parsed.children.length > 1 ? parsed : parsed.firstElementChild as HTMLElement;
}