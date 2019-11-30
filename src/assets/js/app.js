'use strict';

const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const clearBtn = document.getElementById('clear');
const list = document.getElementById('list');

addBtn.addEventListener('click', createElement);

function createElement() {
	let value = input.value;
	if (value === '') {
		return;
	}
	input.value = ''; //To clear input field
	
	const item = document.createElement('li');
	item.className = 'list__item';
	list.append(item);

	const circle = document.createElement('span');
	circle.className = 'list__circle';
	item.append(circle);

	const text = document.createElement('div');
	text.className = 'list__text';
	text.innerHTML = value;
	item.append(text);

	deleteElement(item);
};

//adding an element by pressing Enter
input.addEventListener("keypress", (keyPressed) => {
	const keyEnter = 13;
	if (keyPressed.keyCode == keyEnter) {
		createElement();
	}
});

//deleting an element
function deleteElement(element) {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		element.remove();
	})
};

//deleting elements by button "Clear all"
clearBtn.addEventListener("click", () => {
	list.innerHTML = "";
	localStorage.removeItem('list', list.innerHTML);
})
