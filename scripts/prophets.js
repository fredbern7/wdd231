const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const fetchData = async (url) => {
  try {
    const response = await fetch(url); // Wait for the fetch to complete
    const data = await response.json(); // Wait for the response to be converted to JSON
    console.log(data); // Output the fetched data
    const prophets = data.prophets;
    displayProphets(prophets);
  } catch (error) {
    console.error("Error fetching data:", error); // Handle any errors
  }
};

fetchData(url);

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        console.log(prophet.name);
        const card = document.createElement("div");
        const name = document.createElement("h2");
        const image = document.createElement('img');
        const dateOfBirth = document.createElement("p");
        const placeOfBirth = document.createElement("p");

        card.setAttribute("class", "image-container");
        name.innerText = `${prophet.name} ${prophet.lastname}`;
        image.setAttribute("src",prophet.imageurl);
        image.setAttribute("alt",prophet.name);
        dateOfBirth.innerText = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.innerText = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(name);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(image);

        document.getElementById("cards").appendChild(card);

    })
}