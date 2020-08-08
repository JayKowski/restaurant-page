import homePage from './home';
import styles from './stylesPaths';
import navigation from './navigation';
import { aboutPage } from './about';
import menuPage from './menu';
import contactPage from './contact';

const style = document.querySelector('link[rel="stylesheet"]');

function stylePathNew(nPath) {
  style.setAttribute('href', `${nPath}`);
  return style;
}

function cleanPage() {
  const sect = document.querySelector('.sections');
  sect.innerHTML = '';
}

const wrapper = document.querySelector('.wrapper');

navigation(wrapper);
stylePathNew(styles.homeStyle);
homePage();

const links = document.querySelector('.links');
links.addEventListener('click', (e) => {
  if (e.target.innerText === 'Contact') {
    cleanPage();
    stylePathNew(styles.contactStyle);
    contactPage();
  } else if (e.target.innerText === 'Menu') {
    cleanPage();
    stylePathNew(styles.menuStyle);
    menuPage();
  } else if (e.target.innerText === 'About') {
    cleanPage();
    stylePathNew(styles.aboutStyle);
    aboutPage();
  } else if (e.target.innerText === 'Home') {
    cleanPage();
    stylePathNew(styles.homeStyle);
    homePage();
  }
});