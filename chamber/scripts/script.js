const date = new Date();
document.getElementById("currentyear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navLinks.classList.toggle('show');
});

const lat = "6.8844";
const lon = "158.2150";
const key = "d019a56f9fa7a3b80a8ffe5a2f2ee4ba";
const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

// current weather
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


const weather_cards = document.querySelector('#weather_cards');

async function apiFetch() {
  try {
    const response = await fetch(weather);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
async function forcastApiFetch() {
  try {
    const response = await fetch(forecast);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForcast(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data){
  console.log("hello");
  myTown.innerHTML=data.name;
  myDescription.innerHTML=data.weather[0].description;
  myTemperature.innerHTML=`${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('SRC', iconsrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
}

function displayForcast(data){
  const weatherCard = document.querySelector("#weather-card");
  weatherCard.innerHTML = "";

  const day = data.list.filter(item => item.dt_txt.includes("12:00:00"));
  const days = day.slice(0, 4);
  days.forEach(day => {
      const date = new Date(day.dt * 1000);
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      
      const temp = Math.round(day.main.temp);
      const iconCode = day.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
      const description = day.weather[0].description;

      const card = document.createElement("div");
      card.classList.add("forecast-card");
      card.innerHTML = `
          <h3>${formattedDate}</h3>
          <img src="${iconUrl}" alt="${description}">
          <p>${temp}&deg;C</p>
          <p>${description}</p>
      `;
      
      weatherCard.appendChild(card);
  });
}

apiFetch();
forcastApiFetch()