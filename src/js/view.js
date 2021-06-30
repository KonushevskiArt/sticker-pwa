
class View {
  render = (container, elem) => {
    container.appendChild(elem);
  }

  remove = (elem) => {
    elem.remove();
  }
}

export {View};
