'use strict';

const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const list = document.getElementById('list');

add.addEventListener('click', createElement);

function createElement() {
	let value = input.value;
	
	if (value === '') {
		return;
	}

	input.value = '';
	
	let item = document.createElement('li');
	item.className = 'list__item';
	list.append(item);

	const circle = document.createElement('span');
	circle.className = 'list__circle';
	item.append(circle);

	let text = document.createElement('div');
	text.className = 'list__text';
	text.innerHTML = value;
	item.append(text);

	deleteElement(item);
};

input.addEventListener("keypress", (keyPressed) => {
	const keyEnter = 13;
	if (keyPressed.keyCode == keyEnter) {
		createElement();
	}
});

function deleteElement(element) {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		element.remove();
	})
};

clear.addEventListener("click", () => {
	list.innerHTML = "";
	localStorage.removeItem('list', list.innerHTML);
})
