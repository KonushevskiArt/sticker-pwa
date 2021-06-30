import './scss/index.scss';
import img from './bg/bg-min.jpg';
import {RootController} from './js/controllers/root-controller.js';

window.addEventListener('load', async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register('./sw.js');
    }
  } catch (error) {
    console.log('Service worker register fail');
  }
});

const controller = new RootController('.board', img);
controller.init();
