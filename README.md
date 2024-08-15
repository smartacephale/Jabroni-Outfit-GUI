<h1 align="center">Jabroni Outfit</h1>
<h3 align="center">out-of-the-box gui and persistent-state library</h3>
<p align="center"><a href="https://smartacephale.github.io/jabroni-outfit/">https://smartacephale.github.io/jabroni-outfit/</a></p>
<p align="center">
  <img src="https://i.imgur.com/hCyUJvd.png" alt="Sublime's custom image"/>
</p>

## How to use
```
<script src="https://unpkg.com/jabroni-outfit@1.3.0/dist/jabroni-outfit.umd.js"></script>
```

```
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
      gradientColor1: [{ type: "text", model: "stateLocale.gradientColor1", placeholder: "color", labelBefore: "color1" }],
      gradientColor2: [{ type: "text", model: "stateLocale.gradientColor2", placeholder: "color", labelBefore: "color2" }],
      gradientColor3: [{ type: "text", model: "stateLocale.gradientColor3", placeholder: "color", labelBefore: "color3" }],
      gradientEnabled: [{ type: "checkbox", model: "stateLocale.gradientEnabled", labelBefore: "gradient enabled" }],
    });

    function drawGradient() {
      const { gradientColor1, gradientColor2, gradientColor3, gradientEnabled } = store.stateLocale;
      if (!gradientEnabled) { document.body.style.background = 'coral'; return; }
      document.body.style.background = `radial-gradient(${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
    }

    drawGradient();
    store.subscribe(drawGradient);
```
