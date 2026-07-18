const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const activeGrid = document.querySelector("#grid");
const activeList = document.querySelector("#list");
const display = document.querySelector("#contact-container");
const list_heading = document.querySelector("#list-headings");
const contact_heading = document.querySelector(".bold-contact");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
	activeGrid.classList.add("active-btn");
	activeList.classList.remove("active-btn");
	list_heading.classList.add("hide");
	list_heading.classList.remove("display");
	contact_heading.classList.add("reveal");
	contact_heading.classList.remove("hide");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
	activeList.classList.add("active-btn");
	activeGrid.classList.remove("active-btn");
	list_heading.classList.add("display");
	list_heading.classList.remove("hide");
	contact_heading.classList.add("hide");
	contact_heading.classList.remove("reveal");
});

const url = 'data/members.json';

const fetchData = async (url) => {
  try {
    const response = await fetch(url); // Wait for the fetch to complete
    const data = await response.json(); // Wait for the response to be converted to JSON
    console.log(data); // Output the fetched data
    const members = data.members;
    displayMembers(members);
  } catch (error) {
    console.error("Error fetching data:", error); // Handle any errors
  }
};

fetchData(url);

function displayMembers(members) {
    members.forEach(member => {

        const section = document.createElement('section');
		section.classList.add('contact');
		section.id = `contact-${members.member}`;
		section.innerHTML = `
                <h2>${member.name}</h2>

                <span class="business-tag-line">
                    ${member.tag}
                </span>

                <img class="contact-img" src="images/${member.img}" alt="${member.name}">

                <p class="email">
                    <span class="bold-contact">EMAIL:</span> 
                    ${member.email}
                </p>

                <p class="phone">
                    <span class="bold-contact">PHONE:</span> 
                    ${member.phone}
                </p>

                <p class="business-link">
                    <span class="bold-contact">URL:</span>
                    <a href="http://www.${member.url}">${member.url}</a>
                </p>
           </section>
		`;



        display.appendChild(section);

    })
}
