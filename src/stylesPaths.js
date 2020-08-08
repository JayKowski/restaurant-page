let thePath;

function aboutStyleScript() {
  thePath = '../css/about.css';
  return thePath;
}

function contactStyleScript() {
  thePath = '../css/contact.css';
  return thePath;
}

function menuStyleScript() {
  thePath = '../css/menu.css';
  return thePath;
}

function homeStyleScript() {
  thePath = '../css/styles.css';
  return thePath;
}

const styles = {
  aboutStyle: aboutStyleScript(),
  contactStyle: contactStyleScript(),
  menuStyle: menuStyleScript(),
  homeStyle: homeStyleScript(),
};

export default styles;