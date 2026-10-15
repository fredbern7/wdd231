const date = new Date();
document.getElementById("currentyear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

if (navButton && navLinks) {
  navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
  });
}