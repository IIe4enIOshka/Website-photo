var blah = document.body.querySelectorAll('.item');
for (var x = 0; x < blah.length; x++) {
	blah[x].addEventListener("contextmenu", function (event) {
		event.preventDefault();
	});
}