const wrapper = document.querySelector('.wrapper');

function createLiTag(name, content){
    const li = document.createElement('li');
    li.classList += `${name}`;
    li.innerText = `${content}`;
    return li;
}

function createElement(element, theClass, cont){
    const el = document.createElement(`${element}`);
    if(theClass.length !== 0){
        el.classList += `${theClass}`;
    }
    if (cont.length !== 0){
        el.innerText += `${cont}`;
    }
    return el;
}

function navigation(){
    const nav = createElement('nav', 'navigation', '');
    const mediaDiv = createElement('div', 'media', '');
    const iconSpanOne = createElement('span', 'icon', '' );
    const instaLogo = createElement('i', 'fab fa-instagram', '' );
    const iconSpanTwo = createElement('span', 'icon', '');
    const faceLogo = createElement('i', 'fab fa-facebook-f', '');
    const list = createElement('ul', 'links', '');
    const linkOne = createLiTag('link', 'Home');
    const linkTwo = createLiTag('link', 'About');
    const linkThree = createLiTag('link', 'Menu');
    const linkFour = createLiTag('link', 'Contact');
    ////////////////// APPENDING ELEMENTS ;
    wrapper.appendChild(nav);
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
    console.log(wrapper)
}

function mainBody(){
    const mainDiv = createElement('div', 'bg-img', '');
    const main = createElement('main', 'welcome', '');
    const infoDiv = createElement('div', 'rest-info', '');
    const logoImg = createElement('img', 'rest-logo', '');
    logoImg.setAttribute('src', 'images/restaurant-logo.png')
    const nameP = createElement('p', '', 'KOWSKI\'S EATS')
    console.log(nameP);
    const hr = createElement('hr', '', '');
    const sloganP = createElement('p', '', 'DELICACY MADE DELICIOUS');
    const dineImg = createElement('img', 'rest-dine', '');
    dineImg.setAttribute('src', 'images/dine.png')

    mainDiv.appendChild(main);
    main.appendChild(infoDiv);
    infoDiv.appendChild(logoImg);
    infoDiv.appendChild(nameP);
    infoDiv.appendChild(hr);
    infoDiv.appendChild(sloganP);
    infoDiv.appendChild(dineImg);
    wrapper.appendChild(mainDiv);
}

navigation();
mainBody();