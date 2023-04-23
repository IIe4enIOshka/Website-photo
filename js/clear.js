function clear(){
	var blah = document.body.querySelectorAll('.item');
	for (var x = 0; x < blah.length; x++) {
		blah[x].classList.remove('windowOpen');
	}
}