import { defaultStateWithDurationAndPrivacy } from "./store/default-state";
import { JabroniOutfitStore } from "./store/store";
import { JabroniOutfitUI } from "./ui";
import { defaultSchemeWithPrivateFilter } from "./ui/default-scheme";

const example1 = () => {
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
}

const example2 = () => {
  const myState = {
    gradientColor1: { value: "red", persistent: false, watch: true },
    gradientColor2: { value: "coral", persistent: false, watch: true },
    gradientColor3: { value: "orange", persistent: false, watch: true },
    gradientEnabled: { value: true, persistent: false, watch: true },
    uiEnabled: { value: true, persistent: true, watch: true }
  }
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const store = new JabroniOutfitStore(myState as any);

  const ui = new JabroniOutfitUI(store, {
    gradientColor1: [{ type: "text", model: "stateLocale.gradientColor1", placeholder: "color", labelBefore: "color1" }],
    gradientColor2: [{ type: "text", model: "stateLocale.gradientColor2", placeholder: "color", labelBefore: "color2" }],
    gradientColor3: [{ type: "text", model: "stateLocale.gradientColor3", placeholder: "color", labelBefore: "color3" }],
    gradientEnabled: [{ type: "checkbox", model: "stateLocale.gradientEnabled", labelBefore: "gradient enabled" }],
  });

  function drawGradient() {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { gradientColor1, gradientColor2, gradientColor3, gradientEnabled } = store.stateLocale as any;
    if (!gradientEnabled) { document.body.style.background = 'coral'; return; }
    document.body.style.background = `radial-gradient(${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
  }

  drawGradient();
  store.subscribe(drawGradient);
}

example1();