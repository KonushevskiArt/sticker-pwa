import {findElemInEventPath} from './findElemInEventPath.js';

const checkFavorite = (e, sticker, store) => {
  const heart = findElemInEventPath(e, 'heart');

  if (heart) {
    if (heart.classList.contains('active')) {
      heart.classList.remove('active');
      sticker.elem.classList.remove('favorite');
      store.changeValue(sticker.id, 'favorite', false);
    } else {
      heart.classList.add('active');
      sticker.elem.classList.add('favorite');
      store.changeValue(sticker.id, 'favorite', true);
    }
  }
};

export {checkFavorite};
