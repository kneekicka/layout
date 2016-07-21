(function(){
	//Getting tabs and tabs' switchers
	var customerItems = document.getElementsByClassName("customers-tabs-item"),
		customerCont = document.getElementsByClassName("customer-cont"),
		screenWidth = screen.width;

	//Making according depending on screen size
		
	if(screenWidth <= 991){
		for(var i = 0; i<customerItems.length; i++){
			customerItems[i].appendChild(customerCont[i]);
		}
	}

	//Going through our tabs' switchers and assigning click event
	for (var i=0; i<customerItems.length; i++){
	    customerItems[i].addEventListener('click', tabActivate);
	}

	//Tab activation function
	function tabActivate(){
		for (var i=0; i<customerItems.length; i++){
			customerItems[i].classList.remove("active");
			if(customerItems[i] == this){
				for(var j=0; j<customerCont.length; j++){
					customerCont[j].classList.remove("block");	
					customerCont[j].classList.add("hide");
				}
				customerCont[i].classList.remove("hide");
				customerCont[i].classList.add("block");			
			}
		}
		var className = "active";
		this.classList.toggle(className);
	}
})();