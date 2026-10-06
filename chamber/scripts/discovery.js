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
        <img src="images/${x.image_link}.webp" alt="${x.name}">
        <h2>${x.name}</h2>
        <p>${x.description}</p>
        <p>${x.location}</p>
    `;

    container.appendChild(card);
}