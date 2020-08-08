export default function createElement(element, theClass, cont) {
  const el = document.createElement(`${element}`);
  if (theClass.length !== 0) {
    el.classList += `${theClass}`;
  }
  if (cont.length !== 0) {
    el.innerText += `${cont}`;
  }
  return el;
}