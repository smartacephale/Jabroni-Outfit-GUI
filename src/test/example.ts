import { defaultStateWithDurationAndPrivacyAndHD } from "../store/default-state";
import { JabroniOutfitStore } from "../store/store";
import type { StateOptions } from "../store/types";
import { JabroniOutfitUI } from "../ui";
import { defaultSchemeWithPrivacyFilterWithHDwithSort } from "../ui/default-scheme";
import type { Scheme } from "../ui/types";

const example1 = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  (defaultSchemeWithPrivacyFilterWithHDwithSort as any).privacyFilter.push(
    { type: "button", innerText: "check access 🔓", callback: () => { } });

  const store = new JabroniOutfitStore(defaultStateWithDurationAndPrivacyAndHD);

  new JabroniOutfitUI(store, defaultSchemeWithPrivacyFilterWithHDwithSort); 

  store.subscribe((subj) => {
    const satisfy = /filter/gi.test(Object.keys(subj)[0]);
    console.log({ ...subj, satisfy });
  });
}

example1();

const example2 = () => {
  const customState: StateOptions = {
    gradientColor1: { value: "red", persistent: false, watch: true, type: "string" },
    gradientColor2: { value: "coral", persistent: false, watch: true, type: "string" },
    gradientColor3: { value: "orange", persistent: false, watch: true, type: "string" },
    gradientEnabled: { value: true, persistent: false, watch: true, type: "boolean" },
    uiEnabled: { value: true, persistent: true, watch: true, type: "boolean" }
  }

  const store = new JabroniOutfitStore(customState);

  const customScheme: Scheme = {
    gradientColor1: [{ type: "text", model: "localState.gradientColor1", placeholder: "color", labelBefore: "color1" }],
    gradientColor2: [{ type: "text", model: "localState.gradientColor2", placeholder: "color", labelBefore: "color2" }],
    gradientColor3: [{ type: "text", model: "localState.gradientColor3", placeholder: "color", labelBefore: "color3" }],
    gradientEnabled: [{ type: "checkbox", model: "localState.gradientEnabled", labelBefore: "gradient enabled" }],
  };

  new JabroniOutfitUI(store, customScheme);

  function drawGradient() {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { gradientColor1, gradientColor2, gradientColor3, gradientEnabled } = store.localState as any;
    if (!gradientEnabled) { document.body.style.background = 'blue'; return; }
    document.body.style.background = `radial-gradient(${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
  }

  drawGradient();

  store.subscribe(() => {
    drawGradient();
  });
}

example2();