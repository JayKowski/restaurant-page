import createElement from './elementFactory';
import '../css/contact.css';

const wrapper = document.querySelector('.content');
const sections = createElement('div', 'sections', '');

function formElemGen(lFor, lCont, iType, iId, iName) {
  let el;
  if (lFor !== '') {
    el = document.createElement('label');
    el.setAttribute('for', `${lFor}`);
    el.innerText = `${lCont}`;
  } else {
    el = document.createElement('input');
    el.setAttribute('type', `${iType}`);
    el.setAttribute('id', `${iId}`);
    el.setAttribute('name', `${iName}`);
  }
  return el;
}

function contactBanner() {
  const contactImg = createElement('div', 'contact-img tabcontent', '');
  const contBanner = createElement('div', 'contact-banner', '');
  const h1 = createElement('h1', 'title', 'Contact us!');
  const hr = createElement('hr', '', '');
  const slogan = 'Here at Kowski\'s eats, we make time for everyone too.Please reach out to us with any questions \n\n Don\'t assume anything!';
  const p = createElement('p', 'about-deets', `${slogan}`);
  // ////APPEND;
  sections.appendChild(contactImg);
  contactImg.appendChild(contBanner);
  contBanner.appendChild(h1);
  contBanner.appendChild(hr);
  contBanner.appendChild(p);
}

function contactForm() {
  const contactSect = createElement('div', 'contact-sect tabcontent', '');
  const contactItems = createElement('div', 'contact-items', '');
  const formArea = createElement('div', 'form-area', '');
  const h1 = createElement('h1', 'heading', 'Contact Us!');
  const text = 'We understand that we cannot have all the details about us or how we operate in one static website, so incase you have more questions to ask, fill in the contact form below. \n Reservation requests can also be submitted through here.';
  const p = createElement('p', '', `${text}`);
  const form = createElement('form', '', '');
  form.setAttribute('action', '#');

  const label1 = formElemGen('name', 'Name', '', '', '');
  const input1 = formElemGen('', '', 'text', 'name', 'name');

  const label2 = formElemGen('number', 'Phone number', '', '', '');
  const input2 = formElemGen('', '', 'number', 'number', 'number');

  const label3 = formElemGen('email', 'Email', '', '', '');
  const input3 = formElemGen('', '', 'email', 'email', 'email');

  const label4 = formElemGen('others', 'Anything here', '', '', '');
  const input4 = formElemGen('', '', 'text', 'others', 'others');

  const submit = createElement('input', '', '');
  submit.setAttribute('type', 'Submit');
  submit.setAttribute('value', 'Send');
  // ///////APPEND;
  sections.append(contactSect);
  contactSect.appendChild(contactItems);
  contactItems.appendChild(formArea);
  formArea.appendChild(h1);
  formArea.appendChild(p);
  formArea.appendChild(form);
  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(label3);
  form.appendChild(input3);
  form.appendChild(label4);
  form.appendChild(input4);
  form.appendChild(submit);
}

export default function contactPage() {
  wrapper.appendChild(sections);
  contactBanner();
  contactForm();
}
