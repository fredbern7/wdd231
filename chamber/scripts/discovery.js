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
        <img src="images/${x.image_link}.webp" alt="${x.name}" loading="lazy">
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