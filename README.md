<h1 align="center">Jabroni Outfit</h1>
<h3 align="center">out-of-the-box gui and persistent-state library</h3>
<p align="center"><a href="https://smartacephale.github.io/jabroni-outfit/">https://smartacephale.github.io/jabroni-outfit/</a></p>
<p align="center">
  <img src="https://i.imgur.com/hCyUJvd.png" alt="Sublime's custom image"/>
</p>

### Introduction

The `jabroni-outfit` library is a versatile tool for creating user interfaces with persistent state management. It provides a simple and efficient way to define state variables, build UI controls, and automatically update the UI based on state changes.

### Key Features

- **State Management:**
  - Define state variables with properties like `value`, `persistent`, and `watch`.
  - Easily manage and update state values throughout your application.
- **UI Creation:**
  - Create UI controls (e.g., text inputs, checkboxes) based on state variables.
  - Automatically update the UI whenever state values change.
- **Persistence:**
  - Store state values persistently across application sessions.
- **Flexibility:**
  - Customize the UI and state management to fit your specific needs.

### Usage

**1. Import the Library:**

```javascript
import { JabroniOutfitStore, JabroniOutfitUI } from 'jabroni-outfit';
```
or umd cdn:
```javascript
<script src="https://unpkg.com/jabroni-outfit@latest/dist/jabroni-outfit.umd.js"></script>
...
const { JabroniOutfitStore, JabroniOutfitUI } = window.jabronioutfit;
```

**2. Define State Variables:**

Create an object containing state variables. Each variable has properties:

- `value`: The current value of the state variable.
- `persistent`: Boolean indicating if the value should be stored persistently.
- `watch`: Boolean indicating if the UI should update when the value changes.

```javascript
const myState = {
  gradientColor1: { value: "red", persistent: false, watch: true },
  // ... other state variables
};
```

**3. Create a Store:**

Instantiate a `JabroniOutfitStore` object with your state definition.

```javascript
const store = new JabroniOutfitStore(myState);
```

**4. Create UI Controls:**

Define an object mapping state variables to UI control configurations.

```javascript
const uiConfig = {
  gradientColor1: [{ type: "text", model: "stateLocale.gradientColor1" }],
  // ... other UI controls
};
```

**5. Create the UI:**

Instantiate a `JabroniOutfitUI` object with the store and UI configuration.

```javascript
const ui = new JabroniOutfitUI(store, uiConfig);
```

**6. Subscribe to reactive data:**

Use the `subscribe` method on the store to trigger updates whenever the state changes.

```javascript
store.subscribe(() => {
  // ...
});
```

### Example

```javascript
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
