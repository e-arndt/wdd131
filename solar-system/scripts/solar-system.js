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
 const userWeight = "";
 const num = "";


const ssObjects = [
	{
        id: 1,
	    name: "Sun",
        class: "G2 V Star",
	    location: "Center of Solar System",
	    circum: 2715396,
        distance: "0",
	    temp: "10,000+",
        moons: "None",
        rings: "None",
        calc: 27.072,
	    imageUrl: "images/sun.webp"
    },
	{
        id: 2,
	    name: "Mercury",
        class: "Terrestrial Planet",
	    location: "1st from Sun",
        circum: 9525.31,
	    distance: "36,000,000",
	    temp: "333",
        moons: "None",
        rings: "None",
        calc: .378,
	    imageUrl: "images/mercury.webp"
	},
    {
        id: 3,
	    name: "Venus",
        class: "Terrestrial Planet",
	    location: "2st from Sun",
        circum: 23627,
	    distance: "67,429,000",
	    temp: "867",
        moons: "None",
        rings: "None",
        calc: .907,
	    imageUrl: "images/venus.webp"
	},
	{
        id: 4,
        name: "Earth",
        class: "Terrestrial Planet",
        location: "3rd from Sun",
        circum: 24901,
        distance: "93,000,000",
        temp: "59",
        moons: "1",
        rings: "None",
        calc: 1,
        imageUrl: "images/earth.webp"
    },
    {
        id: 5,
        name: "Moon",
        class: "Planetary Satellite",
        location: "238,900 miles from Earth",
        circum: 6783.5,
        distance: "93,000,000",
        temp: "-243.4 - 224.6",
        moons: "0",
        rings: "None",
        calc: .166,
        imageUrl: "images/earthsmoon.webp"
    },
    {
        id: 6,
        name: "Mars",
        class: "Terrestrial Planet",
        location: "4th from Sun",
        circum: 13262,
        distance: "141,600,000",
        temp: "-85",
        moons: "2",
        rings: "None",
        calc: .377,
        imageUrl: "images/mars.webp"
    },
	{
        id: 7,
        name: "Ceres",
        class: "Dwarf Planet",
        location: "Main Asteroid Belt",
        circum: 1859.82,
        distance: "257,000,000",
        temp: "-28",
        moons: "None",
        rings: "None",
        calc: .0275,
        imageUrl: "images/ceres.webp"
    },
	{
        id: 8,
        name: "Jupiter",
        class: "Gas Giant Planet",
        location: "5th from Sun",
        circum: 272946,
        distance: "483,682,810",
        temp: "-166",
        moons: "95",
        rings: "4 main",
        calc: 2.528,
        imageUrl: "images/jupiter.webp"
    },
    {
        id: 9,
        name: "Io",
        class: "Planetary Satellite",
        location: "262,094 miles from Jupiter",
        circum: 7111.9,
        distance: "483,682,810",
        temp: "-262",
        moons: "0",
        rings: "None",
        calc: .184,
        imageUrl: "images/io.webp"
    },
    {
        id: 10,
        name: "Saturn",
        class: "Gas Giant Planet",
        location: "6th from Sun",
        circum: 227349,
        distance: "890,800,000",
        temp: "-288.4",
        moons: "146",
        rings: "7 main",
        calc: 1.064,
        imageUrl: "images/saturn.webp"
    },
    {
        id: 11,
        name: "Titan",
        class: "Planetary Satellite",
        location: "759,231.7 miles from Saturn",
        circum: 10053.1,
        distance: "890,800,000",
        temp: "-290.2",
        moons: "0",
        rings: "None",
        calc: .1376,
        imageUrl: "images/titanmoon.webp"
    },
    {
        id: 12,
        name: "Uranus",
        class: "Ice Giant Planet",
        location: "7th from Sun",
        circum: 99786,
        distance: "1,817,200,000",
        temp: "-320",
        moons: "28",
        rings: "13",
        calc: .889,
        imageUrl: "images/uranus.webp"
    },
    {
        id: 13,
        name: "Neptune",
        class: "Ice Giant Planet",
        location: "8th from Sun",
        circum: 96685,
        distance: "2,778,400,000",
        temp: "-353",
        moons: "16",
        rings: "5 main",
        calc: 1.125,
        imageUrl: "images/neptune.webp"
    },
    {
        id: 14,
        name: "Triton",
        class: "Planetary Satellite",
        location: "220,500 miles from Neptune",
        circum: 5277.88,
        distance: "2,778,400,000",
        temp: "-391",
        moons: "0",
        rings: "None",
        calc: .0795,
        imageUrl: "images/tritonmoon.webp"
    },
    {
        id: 15,
        name: "Pluto",
        class: "Dwarf Planet",
        location: "Kuiper Belt",
        circum: 4639.38,
        distance: "3,670,050,000",
        temp: "-387",
        moons: "5",
        rings: "None",
        calc: .067,
        imageUrl: "images/pluto.webp"
    },
    
	
	// Add more temple objects here...
  ];



buildDataCard(ssObjects);


const allLink = document.querySelector("#all");
const planetsLink = document.querySelector("#planets");
const moonsLink = document.querySelector("#moons");
const largeBodiesLink = document.querySelector("#largeBodies");
const smallBodiesLink = document.querySelector("#smallBodies");



allLink.addEventListener("click", () => {
	buildDataCard(ssObjects);
	document.querySelector("header > h2").innerHTML = "All Solar System Objects";
	removeActive();
	allLink.setAttribute("class", "active");
});

planetsLink.addEventListener("click", () => {
    buildDataCard(ssObjects.filter(ssobject => ssobject.class.includes("Planet", 6)));
	document.querySelector("header > h2").innerHTML = "Planetary Objects";
	removeActive();
	planetsLink.setAttribute("class", "active");
});

moonsLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter(ssobject => ssobject.class.includes("Satellite", 6)));
	document.querySelector("header > h2").innerHTML = "Planetary Satellites";
	removeActive();
	moonsLink.setAttribute("class", "active");
});

largeBodiesLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter(ssobject => ssobject.circum > 90000));
	document.querySelector("header > h2").innerHTML = "Over 90K Mile Circumference";
	removeActive();
	largeBodiesLink.setAttribute("class", "active");
});

smallBodiesLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter(ssobject => ssobject.circum < 15000));
	document.querySelector("header > h2").innerHTML = "Under 15K Mile Circumference";
	removeActive();
	smallBodiesLink.setAttribute("class", "active");
});

function removeActive() {
	allLink.removeAttribute("class");
	planetsLink.removeAttribute("class");
	moonsLink.removeAttribute("class");
	largeBodiesLink.removeAttribute("class");
	smallBodiesLink.removeAttribute("class");
}


function buildDataCard(filtered) {
	document.querySelector(".pic-grid").innerHTML = "";
	filtered.forEach(ssobject => {
		let card = document.createElement("section");
		let name = document.createElement("button");
        let type = document.createElement("p");
		let location = document.createElement("p");
		let size = document.createElement("p");
        let dist = document.createElement("p");
        let temp = document.createElement("p");
        let moon = document.createElement("p");
		let ring = document.createElement("p");
        let code = document.createElement("p");
		let pic = document.createElement("img");

        code.textContent = ssobject.id;
		name.textContent = ssobject.name;
        type.innerHTML = `<span class="label">Classification:</span> ${ssobject.class}`;
		location.innerHTML = `<span class="label">Location:</span> ${ssobject.location}`;
		size.innerHTML = `<span class="label">Circumference:</span> ${ssobject.circum} miles`;
		dist.innerHTML = `<span class="label">Distance from Sun:</span> ${ssobject.distance} miles`;
        temp.innerHTML = `<span class="label">Average Temperature:</span> ${ssobject.temp} °F`;
        moon.innerHTML = `<span class="label">Number of Moons:</span> ${ssobject.moons}`;
        ring.innerHTML = `<span class="label">Number of Rings:</span> ${ssobject.rings}`;
		pic.setAttribute("src", ssobject.imageUrl);
		pic.setAttribute("alt", `${ssobject.name} Temple Picture`);
		pic.setAttribute("loading", "lazy");
		pic.setAttribute("width", "340");
        name.setAttribute("id", `${ssobject.name}`);
        name.setAttribute("onclick", `saveID(${ssobject.id})`);
        name.setAttribute("title", `${ssobject.name} Selection Button`);


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




function buildResultCard(filtered) {
	document.querySelector(".result-grid").innerHTML = "";
	filtered.forEach(object => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
        let earthWeight = document.createElement("p");
        let weigh = document.createElement("p");
        let type = document.createElement("p");
		let location = document.createElement("p");
		let size = document.createElement("p");
        let dist = document.createElement("p");
        let temp = document.createElement("p");
        let moon = document.createElement("p");
		let ring = document.createElement("p");
        let code = document.createElement("p");
		let pic = document.createElement("img");

        code.textContent = object.id;
		name.textContent = object.name;
        const userName = localStorage.getItem('myName');
        const userWeight = localStorage.getItem('myWeight');
        const gravity = object.calc;
        const calcWeight = (userWeight * gravity);
        const newWeight = calcWeight.toFixed(2);
        earthWeight.innerHTML = `<span class="label">${userName} on Earth you weigh:</span> ${userWeight}<span class="label">lbs</span>`;
        weigh.innerHTML = `<span class="label">On ${object.name} you'd weight:</span> ${newWeight}<span class="label">lbs</span>`;
        type.innerHTML = `<span class="label">Classification:</span> ${object.class}`;
		location.innerHTML = `<span class="label">Location:</span> ${object.location}`;
		size.innerHTML = `<span class="label">Circumference:</span> ${object.circum} miles`;
		dist.innerHTML = `<span class="label">Distance from Sun:</span> ${object.distance} miles`;
        temp.innerHTML = `<span class="label">Average Temperature:</span> ${object.temp} °F`;
        moon.innerHTML = `<span class="label">Number of Moons:</span> ${object.moons}`;
        ring.innerHTML = `<span class="label">Number of Rings:</span> ${object.rings}`;
		pic.setAttribute("src", object.imageUrl);
		pic.setAttribute("alt", `${object.name} Planet Picture`);
		pic.setAttribute("loading", "lazy");
		pic.setAttribute("width", "340");
        name.setAttribute("id", `${object.name}`);
        name.setAttribute("onclick", `saveInput(${object.id})`);


		card.appendChild(pic);
		card.appendChild(name);
        card.appendChild(earthWeight);
        card.appendChild(weigh);
        card.appendChild(type);
		card.appendChild(location);
		card.appendChild(size);
		card.appendChild(dist);
        card.appendChild(temp);
        card.appendChild(moon);
        card.appendChild(ring);
		
		document.querySelector(".result-grid").appendChild(card);
	});
}


function saveName() {
    const userName = document.getElementById('nameInput').value;

    if (userName != "") {
        const fixName = userName.substr(0,12);
        localStorage.setItem('myName', fixName);
        document.getElementById("nameBtn").innerHTML = "Name Saved";
        document.getElementById("nameBtn").style.background = "green";
        document.getElementById("nameBtn").style.color = "ghostwhite";
    }
    else {
        document.getElementById("nameBtn").style.color = "brown";
        document.getElementById("nameBtn").innerHTML = "Enter Name";
        setTimeout(function(){
            document.getElementById("nameBtn").style.color = "black";
            document.getElementById("nameBtn").innerHTML = "Save Name";
        }, 2000);
    }
}


function saveWeight() {
    const userWeight = document.getElementById('weightInput').value;
    
    if (userWeight != "") {
        const earthWeight = Number(userWeight).toFixed(2);
        localStorage.setItem('myWeight', earthWeight);
        document.getElementById("weightBtn").innerHTML = "Weight Saved";
        document.getElementById("weightBtn").style.background = "green";
        document.getElementById("weightBtn").style.color = "ghostwhite";

        location.href = "./solar-system.html";
    }
    else {
        document.getElementById("weightBtn").style.color = "brown";
        document.getElementById("weightBtn").innerHTML = "Enter Weight";
        setTimeout(function(){
            document.getElementById("weightBtn").style.color = "black";
            document.getElementById("weightBtn").innerHTML = "Save Weight";
        }, 2000);
    }
}

function saveID(planet) {
    const myObject = planet;
    localStorage.setItem('objectID', myObject);
    location.href = "./solar-system-result.html";
    
}


function displayResult() {
    const myID = Number(localStorage.getItem('objectID'));
	buildResultCard(ssObjects.filter(ssobject => ssobject.id == myID));
    document.querySelector("header > h2").innerHTML = "Your Solar System Object";
}

largeBodiesLink.addEventListener("click", () => {
	buildDataCard(ssObjects.filter(ssobject => ssobject.circum > 90000));
	document.querySelector("header > h2").innerHTML = "Over 90K Mile Circumference";
	removeActive();
	largeBodiesLink.setAttribute("class", "active");
});

