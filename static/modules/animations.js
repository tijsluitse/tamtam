'use strict';

var animations = (function() {
	
	var navigation = function() {
	 	
	 	var menuClick = document.getElementById('menuButton'),
	 		menuItems = document.querySelectorAll('.menuItem'),
	 		menu = document.querySelector('nav'),
	 		bars = document.querySelector('.bar');
	 	
	 	// When clicked on menu button, slide in menu and animate menubutton to cross
	 	menuClick.addEventListener('click', function() {
	 		menu.classList.toggle('slideIn');
	 		bars.classList.toggle('animate');
	 	});

	 	// Loops through all navigation items and adds a click event
	 	// When user clicks menu slides back and menu animates back to normal state
	 	Array.prototype.forEach.call(menuItems, function (item) { 
	 		item.addEventListener('click', function() {
		 		menu.classList.toggle('slideIn');
		 		bars.classList.toggle('animate');
		 	});
	 	});	 	

	};

	return {
		navigation: navigation
	}

})();