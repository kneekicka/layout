(function(){
	//Getting elements for equipment slider
	var sliderEq = document.querySelectorAll(".equipment-slider img"),
		arrowsEq = document.querySelectorAll(".info-slider.equipment .arrow"),

	//Getting elements for products slider
		sliderPr = document.querySelectorAll(".products-slider img"),
		arrowsPr = document.querySelectorAll(".info-slider.products .arrow");

	//Our slider function
	function infoSliding(elems, arrows){
		for(var i = 0; i < arrows.length; i++){
			arrows[i].addEventListener("click", changeImg)
		}	

		//Changing image
		function changeImg(){
			if(this.classList.contains("up")){
				for(var i = 0; i < elems.length; i++){
					var el = elems[i];
					if(el.classList.contains("active")){
						var nextElem = ++i;
						if(nextElem<elems.length){
							el.classList.remove("active");
							el.classList.add("hide");
							elems[nextElem].classList.remove("hide");
							elems[nextElem].classList.add("active");
						}
					}
				}
			} else {
				for(var i = elems.length-1; i>0; i--){
					var el = elems[i];
					if(el.classList.contains("active")){
						var nextElem = --i;
						if(nextElem>=0){
							el.classList.remove("active");
							el.classList.add("hide");
							elems[nextElem].classList.remove("hide");
							elems[nextElem].classList.add("active");
						}
					}
				}			
			}
		}				
	};

	//Launching sliders
	infoSliding(sliderEq, arrowsEq);
	infoSliding(sliderPr, arrowsPr);

})();