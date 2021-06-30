import {findElemInEventPath} from './findElemInEventPath.js';

function moveElemInContainer(container, sticker, store) {
  const elem = sticker.elem;

  elem.addEventListener('mousedown', function(evt) {
    const pinElem = findElemInEventPath(evt, 'pin');
    if (pinElem) {
      elem.style.transform = 'scale(1.1)';
      // elem.style.cursor = 'move';
      evt.preventDefault();

      let startCords = {
        x: evt.clientX,
        y: evt.clientY,
      };

      const onMouseMove = function(evt) {
        // evt.preventDefault();
        const shift = {
          x: startCords.x - evt.clientX,
          y: startCords.y - evt.clientY,
        };

        startCords = {
          x: evt.clientX,
          y: evt.clientY,
        };
        const top = elem.offsetTop - shift.y;
        const left = elem.offsetLeft - shift.x;

        store.changeValue(sticker.id, 'top', top);
        store.changeValue(sticker.id, 'left', left);

        elem.style.top = top + 'px';
        elem.style.left = left + 'px';
      };

      const onMouseUp = function(evt) {
        // evt.preventDefault();
        // elem.style.cursor = 'auto';
        elem.style.transform = 'scale(1)';

        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseup', onMouseUp);
      };

      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseup', onMouseUp);
    }
  });
}

export {moveElemInContainer};
