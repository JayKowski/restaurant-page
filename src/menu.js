import createElement from './elementFactory';

const wrapper = document.querySelector('.wrapper');

function menuItem(foodName, src) {
  const dish = createElement('div', 'dish', '');
  const dishImg = createElement('div', 'dish-image', '');
  const img = createElement('img', '', '');
  img.setAttribute('src', `${src}`);
  const dishInfo = createElement('div', 'dish-info', '');
  const h3 = createElement('h3', 'heading', `${foodName}`);
  const ingredient = 'Tomato, Basil, wheat, turkey pepperoni, mozarella cheese';
  const p = createElement('p', 'ingredients', `${ingredient}`);
  const span1 = createElement('span', 'size-price', 'Small: $3');
  const span2 = createElement('span', 'size-price', 'Medium: $5');
  const span3 = createElement('span', 'size-price', 'Large: $10');
  // //////APPEND ;

  dish.appendChild(dishImg);
  dishImg.appendChild(img);
  dish.appendChild(dishInfo);
  dishInfo.appendChild(h3);
  dishInfo.appendChild(p);
  dishInfo.appendChild(span1);
  dishInfo.appendChild(span2);
  dishInfo.appendChild(span3);

  return dish;
}
const sections = document.querySelector('.sections');


function menuBanner() {
  const menuImg = createElement('div', 'menu-img', '');
  const menuBanner = createElement('div', 'menu-banner', '');
  const h1 = createElement('h1', 'title', 'Menu');
  const hr = createElement('hr', '', '');
  const slogan = 'Here at Kowski\'s eats we make something for everyone. Please browse our menu and find something you love \n\n All meals listed are prepared in a short time!';
  const p = createElement('p', 'about-deets', `${slogan}`);
  // ///////APPEND;
  sections.appendChild(menuImg);
  menuImg.appendChild(menuBanner);
  menuBanner.appendChild(h1);
  menuBanner.appendChild(hr);
  menuBanner.appendChild(p);
}

function menuSection() {
  const menuSect = createElement('div', 'menu-sect', '');
  const menuItems = createElement('div', 'menu-items', '');
  const dishes = createElement('div', 'dishes', '');
  const hOne = createElement('h1', 'menu-title', 'PIZZA: ');
  const dish1 = menuItem('PEPPERONI PIZZA', '../images/pepperoni-pizza.jpg');
  const dish2 = menuItem('BOREWORES PIZZA', '../images/borewores-pizza.jpg');
  const dish3 = menuItem('VEGE PIZZA', '../images/vege-pizza.jpg');
  const hTwo = createElement('h1', 'menu-title', 'DRINKS: ');
  const drink1 = menuItem('BLUEBERRY SMOOTHIE', '../images/blueberry-smoothie.jpeg');
  const drink2 = menuItem('COCONUT SMOOTHIE', '../images/coconut-smoothie.jpeg');
  const drink3 = menuItem('STRAWBERRY SMOOTHIE', '../images/strawberry-smoothie.jpeg');
  const hThree = createElement('h1', 'menu-title', 'DESSERT: ');
  const dess1 = menuItem('MACAROONS', '../images/macaroons.jpeg');
  const dess2 = menuItem('CHEESE CAKE', '../images/cheese-cake.jpeg');
  const dess3 = menuItem('STRAWBERRY SMOOTHIE', '../images/chocolate-cake.jpeg');
  // //////APPEND ;
  menuSect.appendChild(menuItems);
  menuItems.appendChild(dishes);
  dishes.appendChild(hOne);
  dishes.appendChild(dish1);
  dishes.appendChild(dish2);
  dishes.appendChild(dish3);
  dishes.appendChild(hTwo);
  dishes.appendChild(drink1);
  dishes.appendChild(drink2);
  dishes.appendChild(drink3);
  dishes.appendChild(hThree);
  dishes.appendChild(dess1);
  dishes.appendChild(dess2);
  dishes.appendChild(dess3);

  sections.appendChild(menuSect);
}

export default function menuPage() {
  wrapper.appendChild(sections);
  menuBanner();
  menuSection();
}