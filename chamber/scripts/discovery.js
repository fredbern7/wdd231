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

import { places } from '../data/places.mjs';

const container = document.querySelector('#allplaces');

function createCard(x) {
    const card = document.createElement('div');
    card.innerHTML = `
        <img class="lazy" src="images/placeholder.webp" data-src="images/${x.image_link}.webp" alt="${x.name}" width="300" height="200" loading='lazy'>
        <h2>${x.name}</h2>
        <p>${x.description}</p>
        <div>${x.address}</div>
        <button id="learn-more">Learn more</button>
    `;
    container.appendChild(card);
}

places.forEach(x => {
    createCard(x);
});

const lazyImages = document.querySelectorAll("img.lazy");

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        
        const tempImage = new Image();
        tempImage.src = image.dataset.src;
        
        tempImage.onload = () => {
          image.src = image.dataset.src;
          image.classList.add("lazy-loaded");
        };

        imageObserver.unobserve(image);
      }
    });
  }, {
    rootMargin: "0px 0px 50px 0px"
  });

  lazyImages.forEach(image => {
    imageObserver.observe(image);
  });
} else {
  lazyImages.forEach(image => {
    image.src = image.dataset.src;
    image.classList.add("lazy-loaded");
  });
}

const message = document.querySelector("#message");

const lastVisit = localStorage.getItem("visit-date");
const currentTime = Date.now();

if (!lastVisit) {
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = currentTime - Number(lastVisit);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor(timeDifference / millisecondsPerDay);

    if (timeDifference < millisecondsPerDay) {
        messageContainer.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        messageContainer.textContent = "You last visited 1 day ago.";
    } else {
        messageContainer.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

localStorage.setItem("visit-date", currentTime);