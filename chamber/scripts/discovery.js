const date = new Date();
document.getElementById("currentyear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navLinks.classList.toggle('show');
});


import { places } from '../data/places.mjs';

console.log(places);

// 1. Define container first so it's available when createCard runs
const container = document.querySelector('#allplaces');

places.forEach(x => {
    createCard(x);
});

function createCard(x) {
    console.log(x.name);

    const card = document.createElement('div');
    card.innerHTML = `
        <img class="lazy" src="images/${x.image_link}.webp" alt="${x.name}" width="300" height="200" loading="lazy">
        <h2>${x.name}</h2>
        <p>${x.description}</p>

        <div>${x.address}</div>
        
        <button id="learn-more">Learn more</b>
    `;

    container.appendChild(card);
}

let visit = Number(window.localStorage.getItem("visits")) || 0;

if (numVisits !== 0) {
    numVisits++;
} else {
    numVisits = 1;
}

window.localStorage.setItem("visits", numVisits);

const visitsDisplay = document.querySelector("#visits");
if (visitsDisplay) {
    visitsDisplay.textContent = numVisits;
}

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    }, {
      rootMargin: "0px 0px 50px 0px" // Starts loading slightly before the image comes into view
    });

    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for very old browsers
    lazyImages.forEach(image => {
      image.src = image.dataset.src;
    });
  }
});