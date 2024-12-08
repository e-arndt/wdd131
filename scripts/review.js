const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
let productName = Number(localStorage.getItem("prodname-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Your first Product Review, Welcome!`;
    numVisits++;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

if (productName !== "") {
	productDisplay.textContent = productName;
} else {
	visitsDisplay.textContent = `None`;
}