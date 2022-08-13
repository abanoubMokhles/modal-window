'use strict';

/*==============
  App Controls
==============*/
const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

/*===================
  show Modal window
===================*/
showModalBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

/*===================
  hide Modal window
===================*/
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/*=====================================
  hide Modal window by close button
=====================================*/
closeBtn.addEventListener('click', hideModal);

/*==================================================
  hide Modal window by clicking outside the modal
===================================================*/
overlay.addEventListener('click', hideModal);

/*=====================================
  hide Modal window using Esc key
=====================================*/
document.addEventListener('keydown', function (evt) {
  const keyPressed = evt.key;
  if (!modal.classList.contains('hidden') && keyPressed === 'Escape') {
    hideModal();
  }
});
