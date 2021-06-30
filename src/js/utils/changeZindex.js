/* eslint-disable no-empty */
import {findElemInEventPath} from './findElemInEventPath.js';

const changeZindex = (e) => {
  try {
    const sticker = findElemInEventPath(e, 'sticker');
    const board = sticker.parentElement;
    if (sticker) {
      board.querySelectorAll('.sticker').forEach((el) => el.style.zIndex = 'auto');
      sticker.style.zIndex = 1;
    }
  } catch (error) {}
};

export {changeZindex};
