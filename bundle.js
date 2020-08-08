/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: aboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutPage\", function() { return aboutPage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n\n\nconst wrapper = document.querySelector('.wrapper');\nconst sections = document.querySelector('.sections');\n\nfunction aboutBanner() {\n  const banner = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'back-img', '');\n  const about = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'about', '');\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'title', 'About');\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-deets', `Kowski's eats is a restaurant for everyone of all ages.\n                                Our meals are fairly priced and at high quality too. \\n\\n Spare sometime and \n                                pay us a visit!`);\n\n  // /////////// APPEND;\n  sections.appendChild(banner);\n  banner.appendChild(about);\n  about.appendChild(h1);\n  about.appendChild(hr);\n  about.appendChild(p);\n}\n\nfunction aboutDescription() {\n  const description = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'description', '');\n  const openTimes = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'open-times', '');\n  const headOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', '', 'Opening Hours');\n  const rule = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\n  const weekdays = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'weekdays', '');\n  const headTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'days-heading', 'Weekdays');\n  const weekdaysUl = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'days-open', '');\n  const liOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\n  const spanOneDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Monday');\n  const spanOneTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\n  const liTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\n  const spanTwoDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Tuesday');\n  const spanTwoTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\n  const liThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\n  const spanThreeDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Wednesday');\n  const spanThreeTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\n  const liFour = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\n  const spanFourDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Thursday');\n  const spanFourTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 4:00pm');\n  const liFive = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\n  const spanFiveDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Friday');\n  const spanFiveTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 4:00pm');\n  const weekends = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'weekends', '');\n  const headThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'days-heading', 'Weekends');\n  const weekendsUl = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'days-open', '');\n  const liSix = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekend', '');\n  const spanSixDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Saturday');\n  const spanSixTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\n  const liSeven = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekend', '');\n  const spanSevenDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Sunday');\n  const spanSevenTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\n  sections.appendChild(description);\n  description.appendChild(openTimes);\n  openTimes.appendChild(headOne);\n  openTimes.appendChild(rule);\n  openTimes.appendChild(weekdays);\n  weekdays.appendChild(headTwo);\n  weekdays.appendChild(weekdaysUl);\n  weekdaysUl.appendChild(liOne);\n  liOne.appendChild(spanOneDay);\n  liOne.appendChild(spanOneTime);\n  weekdaysUl.appendChild(liTwo);\n  liTwo.appendChild(spanTwoDay);\n  liTwo.appendChild(spanTwoTime);\n  weekdaysUl.appendChild(liThree);\n  liThree.appendChild(spanThreeDay);\n  liThree.appendChild(spanThreeTime);\n  weekdaysUl.appendChild(liFour);\n  liFour.appendChild(spanFourDay);\n  liFour.appendChild(spanFourTime);\n  weekdaysUl.appendChild(liFive);\n  liFive.appendChild(spanFiveDay);\n  liFive.appendChild(spanFiveTime);\n  description.appendChild(weekends);\n  openTimes.appendChild(weekends);\n  weekends.appendChild(headThree);\n  weekends.appendChild(weekendsUl);\n  weekendsUl.appendChild(liSix);\n  liSix.appendChild(spanSixDay);\n  liSix.appendChild(spanSixTime);\n  weekendsUl.appendChild(liSeven);\n  liSeven.appendChild(spanSevenDay);\n  liSeven.appendChild(spanSevenTime);\n}\n\n// eslint-disable-next-line import/prefer-default-export\nfunction aboutPage() {\n  wrapper.appendChild(sections);\n  aboutBanner();\n  aboutDescription();\n}\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return contactPage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n\n\nconst wrapper = document.querySelector('.wrapper');\nconst sections = document.querySelector('.sections');\n\nfunction formElemGen(lFor, lCont, iType, iId, iName) {\n  let el;\n  if (lFor !== '') {\n    el = document.createElement('label');\n    el.setAttribute('for', `${lFor}`);\n    el.innerText = `${lCont}`;\n  } else {\n    el = document.createElement('input');\n    el.setAttribute('type', `${iType}`);\n    el.setAttribute('id', `${iId}`);\n    el.setAttribute('name', `${iName}`);\n  }\n  return el;\n}\n\nfunction contactBanner() {\n  const contactImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-img tabcontent', '');\n  const contBanner = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-banner', '');\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'title', 'Contact us!');\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\n  const slogan = 'Here at Kowski\\'s eats, we make time for everyone too.Please reach out to us with any questions \\n\\n Don\\'t assume anything!';\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-deets', `${slogan}`);\n  // ////APPEND;\n  sections.appendChild(contactImg);\n  contactImg.appendChild(contBanner);\n  contBanner.appendChild(h1);\n  contBanner.appendChild(hr);\n  contBanner.appendChild(p);\n}\n\nfunction contactForm() {\n  const contactSect = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-sect tabcontent', '');\n  const contactItems = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-items', '');\n  const formArea = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'form-area', '');\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'heading', 'Contact Us!');\n  const text = 'We understand that we cannot have all the details about us or how we operate in one static website, so incase you have more questions to ask, fill in the contact form below. \\n Reservation requests can also be submitted through here.';\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', `${text}`);\n  const form = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', '', '');\n  form.setAttribute('action', '#');\n\n  const label1 = formElemGen('name', 'Name', '', '', '');\n  const input1 = formElemGen('', '', 'text', 'name', 'name');\n\n  const label2 = formElemGen('number', 'Phone number', '', '', '');\n  const input2 = formElemGen('', '', 'number', 'number', 'number');\n\n  const label3 = formElemGen('email', 'Email', '', '', '');\n  const input3 = formElemGen('', '', 'email', 'email', 'email');\n\n  const label4 = formElemGen('others', 'Anything here', '', '', '');\n  const input4 = formElemGen('', '', 'text', 'others', 'others');\n  const submit = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', '', '');\n  submit.setAttribute('type', 'Submit');\n  submit.setAttribute('value', 'Send');\n  // ///////APPEND;\n  sections.append(contactSect);\n  contactSect.appendChild(contactItems);\n  contactItems.appendChild(formArea);\n  formArea.appendChild(h1);\n  formArea.appendChild(p);\n  formArea.appendChild(form);\n  form.appendChild(label1);\n  form.appendChild(input1);\n  form.appendChild(label2);\n  form.appendChild(input2);\n  form.appendChild(label3);\n  form.appendChild(input3);\n  form.appendChild(label4);\n  form.appendChild(input4);\n  form.appendChild(submit);\n}\n\nfunction contactPage() {\n  wrapper.appendChild(sections);\n  contactBanner();\n  contactForm();\n}\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/elementFactory.js":
/*!*******************************!*\
  !*** ./src/elementFactory.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElement; });\nfunction createElement(element, theClass, cont) {\n  const el = document.createElement(`${element}`);\n  if (theClass.length !== 0) {\n    el.classList += `${theClass}`;\n  }\n  if (cont.length !== 0) {\n    el.innerText += `${cont}`;\n  }\n  return el;\n}\n\n//# sourceURL=webpack:///./src/elementFactory.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return homePage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n\n\nconst wrapper = document.querySelector('.wrapper');\nconst sections = document.querySelector('.sections');\n\nfunction mainBody() {\n  const mainDiv = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'bg-img', '');\n  const main = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', 'welcome', '');\n  const infoDiv = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'rest-info', '');\n  const logoImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'rest-logo', '');\n  logoImg.setAttribute('src', 'images/restaurant-logo.png');\n  const nameP = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', 'KOWSKI\\'S EATS');\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\n  const sloganP = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', 'DELICACY MADE DELICIOUS');\n  const dineImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'rest-dine', '');\n  dineImg.setAttribute('src', 'images/dine.png');\n\n  mainDiv.appendChild(main);\n  main.appendChild(infoDiv);\n  infoDiv.appendChild(logoImg);\n  infoDiv.appendChild(nameP);\n  infoDiv.appendChild(hr);\n  infoDiv.appendChild(sloganP);\n  infoDiv.appendChild(dineImg);\n  sections.appendChild(mainDiv);\n}\n\nfunction homePage() {\n  wrapper.appendChild(sections);\n  mainBody();\n}\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _stylesPaths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesPaths */ \"./src/stylesPaths.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n\nconst style = document.querySelector('link[rel=\"stylesheet\"]');\n\nfunction stylePathNew(nPath) {\n  style.setAttribute('href', `${nPath}`);\n  return style;\n}\n\nfunction cleanPage() {\n  const sect = document.querySelector('.sections');\n  sect.innerHTML = '';\n}\n\nconst wrapper = document.querySelector('.wrapper');\n\nObject(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(wrapper);\nstylePathNew(_stylesPaths__WEBPACK_IMPORTED_MODULE_1__[\"default\"].homeStyle);\nObject(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst links = document.querySelector('.links');\nlinks.addEventListener('click', (e) => {\n  if (e.target.innerText === 'Contact') {\n    cleanPage();\n    stylePathNew(_stylesPaths__WEBPACK_IMPORTED_MODULE_1__[\"default\"].contactStyle);\n    Object(_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  } else if (e.target.innerText === 'Menu') {\n    cleanPage();\n    stylePathNew(_stylesPaths__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuStyle);\n    Object(_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  } else if (e.target.innerText === 'About') {\n    cleanPage();\n    stylePathNew(_stylesPaths__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aboutStyle);\n    Object(_about__WEBPACK_IMPORTED_MODULE_3__[\"aboutPage\"])();\n  } else if (e.target.innerText === 'Home') {\n    cleanPage();\n    stylePathNew(_stylesPaths__WEBPACK_IMPORTED_MODULE_1__[\"default\"].homeStyle);\n    Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menuPage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n\n\nconst wrapper = document.querySelector('.wrapper');\n\nfunction menuItem(foodName, src) {\n  const dish = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dish', '');\n  const dishImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dish-image', '');\n  const img = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', '', '');\n  img.setAttribute('src', `${src}`);\n  const dishInfo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dish-info', '');\n  const h3 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'heading', `${foodName}`);\n  const ingredient = 'Tomato, Basil, wheat, turkey pepperoni, mozarella cheese';\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'ingredients', `${ingredient}`);\n  const span1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'size-price', 'Small: $3');\n  const span2 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'size-price', 'Medium: $5');\n  const span3 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'size-price', 'Large: $10');\n  // //////APPEND ;\n\n  dish.appendChild(dishImg);\n  dishImg.appendChild(img);\n  dish.appendChild(dishInfo);\n  dishInfo.appendChild(h3);\n  dishInfo.appendChild(p);\n  dishInfo.appendChild(span1);\n  dishInfo.appendChild(span2);\n  dishInfo.appendChild(span3);\n\n  return dish;\n}\nconst sections = document.querySelector('.sections');\n\n\nfunction menuBanner() {\n  const menuImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-img', '');\n  const menuBanner = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-banner', '');\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'title', 'Menu');\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\n  const slogan = 'Here at Kowski\\'s eats we make something for everyone. Please browse our menu and find something you love \\n\\n All meals listed are prepared in a short time!';\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-deets', `${slogan}`);\n  // ///////APPEND;\n  sections.appendChild(menuImg);\n  menuImg.appendChild(menuBanner);\n  menuBanner.appendChild(h1);\n  menuBanner.appendChild(hr);\n  menuBanner.appendChild(p);\n}\n\nfunction menuSection() {\n  const menuSect = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-sect', '');\n  const menuItems = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-items', '');\n  const dishes = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dishes', '');\n  const hOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'menu-title', 'PIZZA: ');\n  const dish1 = menuItem('PEPPERONI PIZZA', '../images/pepperoni-pizza.jpg');\n  const dish2 = menuItem('BOREWORES PIZZA', '../images/borewores-pizza.jpg');\n  const dish3 = menuItem('VEGE PIZZA', '../images/vege-pizza.jpg');\n  const hTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'menu-title', 'DRINKS: ');\n  const drink1 = menuItem('BLUEBERRY SMOOTHIE', '../images/blueberry-smoothie.jpeg');\n  const drink2 = menuItem('COCONUT SMOOTHIE', '../images/coconut-smoothie.jpeg');\n  const drink3 = menuItem('STRAWBERRY SMOOTHIE', '../images/strawberry-smoothie.jpeg');\n  const hThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'menu-title', 'DESSERT: ');\n  const dess1 = menuItem('MACAROONS', '../images/macaroons.jpeg');\n  const dess2 = menuItem('CHEESE CAKE', '../images/cheese-cake.jpeg');\n  const dess3 = menuItem('STRAWBERRY SMOOTHIE', '../images/chocolate-cake.jpeg');\n  // //////APPEND ;\n  menuSect.appendChild(menuItems);\n  menuItems.appendChild(dishes);\n  dishes.appendChild(hOne);\n  dishes.appendChild(dish1);\n  dishes.appendChild(dish2);\n  dishes.appendChild(dish3);\n  dishes.appendChild(hTwo);\n  dishes.appendChild(drink1);\n  dishes.appendChild(drink2);\n  dishes.appendChild(drink3);\n  dishes.appendChild(hThree);\n  dishes.appendChild(dess1);\n  dishes.appendChild(dess2);\n  dishes.appendChild(dess3);\n\n  sections.appendChild(menuSect);\n}\n\nfunction menuPage() {\n  wrapper.appendChild(sections);\n  menuBanner();\n  menuSection();\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navigation; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n\n\nfunction navigation(parent) {\n  const nav = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav', 'navigation', '');\n  const mediaDiv = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'media', '');\n  const iconSpanOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'icon', '');\n  const instaLogo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('i', 'fab fa-instagram', '');\n  const iconSpanTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'icon', '');\n  const faceLogo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('i', 'fab fa-facebook-f', '');\n  const list = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'links', '');\n  const linkOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'Home');\n  const linkTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'About');\n  const linkThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'Menu');\n  const linkFour = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'Contact');\n  // //////////////// APPENDING ELEMENTS ;\n  parent.appendChild(nav);\n  nav.appendChild(mediaDiv);\n  mediaDiv.appendChild(iconSpanOne);\n  iconSpanOne.appendChild(instaLogo);\n  iconSpanOne.appendChild(instaLogo);\n  mediaDiv.appendChild(iconSpanTwo);\n  iconSpanTwo.appendChild(faceLogo);\n  nav.appendChild(list);\n  list.appendChild(linkOne);\n  list.appendChild(linkTwo);\n  list.appendChild(linkThree);\n  list.appendChild(linkFour);\n}\n\n//# sourceURL=webpack:///./src/navigation.js?");

/***/ }),

/***/ "./src/stylesPaths.js":
/*!****************************!*\
  !*** ./src/stylesPaths.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet thePath;\n\nfunction aboutStyleScript() {\n  thePath = '../css/about.css';\n  return thePath;\n}\n\nfunction contactStyleScript() {\n  thePath = '../css/contact.css';\n  return thePath;\n}\n\nfunction menuStyleScript() {\n  thePath = '../css/menu.css';\n  return thePath;\n}\n\nfunction homeStyleScript() {\n  thePath = '../css/styles.css';\n  return thePath;\n}\n\nconst styles = {\n  aboutStyle: aboutStyleScript(),\n  contactStyle: contactStyleScript(),\n  menuStyle: menuStyleScript(),\n  homeStyle: homeStyleScript(),\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styles);\n\n//# sourceURL=webpack:///./src/stylesPaths.js?");

/***/ })

/******/ });