const findElemInEventPath = (e, className) => {
  const elem = e.path.filter((el) => {
    if (el.classList) {
      return el.classList.contains(className);
    }
  });
  return elem[0];
};

export {findElemInEventPath};
