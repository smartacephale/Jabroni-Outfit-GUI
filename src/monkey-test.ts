import { JabronioGUI } from './app';
import { setupScheme } from './scheme/utils';
import { JabronioStore } from './store';
import type { SchemeInput } from './types';

const example = () => {
  const store = new JabronioStore();

  const scheme: SchemeInput = setupScheme([
    {
      title: 'Colors',
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
    {
      title: 'Advanced',
      collapsed: true,
      content: [
        {
          'clueless checkbox': false,
        },
      ],
    },
  ]);

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

  store.stateSubject.subscribe((_) => {
    drawGradient();
  });

  store.eventSubject.subscribe((e) => {
    console.log('event', e);
  });
};

example();
