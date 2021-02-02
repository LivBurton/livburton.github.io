const mainNav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function () {
  mainNav.classList.toggle('show');
});

mainNav.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) {
    mainNav.classList.remove('show');
  }
});

// ------TYPEWRITER EFFECT--------------

let i = 0;
const txtOne = `Take a look at some of the projects that I've been working on...`;
const speedOne = 50;

function typeWriterOne() {
  if (i < txtOne.length) {
    document.getElementById('first-line').innerHTML += txtOne.charAt(i);
    i++;
    setTimeout(typeWriterOne, speedOne);
  }
}

let j = 0;
const txtTwo = '...and find out a bit about me!';
const speedTwo = 100;

function typeWriterTwo() {
  if (j < txtTwo.length) {
    document.getElementById('second-line').innerHTML += txtTwo.charAt(j);
    j++;
    setTimeout(typeWriterTwo, speedTwo);
  }
}

typeWriterOne();
setTimeout(typeWriterTwo, 4200);
