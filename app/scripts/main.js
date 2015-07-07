function hasClassName(inElement, inClassName)
{
  var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
  return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName)
{
  if (!hasClassName(inElement, inClassName))
    inElement.className = [inElement.className, inClassName].join(' ');
}

function removeClassName(inElement, inClassName)
{
  if (hasClassName(inElement, inClassName)) {
    var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
    var curClasses = inElement.className;
    inElement.className = curClasses.replace(regExp, ' ');
  }
}

function moveTo(id) {
  if (document.body.clientWidth <= 600) {
    addClassName(document.getElementById('menu'), 'hidden');
    window.scrollTo(0, document.getElementById(id).offsetTop - 40);
  } else {
    window.scrollTo(0, document.getElementById(id).offsetTop - 50);
  }
}

window.onload = function() {
  if (document.body.clientWidth <= 600) {
    removeClassName(document.getElementById('menu-top'), 'hidden');
    var list = document.getElementById('menu');
    addClassName(list, 'hidden');
    document.getElementById('menu-top').onclick = function () {
      if (hasClassName(list, 'hidden')) {
        removeClassName(list, 'hidden');
      } else {
        addClassName(list, 'hidden');
      }
    }
  } else {
    removeClassName(document.getElementById('menu'), 'hidden');
  }
}
