(function(){
	var menuBtn = document.getElementById("menu-btn"),
		menu = document.getElementById("menu-responsive");
	menuBtn.addEventListener('click', toggleMenu);

	function toggleMenu(){
		menu.classList.toggle("expand");
	}
})();