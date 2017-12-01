
var buttonElements = document.getElementsByClassName('button');

console.log(buttonElements);

for (var i = 0 ; i < 6 ; ++i) {
	alert(buttonElements.innerHTML = 'Hello!');
}