'use strict';

const containerText = document.querySelectorAll('.js-containerText');
const containerEnglish = document.querySelectorAll('.js-containerEnglish');
const description = document.querySelectorAll('.js-text');
const englishText = document.querySelectorAll('.js-text-en');
const techName = document.querySelectorAll('.js-title');
const techContainer = document.querySelectorAll('.js-techContainer');
const spanishBtn = document.querySelector('.js__btn-es');
const englishBtn = document.querySelector('.js__btn-en');
const english = document.querySelectorAll('.js-english');
const spanish = document.querySelectorAll('.js-spanish');
const burguerBtn = document.querySelector('.header__nav--burguer');
const burguerList = document.querySelector('.header__nav--menu');
const closeMenu = document.querySelector('.bx-menu');
const closeBtn = document.querySelector('.bx-x');

//Projects
function showText(event) {
  const id = parseInt(event.currentTarget.id);
  description[id].classList.add('js-projects');
  description[id].classList.remove('js-text');
  englishText[id].classList.add('js-projects');
  englishText[id].classList.remove('js-text-en');
}
function hideText(event) {
  const id = event.currentTarget.id;
  description[id].classList.add('js-text');
  description[id].classList.remove('js-projects');
  englishText[id].classList.add('js-text-en');
  englishText[id].classList.remove('js-projects');
}

for (let i = 0; i < containerText.length; i++) {
  containerText[i].addEventListener('mouseover', showText);
  containerText[i].addEventListener('mouseout', hideText);
}

for (let i = 0; i < containerEnglish.length; i++) {
  containerEnglish[i].addEventListener('mouseover', showText);
  containerEnglish[i].addEventListener('mouseout', hideText);
}

//Technologies
function showTech(event) {
  const id = parseInt(event.currentTarget.id);
  techName[id].classList.remove('js-title');
  techName[id].classList.add('js-tech');
}
function hideTech(event) {
  const id = event.currentTarget.id;

  techName[id].classList.add('js-title');
  techName[id].classList.remove('js-tech');
}
for (let i = 0; i < techContainer.length; i++) {
  techContainer[i].addEventListener('mouseover', showTech);
  techContainer[i].addEventListener('mouseout', hideTech);
}

//Change language
function changeToEnglish() {
  for (let i = 0; i < english.length; i++) {
    english[i].classList.remove('hidden-text');
    spanish[i].classList.add('hidden-text');
  }

  console.log(english.length);
  console.log(spanish.length);
}
function changeToSpanish() {
  for (let i = 0; i < spanish.length; i++) {
    spanish[i].classList.remove('hidden-text');
    english[i].classList.add('hidden-text');
  }
}

englishBtn.addEventListener('click', changeToEnglish);
spanishBtn.addEventListener('click', changeToSpanish);

//Burguer menu

function displayMenu() {
  burguerList.classList.remove('header__nav--display');
  burguerList.classList.toggle('js-burguerMenu');
}

burguerBtn.addEventListener('click', displayMenu);
