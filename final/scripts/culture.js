import { cultures } from '../data/cultures.mjs';

const cultureContainer = document.querySelector('.pillars-grid');

cultures.forEach(culture => {
    createCultureCard(culture);
});

function createCultureCard(culture) {
    const card = document.createElement('article');
    card.setAttribute('class', 'pillar-card');

    card.innerHTML = `
        <div class="pillar-icon" aria-hidden="true">${culture.icon}</div>
        <h3>${culture.title}</h3>
        <p>
            ${culture.description}
        </p>
    `;

    if (cultureContainer) {
        cultureContainer.appendChild(card);
    }
}

getCulture();