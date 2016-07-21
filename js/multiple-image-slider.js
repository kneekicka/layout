(function(){
	//Getting our sliders
	var sliders = [];
	for(var i = 1; i <= 6; i++){
		sliders.push(document.getElementsByClassName("parall"+ i));
	}

	function multipleImageSlider(element, interval){
		var length = element[0].children.length;
		var curImage = -1;

		function swapImage(){
			curImage +=1;
			var nextImage = curImage +1;
			if (curImage == length){
				curImage = 0;
				nextImage = 1;
			}
			if(nextImage == length){
				nextImage = 0;
			}
			element[0].children[curImage].classList.remove("block");
			element[0].children[curImage].classList.add("hide");
			element[0].children[nextImage].classList.remove("hide");
			element[0].children[nextImage].classList.add("block");


		}
		setInterval(function(){swapImage()}, interval);
	}

	//Launching our sliders
	for(var i = 0; i < 6; i++ ){
		var int = 4000;
		multipleImageSlider(sliders[i], int + i * 2000);
	}
})();