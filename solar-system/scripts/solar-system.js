// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.getElementById("lastModified").innerHTML = document.lastModified;

const currentDate = new Date();
const yearSpan = document.querySelector('#currentYear');

yearSpan.innerText = currentDate.getFullYear();



const ssObjects = [
	{
	    name: "Sun",
        class: "G2 V Star",
	    location: "Center of Solar System",
	    circum: "2,715,396",
        distance: "0",
	    temp: "10,000+",
        moons: "None",
        rings: "None",
	    imageUrl: "images/sun.webp"
    },
	{
	    name: "Mercury",
        class: "Terrestrial Planet",
	    location: "1st from Sun",
        circum: "9525.31",
	    distance: "36,000,000",
	    temp: "333",
        moons: "None",
        rings: "None",
	    imageUrl: "images/mercury.webp"
	},
    {
	    name: "Venus",
        class: "Terrestrial Planet",
	    location: "2st from Sun",
        circum: "23,627",
	    distance: "67,429,000",
	    temp: "867",
        moons: "None",
        rings: "None",
	    imageUrl: "images/venus.webp"
	},
	{
        name: "Earth",
        class: "Terrestrial Planet",
        location: "3rd from Sun",
        circum: "24,901",
        distance: "93,000,000",
        temp: "59",
        moons: "1",
        rings: "None",
        imageUrl: "images/earth.webp"
    },
    {
        name: "Mars",
        class: "Terrestrial Planet",
        location: "4th from Sun",
        circum: "13,262",
        distance: "141,600,000",
        temp: "-85",
        moons: "2",
        rings: "None",
        imageUrl: "images/mars.webp"
    },
	{
        name: "Ceres",
        class: "Dwarf Planet",
        location: "Main Asteroid Belt",
        circum: "1859.82",
        distance: "257,000,000",
        temp: "-28",
        moons: "None",
        rings: "None",
        imageUrl: "images/ceres.webp"
    },
	{
        name: "Jupiter",
        class: "Gas Giant Planet",
        location: "5th from Sun",
        circum: "272,946",
        distance: "483,682,810",
        temp: "-166",
        moons: "95",
        rings: "4 main",
        imageUrl: "images/jupiter.webp"
    },
    {
        name: "Saturn",
        class: "Gas Giant Planet",
        location: "6th from Sun",
        circum: "227,349",
        distance: "890,800,000",
        temp: "-288.4",
        moons: "146",
        rings: "7 main",
        imageUrl: "images/saturn.webp"
    },
    {
        name: "Uranus",
        class: "Ice Giant Planet",
        location: "7th from Sun",
        circum: "99,786",
        distance: "1,817,200,000",
        temp: "-320",
        moons: "28",
        rings: "13",
        imageUrl: "images/uranus.webp"
    },
    {
        name: "Neptune",
        class: "Ice Giant Planet",
        location: "8th from Sun",
        circum: "96,685",
        distance: "2,778,400,000",
        temp: "-353",
        moons: "16",
        rings: "5 main",
        imageUrl: "images/neptune.webp"
    },
    {
        name: "Pluto",
        class: "Dwarf Planet",
        location: "Kuiper Belt",
        circum: "4,639.38",
        distance: "3,670,050,000",
        temp: "-387",
        moons: "5",
        rings: "None",
        imageUrl: "images/pluto.webp"
    },
    {
        name: "Earth's Moon",
        class: "Planetary Satellite",
        location: "238,900 miles from Earth",
        circum: "6,783.5",
        distance: "93,000,000",
        temp: "-243.4 - 224.6",
        moons: "0",
        rings: "None",
        imageUrl: "images/earthsmoon.webp"
    },
    {
        name: "Io",
        class: "Planetary Satellite",
        location: "262,094 miles from Jupiter",
        circum: "7,111.9",
        distance: "483,682,810",
        temp: "-262",
        moons: "0",
        rings: "None",
        imageUrl: "images/io.webp"
    },
    {
        name: "Titan",
        class: "Planetary Satellite",
        location: "759,231.7 miles from Saturn",
        circum: "10,053.1",
        distance: "890,800,000",
        temp: "-290.2",
        moons: "0",
        rings: "None",
        imageUrl: "images/titanmoon.webp"
    },
    {
        name: "Triton",
        class: "Planetary Satellite",
        location: "220,500 miles from Neptune",
        circum: "5,277.88",
        distance: "2,778,400,000",
        temp: "-391",
        moons: "0",
        rings: "None",
        imageUrl: "images/tritonmoon.webp"
    },
	
	// Add more temple objects here...
  ];



buildDataCard(ssObjects);


const homeLink = document.querySelector("#home");
const oldTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const smallTemplesLink = document.querySelector("#smallTemples");



homeLink.addEventListener("click", () => {
	buildDataCard(ssObjects);
	document.querySelector("header > h2").innerHTML = "Home";
	removeActive();
	homeLink.setAttribute("class", "active");
});

oldTemplesLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter((object) => parseInt(object.dedicated.substring(0,4)) < 1900));
	document.querySelector("header > h2").innerHTML = "Temples Built Before 1900";
	removeActive();
	oldTemplesLink.setAttribute("class", "active");
});

newTemplesLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter((object) => parseInt(object.dedicated.substring(0,4)) > 2000));
	document.querySelector("header > h2").innerHTML = "Temples Built After 2000";
	removeActive();
	newTemplesLink.setAttribute("class", "active");
});

largeTemplesLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter(object => object.area > 90000));
	document.querySelector("header > h2").innerHTML = "Temples over 90,000 sq ft";
	removeActive();
	largeTemplesLink.setAttribute("class", "active");
});

smallTemplesLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter(object => object.area < 10000));
	document.querySelector("header > h2").innerHTML = "Temples under 10,000 sq ft";
	removeActive();
	smallTemplesLink.setAttribute("class", "active");
});

function removeActive() {
	homeLink.removeAttribute("class");
	oldTemplesLink.removeAttribute("class");
	newTemplesLink.removeAttribute("class");
	largeTemplesLink.removeAttribute("class");
	smallTemplesLink.removeAttribute("class");
}


function buildDataCard(filtered) {
	document.querySelector(".pic-grid").innerHTML = "";
	filtered.forEach(object => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
        let type = document.createElement("p");
		let location = document.createElement("p");
		let size = document.createElement("p");
        let dist = document.createElement("p");
        let temp = document.createElement("p");
        let moon = document.createElement("p");
		let ring = document.createElement("p");
		let pic = document.createElement("img");

		name.textContent = object.name;
        type.innerHTML = `<span class="label">Classification:</span> ${object.class}`;
		location.innerHTML = `<span class="label">Location:</span> ${object.location}`;
		size.innerHTML = `<span class="label">Circumference:</span> ${object.circum} miles`;
		dist.innerHTML = `<span class="label">Distance from Sun:</span> ${object.distance} miles`;
        temp.innerHTML = `<span class="label">Average Temperature:</span> ${object.temp} °F`;
        moon.innerHTML = `<span class="label">Number of Moons:</span> ${object.moons}`;
        ring.innerHTML = `<span class="label">Number of Rings:</span> ${object.rings}`;
		pic.setAttribute("src", object.imageUrl);
		pic.setAttribute("alt", `${object.name} Temple Picture`);
		pic.setAttribute("loading", "lazy");
		pic.setAttribute("width", "340");


		card.appendChild(pic);
		card.appendChild(name);
        card.appendChild(type);
		card.appendChild(location);
		card.appendChild(size);
		card.appendChild(dist);
        card.appendChild(temp);
        card.appendChild(moon);
        card.appendChild(ring);
		
		document.querySelector(".pic-grid").appendChild(card);
	});
}

