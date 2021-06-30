import {findElemInEventPath} from './findElemInEventPath.js';

const checkImportant = (e, sticker, store) => {
  const star = findElemInEventPath(e, 'star');

  if (star) {
    if (star.classList.contains('active')) {
      star.classList.remove('active');
      sticker.elem.classList.remove('important');
      store.changeValue(sticker.id, 'important', false);
    } else {
      star.classList.add('active');
      sticker.elem.classList.add('important');
      store.changeValue(sticker.id, 'important', true);
    }
  }
};

export {checkImportant};
