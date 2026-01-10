export function uuidv4() {
  var d = Date.now();
  var d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = Math.random() * 16;
    if (d > 0) {
      r = ((d + r) % 16) | 0;
      d = Math.floor(d / 16);
    } else {
      r = ((d2 + r) % 16) | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function propsDifference<
  T extends Record<string, unknown>,
  U extends object,
>(obj1: T | U, obj2: T | U): { d1: string[]; d2: string[] } {
  const o1k = Object.getOwnPropertyNames(obj1);
  const o2k = Object.getOwnPropertyNames(obj2);

  const d1 = o1k.filter((e) => o2k.every((e2) => e2 !== e));
  const d2 = o2k.filter((e) => o1k.every((e2) => e2 !== e));

  return { d1, d2 };
}
