'use strict';

const containerText = document.querySelector('.js-containerText');
const description = document.querySelector('.js-text');
const id = document.querySelector('#id');

function showText() {
  if (description.id !== 0) {
    description.classList.remove('js-text');
    description.classList.add('js-projects');
  }
}
containerText.addEventListener('click', showText);
console.log(containerText);
console.log(description.id);
