// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function addClass(element: HTMLElement, clazz: string): void {
  element.classList.add(clazz);
}

function addChild(parent: HTMLElement, child: HTMLElement): void {
  parent.appendChild(child);
}

function addChildren(parent: HTMLElement, ...children: HTMLElement[]): void {
  children.forEach((child): void => addChild(parent, child));
}

function createElement(
  type: string,
  clazz: string,
  textContent?: string
): HTMLElement {
  const element: HTMLElement = document.createElement(type);

  if (clazz.length > 0) {
    addClass(element, clazz);
  }

  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function createHeader(): HTMLElement {
  const header: HTMLElement = createElement('div', 'header');
  const date: HTMLElement = createElement('span', 'date', 'SMARCH 28, 2019');
  const headline: HTMLElement = createElement('h1', '', 'Lambda Times');
  const temp: HTMLElement = createElement('span', 'temp', '98°');
  addChildren(header, date, headline, temp);
  return header;
}

const headerContainer: HTMLElement | null = document.querySelector(
  '.header-container'
);

if (headerContainer) {
  addChild(headerContainer, createHeader());
}

export { addClass, addChild, addChildren, createElement };
