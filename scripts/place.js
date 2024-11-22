const temperature = 79;
const wind = 12;


document.getElementById("lastModified").innerHTML = document.lastModified;

const currentDate = new Date();
const yearSpan = document.querySelector('#currentYear');

yearSpan.innerText = currentDate.getFullYear();





const calculateWindChill = function(T,V) {
    return 35.74 + (0.6215*T) - (35.75*(Math.pow(V,0.16))) + (0.4275*T)*(Math.pow(V,0.16));
}

const windChill = calculateWindChill(temperature,wind);

if (temperature <= 50 && wind > 3) {
    document.getElementById("temp").innerHTML = temperature + "°F";
    document.getElementById("chill").innerHTML = windChill.toFixed(2) + "°F";
    document.getElementById("wind").innerHTML = wind + " mph";
} else {
    document.getElementById("temp").innerHTML = temperature + "°F";
    document.getElementById("wind").innerHTML = wind + " mph";
    document.getElementById("chill").innerHTML = " -N/A-";
}




