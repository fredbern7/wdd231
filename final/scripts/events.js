const eventContainer = document.querySelector('.events-grid');

async function getEvent() {
    try {
        const response = await fetch('data/events.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const events = await response.json();
        events.forEach(event => {
            createEventCard(event);
        });
    } catch (error) {
        console.error('Error fetching events:', error);
        if (eventContainer) {
            eventContainer.innerHTML = `
                <p class="italic gray">
                    Error occurred when loading events...
                </p>`;
        }
    }
}

function createEventCard(event) {
    const card = document.createElement('article');
    card.setAttribute('class', 'event-card');

    card.innerHTML = `
        <div class="event-date-badge">
            <span class="event-month">${event.month}</span>
            <span class="event-day">${event.day}</span>
        </div>
        <div class="event-details">
            <span class="event-type ${event.category}">${event.type}</span>
            <h3>${event.title}</h3>
            <p class="event-meta">${event.location} &bull; ${event.time}</p>
            <p class="event-description">
                ${event.description}
            </p>
            <a href="${event.linkUrl}" class="event-link">${event.linkText} &rarr;</a>
        </div>
    `;

    eventContainer.appendChild(card);
}

getEvent();



