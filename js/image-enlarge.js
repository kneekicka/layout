(function(){
	//Getting image to enlarge
	var images = document.getElementsByClassName("img-enlarge");
	var screenWidth = screen.width;

	//Looping through the array of images
	if(screenWidth >= 768){
		for (var i=0; i<images.length; i++){
		    images[i].addEventListener('click', imageEnlarge);
		}
	}	

	//Image enlargement function
	function imageEnlarge(){
		
		//Getting the large image path
		var imgPath = this.src,
			dotPos = imgPath.lastIndexOf("."),
			extStr = "-lg" + imgPath.slice(dotPos),
			largeImgPath = imgPath.slice(0, dotPos) + extStr;

		//Creating large image
		var largeImg = document.createElement("img");
			largeImg.src=largeImgPath;
			largeImg.classList.add("img-lg");

		//Getting guarantee block where we're going to place our large image	
		var guaranteeBlock = document.getElementsByClassName("guarantee"),
			smallImg = document.getElementsByClassName("img-enlarge");

		guaranteeBlock[0].appendChild(largeImg);
		smallImg[0].classList.add("hidden");
		largeImg.addEventListener("click", destroyLargeImage);

		//Destroying large image after a click on it
		function destroyLargeImage(){
			guaranteeBlock[0].removeChild(largeImg);
			smallImg[0].classList.remove("hidden");
		}
	}
})();