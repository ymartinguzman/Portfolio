'use strict';

const containerText = document.querySelectorAll('.js-containerText');
const description = document.querySelectorAll('.js-text');
const techName = document.querySelectorAll('.js-title');
const techContainer = document.querySelectorAll('.js-techContainer');

//Projects
function showText(event) {
  const id = parseInt(event.currentTarget.id);
  description[id].classList.toggle('js-projects');
  description[id].classList.toggle('js-text');
}
function hideText(event) {
  const id = event.currentTarget.id;
  description[id].classList.toggle('js-text');
  description[id].classList.toggle('js-projects');
}

for (let i = 0; i < containerText.length; i++) {
  containerText[i].addEventListener('mouseover', showText);
  containerText[i].addEventListener('mouseout', hideText);
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
