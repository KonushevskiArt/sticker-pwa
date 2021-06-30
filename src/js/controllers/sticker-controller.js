import {moveElemInContainer} from '../utils/drag-and-drop.js';
import {Sticker} from '../components/Sticker.js';
import {checkRemoveSticker} from '../utils/checkRemoveSticker.js';
import {checkImportant} from '../utils/checkImportant.js';
import {checkFavorite} from '../utils/checkFavorite.js';
import {getTimeInThisMoment} from '../utils/getTimeInThisMoment.js';


class StickerController {
  constructor(rootController) {
    this.rootController = rootController;
    this.topOffset = 30;
    this.leftOffset = 150;
    this.store = this.rootController.store;
    this.arrOfIdElemsInStorage = this.store.arrOfIdElemsInStorage;
    this.apiLocalStorage = this.rootController.store.apiLocalStorage;
  }

  createSticker = (e) => {
    const stickerOption = {
      top: e.clientY - this.topOffset,
      left: e.clientX - this.leftOffset,
      timeOptions: getTimeInThisMoment(),
    };

    this.store.createSticker(stickerOption);

    const idOflastElem = this.arrOfIdElemsInStorage[this.arrOfIdElemsInStorage.length - 1];
    const lastItemInLocalStorage = this.apiLocalStorage.getLastItem(idOflastElem);

    this.initRenderSticker(lastItemInLocalStorage);
  }

  initRenderSticker = (options) => {
    const sticker = new Sticker(options);

    this.initFunctional(sticker);

    sticker.elem.style.animationName = 'fadeIn';
    this.rootController.view.render(this.rootController.boardElem, sticker.elem);
  }

  initFunctional = (sticker) => {
    sticker.elem.onclick = (e) => {
      checkRemoveSticker(e, sticker, this.store);
      checkFavorite(e, sticker, this.store);
      checkImportant(e, sticker, this.store);
    };
    const textArea = sticker.elem.querySelector('textarea');

    textArea.onblur = (e) => {
      this.store.changeValue(sticker.id, 'value', textArea.value);
    };

    moveElemInContainer(this.rootController.boardElem, sticker, this.store);
  }
}

export {StickerController};
