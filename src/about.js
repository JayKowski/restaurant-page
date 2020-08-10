import createElement from './elementFactory';
import '../css/about.css';

const wrapper = document.querySelector('.wrapper');
const sections = document.querySelector('.sections');

function aboutBanner() {
  const banner = createElement('div', 'back-img', '');
  const about = createElement('div', 'about', '');
  const h1 = createElement('h1', 'title', 'About');
  const hr = createElement('hr', '', '');
  const p = createElement('p', 'about-deets', `Kowski's eats is a restaurant for everyone of all ages.
                                Our meals are fairly priced and at high quality too. \n\n Spare sometime and 
                                pay us a visit!`);

  // /////////// APPEND;
  sections.appendChild(banner);
  banner.appendChild(about);
  about.appendChild(h1);
  about.appendChild(hr);
  about.appendChild(p);
}

function aboutDescription() {
  const description = createElement('div', 'description', '');
  const openTimes = createElement('div', 'open-times', '');
  const headOne = createElement('h1', '', 'Opening Hours');
  const rule = createElement('hr', '', '');
  const weekdays = createElement('div', 'weekdays', '');
  const headTwo = createElement('h2', 'days-heading', 'Weekdays');
  const weekdaysUl = createElement('ul', 'days-open', '');
  const liOne = createElement('li', 'weekday', '');
  const spanOneDay = createElement('span', 'day-name', 'Monday');
  const spanOneTime = createElement('span', 'day-time', '8:00am - 6:00pm');
  const liTwo = createElement('li', 'weekday', '');
  const spanTwoDay = createElement('span', 'day-name', 'Tuesday');
  const spanTwoTime = createElement('span', 'day-time', '8:00am - 6:00pm');
  const liThree = createElement('li', 'weekday', '');
  const spanThreeDay = createElement('span', 'day-name', 'Wednesday');
  const spanThreeTime = createElement('span', 'day-time', '8:00am - 6:00pm');
  const liFour = createElement('li', 'weekday', '');
  const spanFourDay = createElement('span', 'day-name', 'Thursday');
  const spanFourTime = createElement('span', 'day-time', '8:00am - 4:00pm');
  const liFive = createElement('li', 'weekday', '');
  const spanFiveDay = createElement('span', 'day-name', 'Friday');
  const spanFiveTime = createElement('span', 'day-time', '8:00am - 4:00pm');
  const weekends = createElement('div', 'weekends', '');
  const headThree = createElement('h2', 'days-heading', 'Weekends');
  const weekendsUl = createElement('ul', 'days-open', '');
  const liSix = createElement('li', 'weekend', '');
  const spanSixDay = createElement('span', 'day-name', 'Saturday');
  const spanSixTime = createElement('span', 'day-time', '8:00am - 6:00pm');
  const liSeven = createElement('li', 'weekend', '');
  const spanSevenDay = createElement('span', 'day-name', 'Sunday');
  const spanSevenTime = createElement('span', 'day-time', '8:00am - 6:00pm');
  sections.appendChild(description);
  description.appendChild(openTimes);
  openTimes.appendChild(headOne);
  openTimes.appendChild(rule);
  openTimes.appendChild(weekdays);
  weekdays.appendChild(headTwo);
  weekdays.appendChild(weekdaysUl);
  weekdaysUl.appendChild(liOne);
  liOne.appendChild(spanOneDay);
  liOne.appendChild(spanOneTime);
  weekdaysUl.appendChild(liTwo);
  liTwo.appendChild(spanTwoDay);
  liTwo.appendChild(spanTwoTime);
  weekdaysUl.appendChild(liThree);
  liThree.appendChild(spanThreeDay);
  liThree.appendChild(spanThreeTime);
  weekdaysUl.appendChild(liFour);
  liFour.appendChild(spanFourDay);
  liFour.appendChild(spanFourTime);
  weekdaysUl.appendChild(liFive);
  liFive.appendChild(spanFiveDay);
  liFive.appendChild(spanFiveTime);
  description.appendChild(weekends);
  openTimes.appendChild(weekends);
  weekends.appendChild(headThree);
  weekends.appendChild(weekendsUl);
  weekendsUl.appendChild(liSix);
  liSix.appendChild(spanSixDay);
  liSix.appendChild(spanSixTime);
  weekendsUl.appendChild(liSeven);
  liSeven.appendChild(spanSevenDay);
  liSeven.appendChild(spanSevenTime);
}

// eslint-disable-next-line import/prefer-default-export
export function aboutPage() {
  wrapper.appendChild(sections);
  aboutBanner();
  aboutDescription();
}
