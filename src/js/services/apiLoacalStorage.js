class apiLoacalStorage {
  setValue = (id, key, value) => {
    const sticker = JSON.parse(localStorage.getItem(id));
    sticker[key] = value;
    this.addSticker(sticker);
  }

  addSticker = (sticker) => {
    localStorage.setItem(sticker.id, JSON.stringify(sticker));
  }

  removeSticker = (id) => {
    localStorage.removeItem(id);
  }

  getAllStickers = () => {
    try {
      const res = [];
      for (const key in localStorage) {
        // eslint-disable-next-line no-prototype-builtins
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        res.push(JSON.parse(localStorage[key]));
      }
      return res;
    } catch (error) {}
  }

  getLastItem = (id) => {
    try {
      return JSON.parse(localStorage.getItem(id));
    } catch (error) {}
  }
}

export {apiLoacalStorage};
