import { defaultStateWithDurationAndPrivacy } from "./store/default-state";
import { JabroniOutfitStore } from "./store/store";
import { JabroniOutfitUI } from "./ui";
import { defaultSchemeWithPrivateFilter } from "./ui/default-scheme";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
(defaultSchemeWithPrivateFilter as any).privateFilter.push(
  { type: "button", innerText: "check access 🔓", callback: () => { } });
const store = new JabroniOutfitStore(defaultStateWithDurationAndPrivacy);
const ui = new JabroniOutfitUI(store, defaultSchemeWithPrivateFilter);

console.log(store, ui);

store.subscribe((subj) => {
  const satisfy = /filter/gi.test(Object.keys(subj)[0]);
  console.log({ ...subj, satisfy });
});