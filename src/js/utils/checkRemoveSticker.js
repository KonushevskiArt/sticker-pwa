import {findElemInEventPath} from './findElemInEventPath.js';

const checkRemoveSticker = (e, sticker, store) => {
  const close = findElemInEventPath(e, 'close');

  if (close) {
    sticker.elem.style.animationName = 'fadeOut';
    setTimeout(() =>{
      sticker.elem.remove();
      store.removeElem(sticker.id);
    }, 250);
  }
};

export {checkRemoveSticker};
