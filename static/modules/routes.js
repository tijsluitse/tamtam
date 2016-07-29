'use strict';

var sections = (function() {

		var homeMenu = document.querySelector('nav li:first-of-type'),
			contactMenu = document.querySelector('nav li:last-of-type');

		var init = function() {

			// When click on hash, toggle sections with hash and launch page features
			routie({
			    'homepage': function() {		    	    				    	
			    	sections.toggle(this.path);
			    	homeMenu.classList.add('current');			    						   		  
			    	recent.feed();			    	
			    },
			    'contact': function() {				        	    				   
			    	sections.toggle(this.path);		
			    	contactMenu.classList.add('current');		    			    
			    	contact.form();
			    },
			    'succes': function() {
			    	sections.toggle(this.path);
			    }
			});
		};

		var toggle = function(hashName) {

			// Declare all sections and get active section by hashname
			var section = document.getElementById(hashName),
				allSections = document.querySelectorAll('section');

			// Loops through all sections and hides them
			for (var i = 0; i < allSections.length; i++) {
				allSections[i].classList.remove('active');	
				homeMenu.classList.remove('current');		
				contactMenu.classList.remove('current');		
			};

			// Shows active section
			section.classList.toggle('active');

		};

	return {
		init: init,
		toggle: toggle
	}

})();
