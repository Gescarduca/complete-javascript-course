'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
//we need the query selector all to get all elements otherwise
//we would just get the first one
//this creates a node list of the modals
const btnOpenModal= document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for(let i = 0; i<btnOpenModal.length;i++)
    btnOpenModal[i].addEventListener('click', function(){
        console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        
    });

