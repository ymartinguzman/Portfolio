'use strict';

const containerText = document.querySelectorAll('.js-containerText');
const description = document.querySelectorAll('.js-text');

function showText(event) {
  const id = parseInt(event.currentTarget.id);
  console.log(id);

  description[id].classList.remove('js-text');
  description[id].classList.add('js-projects');
}
function hideText(event) {
  const id = event.currentTarget.id;
  description[id].classList.add('js-text');
  description[id].classList.remove('js-projects');
}

for (let i = 0; i < containerText.length; i++) {
  containerText[i].addEventListener('mouseover', showText);
  containerText[i].addEventListener('mouseout', hideText);
}
