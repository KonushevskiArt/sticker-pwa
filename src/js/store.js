/* eslint-disable new-cap */
import {apiLoacalStorage} from './services/apiLoacalStorage.js';

class Store {
  constructor() {
    this.arrOfIdElemsInStorage = [];
    this.originalId = Math.random();
    this.apiLocalStorage = new apiLoacalStorage();
  }

  createSticker = (options) => {
    const {top, left, timeOptions} = options;
    const {hours, minutes, day, month, year} = timeOptions;

    const sticker = {
      id: (this.originalId += 1),
      top,
      left,
      // rows: 12,
      // cols: 23,
      favorite: false,
      important: false,
      value: '',
      hours,
      minutes,
      day,
      month,
      year,
    };

    this.arrOfIdElemsInStorage.push(sticker.id);
    this.apiLocalStorage.addSticker(sticker);
  }

  changeValue = (id, key, value) => {
    this.apiLocalStorage.setValue(id, key, value);
  }

  removeElem = (id) => {
    this.apiLocalStorage.removeSticker(id);

    this.arrOfIdElemsInStorage.splice(this.arrOfIdElemsInStorage.findIndex((el) => el == id), 1);
  }
}

export {Store};
