import createElement from './elementFactory';
import '../css/styles.css';

const wrapper = document.querySelector('.wrapper');
const sections = document.querySelector('.sections');

function mainBody() {
  const mainDiv = createElement('div', 'bg-img', '');
  const main = createElement('main', 'welcome', '');
  const infoDiv = createElement('div', 'rest-info', '');
  const logoImg = createElement('img', 'rest-logo', '');
  logoImg.setAttribute('src', '../images/restaurant-logo.png');
  const nameP = createElement('p', '', 'KOWSKI\'S EATS');
  const hr = createElement('hr', '', '');
  const sloganP = createElement('p', '', 'DELICACY MADE DELICIOUS');
  const dineImg = createElement('img', 'rest-dine', '');
  dineImg.setAttribute('src', '../images/dine.png');

  mainDiv.appendChild(main);
  main.appendChild(infoDiv);
  infoDiv.appendChild(logoImg);
  infoDiv.appendChild(nameP);
  infoDiv.appendChild(hr);
  infoDiv.appendChild(sloganP);
  infoDiv.appendChild(dineImg);
  sections.appendChild(mainDiv);
}

export default function homePage() {
  wrapper.appendChild(sections);
  mainBody();
}
