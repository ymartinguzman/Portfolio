'use strict';

const containerText = document.querySelectorAll('.js-containerText');
const description = document.querySelectorAll('.js-text');

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
