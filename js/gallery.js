function startGallery(){
	baguetteBox.run('.gallery',{
		captions: function(element) {
			return element.getElementsByTagName('img')[0].alt;
		},
		buttons: 'auto',
		animation: 'fadeIn',
	});
}
