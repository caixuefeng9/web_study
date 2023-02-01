let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/images.jfif') {
		myImage.setAttribute('src', 'images/images-1.jfif');
	} else {
		myImage.setAttribute('src', 'images/images.jfif');
	}
}

let myButton = document.querySelector('button');

function setUserName() {
	let myName = prompt('请输入你的名字。');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Liuyifei 太漂亮了，' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Liuyifei 太漂亮了，' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

/*
document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});
*/