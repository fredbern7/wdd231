
const message = document.querySelector("#message");

const lastVisit = localStorage.getItem("visit-date");
const currentTime = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = currentTime - Number(lastVisit);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor(timeDifference / millisecondsPerDay);

    if (timeDifference < millisecondsPerDay) {
        message.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

localStorage.setItem("visit-date", currentTime);