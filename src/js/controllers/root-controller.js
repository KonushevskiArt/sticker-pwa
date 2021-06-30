import {BoardController} from './board-controller.js';
import {StickerController} from './sticker-controller.js';
import {View} from '../view.js';
import {Store} from '../store.js';


class RootController {
  constructor(boardSelector, img) {
    this.store = new Store();
    this.view = new View();
    this.boardElem = document.querySelector(boardSelector);
    this.sticker = new StickerController(this);
    this.board = new BoardController(this);
    this.boardBg = img;
  }
  init = (e) => {
    this.boardElem.style.backgroundImage = `url(${this.boardBg})`;
    this.board.renderLocalStorage();
    this.board.catchClick(e);
  }
}

export {RootController};
