'use strict';

var launcher = (function() {

	// Launches the routing and fires navigation animation used in total website
	var init = function() {		
		sections.init();
		animations.navigation();
		recent.feed();
	}

	return {
		init: init
	};

})();

// Start 
launcher.init();
