/* eslint-disable no-invalid-this */
import {changeZindex} from '../utils/changeZindex.js';

class BoardController {
  constructor(rootController) {
    this.rootController = rootController;
    this.board = this.rootController.boardElem;
    this.stickerController = this.rootController.sticker;
    this.apiLocalStorage = this.rootController.store.apiLocalStorage;
  }

  catchClick = () => {
    this.board.ondblclick = (e) => {
      this.checkTitle();

      if (e.target === this.board) {
        this.stickerController.createSticker(e);
      }
    };
    this.board.onclick = (e) => changeZindex(e);
  }
  renderLocalStorage = () => {
    const arrStickers = this.apiLocalStorage.getAllStickers();
    if (arrStickers.length > 0) {
      this.checkTitle();
    }
    arrStickers.map((elem) => this.stickerController.initRenderSticker(elem));
  }

  checkTitle = () => {
    const title = document.querySelector('.title');
    if (title) {
      title.style.animationName = 'fadeOut';
      setTimeout(() => {
        title.remove();
      }, 200);
    }
  }
}

export {BoardController};
