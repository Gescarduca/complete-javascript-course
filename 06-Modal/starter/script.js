'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//we need the query selector all to get all elements otherwise
//we would just get the first one
//this creates a node list of the modals
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

//classes allows us to work with multiple css elements

const openModal = function () {
  //allows you to show hidden elements
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

/* for (let i = 0; i < btnOpenModal.length; i++)
  btnCloseModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }); */

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//add escape key event to close the modal
//keyboard events are called global events since
//they happen to the whole document
//four types of keyboard events
//keypress- activates continuously as finger is kept on the key
//keydown-- activates on down travel
//key up -- activates on release the key

//for this case we need to pass the event as an argument
//so that we can check which key event ocurred
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
