<h1 align="center">Jabroni Outfit GUI</h1>
<h3 align="center">Small GUI and Persistent State library based on Vue</h1>
<p align="center"><a href="https://smartacephale.github.io/Jabroni-Outfit-GUI/">https://smartacephale.github.io/Jabroni-Outfit-GUI/</a></p> 
<p align="center">
  <img src="https://repository-images.githubusercontent.com/842958864/1e2ce513-9289-4e51-b68b-0e7f3de255d0" alt="Sublime's custom image"/>
</p>

### Features
- Store vaiables are persistent by default.
- Store variable with <$> prefix are not persistent.

### Usage

**Import the Library:**

```javascript
import { JabronioStore, JabronioGUI } from 'jabroni-outfit';
```
or umd cdn:
```javascript
<script src="https://unpkg.com/jabroni-outfit@latest/dist/jabroni-outfit.umd.js"></script>
...
const { JabronioStore, JabronioGUI } = window.jabronioutfit;
```

### Example

```javascript
const { JabronioStore, JabronioGUI } = window.jabronioutfit;

const example = () => {
  const customState = {
    myFancyVariable: true,
  };
  const store = new JabronioStore(customState);

  const scheme = [
    {
      title: 'Colors',
      collapsed: true,
      content: [
        {
          $color1: 'coral',
        },
        {
          color2: 'crimson',
        },
        {
          $color3: 'tomato',
        },
        {
          size: 100,
          type: 'range',
          max: '500',
          min: '0',
        },
        {
          gradientEnabled: true,
          label: 'gradient enabled',
        },
        {
          reset: () => {
            store.state.$color1 = 'darkslateblue';
            store.state.color2 = 'maroon';
            store.state.$color3 = 'darksalmon';
          },
        },
      ],
    },
  ];

  new JabronioGUI(scheme, store);

  function drawGradient() {
    const { $color1, color2, $color3, gradientEnabled, size } = store.state;
    if (!gradientEnabled) {
      document.body.style.background = '#000';
      return;
    }
    document.body.style.background = `repeating-radial-gradient(${$color1}, ${color2}, ${$color3} ${size}%)`;
  }

  drawGradient();

  store.subscribe(() => {
    drawGradient();
  });
};

example();
```
