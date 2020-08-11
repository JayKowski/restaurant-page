import createElement from './elementFactory';
import '../css/navbar.css';

export default function navigation(parent) {
  const nav = createElement('nav', 'navigation', '');
  const mediaDiv = createElement('div', 'media', '');
  const iconSpanOne = createElement('span', 'icon', '');
  const instaLogo = createElement('i', 'fab fa-instagram', '');
  const iconSpanTwo = createElement('span', 'icon', '');
  const faceLogo = createElement('i', 'fab fa-facebook-f', '');
  const list = createElement('ul', 'links', '');
  const linkOne = createElement('li', 'link', 'Home');
  const linkTwo = createElement('li', 'link', 'About');
  const linkThree = createElement('li', 'link', 'Menu');
  const linkFour = createElement('li', 'link', 'Contact');
  // //////////////// APPENDING ELEMENTS ;
  parent.appendChild(nav);
  nav.appendChild(mediaDiv);
  mediaDiv.appendChild(iconSpanOne);
  iconSpanOne.appendChild(instaLogo);
  iconSpanOne.appendChild(instaLogo);
  mediaDiv.appendChild(iconSpanTwo);
  iconSpanTwo.appendChild(faceLogo);
  nav.appendChild(list);
  list.appendChild(linkOne);
  list.appendChild(linkTwo);
  list.appendChild(linkThree);
  list.appendChild(linkFour);
}