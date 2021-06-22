const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};



DomElement.prototype.createElement = function(){
  let sel;
  if (this.selector[0] === '.') sel = 'class="' + this.selector.slice(1) + '"';
  if (this.selector[0] === '#') sel = 'id="' + this.selector.slice(1) + '"';
  document.body.insertAdjacentHTML('beforeend', `<div ${sel}></div>`);

  document.querySelector(this.selector).style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; position: absolute`;
};




// newElem = new DomElement('.new', 100, 200, '#333', 24);
// newElem.createElement();
newElem2 = new DomElement('#new', 100, 100, 'red', 36);
newElem2.createElement();
let x = 0,
  y = 0;

const elem = document.getElementById('new');

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    x -= 10;
    elem.style.left = x + 'px';
  }
  if (event.keyCode === 38) {
    y -= 10;
    elem.style.top = y + 'px';
  }
  if (event.keyCode === 39) {
    x += 10;
    elem.style.left = x + 'px';
  }
  if (event.keyCode === 40) {
    y += 10;
    elem.style.top = y + 'px';
  }
});