const DAYS = 6;
const LIMIT = 30;
let studentReport = [30, 42, 33, 64, 27, 37, 14];
let text = "";

console.log("Hello, World!");

text += "for loop method" + "<br>";
document.getElementById("demo").innerHTML = text;

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] <= LIMIT) {
        text += "Student Report is " + studentReport[i] + "<br>";
        
        document.getElementById("demo").innerHTML = text;
    }
    
}
text += "<br>" + ".forEach loop method" + "<br>";
document.getElementById("demo").innerHTML = text;

studentReport.forEach(checkScore);



function checkScore(reportItem) {
    
    if (reportItem <= LIMIT) {
        text += "Student Report is " + reportItem + "<br>";
        document.getElementById("demo").innerHTML = text;
    }

}