document.getElementById("lastModified").innerHTML = document.lastModified;

const currentDate = new Date();
const yearSpan = document.querySelector('#currentYear');

yearSpan.innerText = currentDate.getFullYear();



const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

addButton.addEventListener('click', () => {
    if (input.value != '') {// check if input is not empty
    displayList(input.value); // then call function, pass it with value of the input
    chaptersArray.push(input.value); // push or add the chapter inputted to the array
    setChapterList(); // update localStorage with data from the new array
    input.value = ''; //clear the input from the user
    input.focus(); // Return focus back to the input box
}
});

function displayList(item) {
    const listItem = document.createElement('li');
    const delBtn = document.createElement('button');

    listItem.textContent = item;
    delBtn.textContent = '❌';
    delBtn.classList.add('delete');
    listItem.append(delBtn);
    list.append(listItem);
    delBtn.addEventListener('click', function () {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
    console.log('The code is not explained well enough to understand it.');
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];