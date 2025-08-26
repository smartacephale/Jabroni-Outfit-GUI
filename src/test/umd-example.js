const {
  JabroniOutfitStore,
  JabroniOutfitUI,
  defaultStateWithDurationAndPrivacy,
  defaultSchemeWithPrivateFilter
} = window.jabronioutfit;

const myState = {
  gradientColor1: { value: "red", persistent: false, watch: true },
  gradientColor2: { value: "coral", persistent: false, watch: true },
  gradientColor3: { value: "orange", persistent: false, watch: true },
  gradientEnabled: { value: true, persistent: false, watch: true },
  uiEnabled: { value: true, persistent: true, watch: true }
}
const store = new JabroniOutfitStore(myState);

const ui = new JabroniOutfitUI(store, {
  gradientColor1: [{ type: "text", model: "localState.gradientColor1", placeholder: "color", labelBefore: "color1" }],
  gradientColor2: [{ type: "text", model: "localState.gradientColor2", placeholder: "color", labelBefore: "color2" }],
  gradientColor3: [{ type: "text", model: "localState.gradientColor3", placeholder: "color", labelBefore: "color3" }],
  gradientEnabled: [{ type: "checkbox", model: "localState.gradientEnabled", labelBefore: "gradient enabled" }],
});

function drawGradient() {
  const { gradientColor1, gradientColor2, gradientColor3, gradientEnabled } = store.localState;
  if (!gradientEnabled) { document.body.style.background = 'coral'; return; }
  document.body.style.background = `radial-gradient(${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
}

drawGradient();
store.subscribe(drawGradient);