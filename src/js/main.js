'use strict';

const containerText = document.querySelector('.js-containerText');
const description = document.querySelector('.js-text');

function showText() {
  description.classList.remove('js-text');
  description.classList.add('js-projects');
}
containerText.addEventListener('click', showText);
