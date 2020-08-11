import homePage from './home';
import navigation from './navigation';
import { aboutPage } from './about';
import menuPage from './menu';
import contactPage from './contact';

const wrapper = document.querySelector('.content');

function cleanPage() {
  const sect = document.querySelector('.sections');
  sect.parentElement.removeChild(sect);
}

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