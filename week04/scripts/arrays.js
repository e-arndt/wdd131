// const steps = ["one", "two", "three"];
// const listTemplate = (step) => {
//     return `<li>${step}</li>`};
// const stepsHtml = steps.map(listTemplate);
// document.querySelector("#myList").innerHTML = stepsHtml.join();


const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return `<li>${points}</li>`;
}
let gpaPoints = grades.map(convertGradeToPoints);
document.querySelector("#myList").innerHTML = gpaPoints.join("");