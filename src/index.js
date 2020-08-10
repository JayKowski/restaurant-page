import homePage from './home';
import navigation from './navigation';
import { aboutPage } from './about';
import menuPage from './menu';
import contactPage from './contact';

function cleanPage() {
  const sect = document.querySelector('.sections');
  sect.innerHTML = '';
}

const wrapper = document.querySelector('.wrapper');

navigation(wrapper);
homePage();

const links = document.querySelector('.links');
links.addEventListener('click', (e) => {
  if (e.target.innerText === 'Contact') {
    cleanPage();
    contactPage();
  } else if (e.target.innerText === 'Menu') {
    cleanPage();
    menuPage();
  } else if (e.target.innerText === 'About') {
    cleanPage();
    aboutPage();
  } else if (e.target.innerText === 'Home') {
    cleanPage();
    homePage();
  }
});