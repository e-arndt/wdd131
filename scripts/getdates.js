const yearSpan = document.querySelector('#currentYear');
const updateTime = document.querySelector('#lastModified');
const formatDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "medium"

});
const currentDate = new Date();
yearSpan.innerText = currentDate.getFullYear();
updateTime.innerText = (formatDate.format(currentDate));


