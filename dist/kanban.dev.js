"use strict";

var droper;

function drag(a) {
  droper = a.target;
} //allow the assignment drop


function allowDrop(a) {
  a.preventDefault();
} //drop the assignment


function drop(a) {
  a.preventDefault();
  var parent;

  if (a.currentTarget) {
    parent = a.currentTarget;
  } else {
    parent = a.path.filter(function (i) {
      if (i.classList) {
        return i.classList.contains('List');
      }
    })[0];
  }

  parent.appendChild(droper);
}
//# sourceMappingURL=kanban.dev.js.map
