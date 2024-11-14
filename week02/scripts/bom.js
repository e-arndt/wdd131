const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');

const listItem = document.createElement('li');
const delBtn = document.createElement('button');

listItem.textContent = input.value;
delBtn.textContent = '❌';
listItem.append(delBtn);
list.append(listItem);

