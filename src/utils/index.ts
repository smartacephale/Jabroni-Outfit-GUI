export function propsDifference<
  T extends Record<string, unknown>,
  U extends object,
>(obj1: T | U, obj2: T | U): { d1: string[]; d2: string[] } {
  const a = new Set(Object.getOwnPropertyNames(obj1));
  const b = new Set(Object.getOwnPropertyNames(obj2));

  const d1 = a.difference(b).values().toArray();
  const d2 = b.difference(a).values().toArray();

  return { d1, d2 };
}

export function parseIntegerOr(n: string, or: number | string) {
  return ((num) => (Number.isNaN(num) ? or : num))(parseInt(n));
}
