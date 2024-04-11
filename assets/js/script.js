'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});












// experment
const openModalBtn = document.getElementById('btn');
const modal = document.getElementById('modal-GPT');
const closeBtn = document.getElementsByClassName('close-GPT')[0];

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});

// experment






// pay 2
const openModalBtn2 = document.getElementById('btn2');
const modal2 = document.getElementById('modal-GPT');
const closeBtn2 = document.getElementsByClassName('close-GPT')[0];

openModalBtn2.addEventListener('click', () => {
  modal2.classList.add('show');
});

closeBtn2.addEventListener('click', () => {
  modal2.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.classList.remove('show');
  }
});
// pay 2



// pay 3 
const openModalBtn3 = document.getElementById('btn3');
const modal3 = document.getElementById('modal-GPT');
const closeBtn3 = document.getElementsByClassName('close-GPT')[0];

openModalBtn3.addEventListener('click', () => {
  modal3.classList.add('show');
});

closeBtn3.addEventListener('click', () => {
  modal3.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.classList.remove('show');
  }
});
// pay 3





// pay 4
const openModalBtn4 = document.getElementById('btn4');
const modal4 = document.getElementById('modal-GPT');
const closeBtn4 = document.getElementsByClassName('close-GPT')[0];

openModalBtn4.addEventListener('click', () => {
  modal4.classList.add('show');
});

closeBtn4.addEventListener('click', () => {
  modal3.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target === modal4) {
    modal4.classList.remove('show');
  }
});
// pay 4


// pay 5
const openModalBtn5 = document.getElementById('btn5');
const modal5 = document.getElementById('modal-GPT');
const closeBtn5 = document.getElementsByClassName('close-GPT')[0];

openModalBtn5.addEventListener('click', () => {
  modal5.classList.add('show');
});

closeBtn5.addEventListener('click', () => {
  modal5.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target === modal5) {
    modal5.classList.remove('show');
  }
});
// pay 5