function addClass(element, clazz) {
  element.classList.add(clazz);
}
function addChild(parent, child) {
  parent.appendChild(child);
}
function addChildren(parent, ...children) {
  children.forEach(child => addChild(parent, child));
}
function createElement(type, clazz, textContent) {
  const element = document.createElement(type);
  if (clazz.length > 0) {
    addClass(element, clazz);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}
function createHeader() {
  const header = createElement('div', 'header');
  const date = createElement('span', 'date', 'SMARCH 28, 2019');
  const headline = createElement('h1', '', 'Lambda Times');
  const temp = createElement('span', 'temp', '98°');
  addChildren(header, date, headline, temp);
  return header;
}
const headerContainer = document.querySelector('.header-container');
if (headerContainer) {
  addChild(headerContainer, createHeader());
}
export { addClass, addChild, addChildren, createElement };
