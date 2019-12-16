var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

//Adding event listeners
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Adding stuff to existing items
for (var i=0; i < list.length; i++) {
	list[i].addEventListener("click", toggleClass);
	createDelButton(list[i]);
}

//Functions
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var list = document.createElement("li");
	list.appendChild(document.createTextNode(input.value));
	ul.appendChild(list);
	list.addEventListener("click", toggleClass);
	createDelButton(list);
	input.value = "";
}

function createDelButton(list) {
	var delButton = document.createElement("Button");
	var delText = document.createTextNode("Delete");
	delButton.appendChild(delText);
	list.appendChild(delButton);
	delButton.addEventListener("click", function() {
		list.parentNode.removeChild(list);
	});
}

function toggleClass() {
	this.classList.toggle("done");
}
