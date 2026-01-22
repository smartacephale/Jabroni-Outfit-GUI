<p align="center"><img width="100" src="https://github.com/smartacephale/Jabroni-Outfit-GUI/blob/main/docs/jabroni-outfit-logo.png?raw=true"></img></p> 
<h1 align="center">Jabroni Outfit GUI</h1>
<h3 align="center">Small GUI and Persistent State library based on Vue</h1>
<p align="center"><a href="https://smartacephale.github.io/Jabroni-Outfit-GUI/">https://smartacephale.github.io/Jabroni-Outfit-GUI/</a></p> 
<p align="center">
  <img src="https://repository-images.githubusercontent.com/842958864/8e8f8ff5-f92b-45b4-afec-505fa53cc9e7" alt="Sublime's custom image"/>
</p>

### Features
- Store vaiables are persistent by default.
- Store variable with <$> prefix are not persistent.

### Usage

**Import the Library:**    "ui",

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
const { JabronioGUI, JabronioStore, setupScheme } = window.jabronioutfit;

const example2 = () => {
  const customState = {
    uiEnabled: true,
    hidden: false,
  };

  const store = new JabronioStore(customState);

  const scheme = setupScheme(
    // DefaultScheme.map((t) => t.title).filter(Boolean),
    [],
    [
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
    ],
  );

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

  store.stateSubject.subscribe((a) => {
    console.log('trigger', a);
    drawGradient();
  });

  store.eventSubject.subscribe((e) => {
    console.log('event', e);
  });
};

example2();
```
