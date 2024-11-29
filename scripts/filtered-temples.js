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



const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, USA",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, USA",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, USA",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Seattle Washington",
		location: "Bellevue, Washington, USA",
		dedicated: "1980, November, 21",
		area: 110000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-15695-main.jpg"
	  },
	  {
		templeName: "Columbia River Washington",
		location: "Richland, Washington, USA",
		dedicated: "2001, November, 18",
		area: 16880,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/columbia-river-washington-temple/columbia-river-washington-temple-39505-main.jpg"
	  },
	  {
		templeName: "Moses Lake Washington",
		location: "Moses Lake, Washington, USA",
		dedicated: "2023, September, 17",
		area: 28933,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/moses-lake-washington-temple/moses-lake-washington-temple-39148-main.jpg"
	  },
	  {
		templeName: "Spokane Washington",
		location: "Spokane, Washington, USA",
		dedicated: "1999, August, 23",
		area: 10700,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/spokane-washington-temple/spokane-washington-temple-30260-main.jpg"
	  },
	  {
		templeName: "Vancouver Washington",
		location: "Camas, Washington, USA",
		dedicated: "N/A",
		area: 43000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/vancouver-washington-temple/vancouver-washington-temple-52259-main.jpg"
	  },
	  {
		templeName: "Oakland California",
		location: "Oakland, California, USA",
		dedicated: "19 November, 1964",
		area: 80157,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-5006.jpg"
	  },
	  {
		templeName: "San Diego California",
		location: "San Diego, California, USA",
		dedicated: "30 April, 1993",
		area: 72000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
	  },
	  {
		templeName: "Tacoma Washington",
		location: "Federal Way, Washington, USA",
		dedicated: "N/A",
		area: 45000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/tacoma-washington-temple/tacoma-washington-temple-52820.jpg"
	  },
	// Add more temple objects here...
  ];


buildDataCard();


function buildDataCard() {
	temples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let pic = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
		pic.setAttribute("src", temple.imageUrl);
		pic.setAttribute("alt", `${temple.templeName} Temple Picture`);
		pic.setAttribute("loading", "lazy");
		pic.setAttribute("width", "330");
		// pic.setAttribute("height", "300");

		card.appendChild(pic);
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		
		document.querySelector(".pic-grid").appendChild(card);
	});
}

