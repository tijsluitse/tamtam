'use strict';

var contact = (function() {

	var form = function() {
		
		var contactform = document.getElementById('contactForm'),
			validateMessage = document.getElementById('validateMessage'),
			email = document.getElementById('email'),
			inputs = document.querySelectorAll('.required'); 	

		contactform.addEventListener("submit", function(event){  
		
			// Loop through all input fields
			Array.prototype.forEach.call(inputs, function (input) { 
				
				// When input value is invalid, validation text is shown and feedback is hidden. 
				// Prevent default to take over regular form behaviour
				if (!input.value) {	
					event.preventDefault();					
					document.getElementById(input.id + 'Val').classList.add('show');
					document.getElementById(input.id + 'Feedback').classList.remove('show');	
					validateMessage.classList.add('show');
				} 
				
				// When input value is valid in the required fields, validation text is hidden and positive feedback is shown.
				// Form can be submitted
				if (input.value) {
					document.getElementById(input.id + 'Val').classList.remove('show');
					document.getElementById(input.id + 'Feedback').classList.add('show');	
					validateMessage.classList.remove('show');
				} 

			});

        });

	};

	return {
		form: form
	}

})();
