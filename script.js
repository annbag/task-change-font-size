const btnIncrease = document.querySelector('button.bigger');
const btnDecrease = document.querySelector('button.smaller');
const text = document.querySelector('p');

let textSize = 16;

function textIncrease() {
	textSize++;
	text.style.fontSize = textSize + "px"; 
}
function textDecrease() {
	textSize--;
	text.style.fontSize = textSize + "px"; 
}

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease); 