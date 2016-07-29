'use strict';

var recent = (function() {

	var feed = function() {	

		// Instagram API call with micro librarie Aja.js
		aja()
			.url('https://api.instagram.com/v1/users/51742197/media/recent/?access_token=51742197.76a62ec.63353e8b15c44cedab200a69bc695453')
		    .type('jsonp')
		    .cache('false')
		    .on('success', function(data){	
		    	
		    	var data = data.data;
		   
		   		// Reduces data object with only caption, comments and images
		    	data = _.map(data, function(photoInfo){
		    		return _.pick(photoInfo, 'caption', 'comments', 'images');
		    	});

		    	// When the data object is fully received, the data elements are send to the HTML with Transparency
		    	if (data.length < 1) {		    		
		    		console.log("Problems with retrieving data from Instagram.");
		    	} else {
		    		var directives = {			      			       			        	
			        	photoImage: {
			        		src: function(params) {
			        			return this.images.low_resolution.url;
			        		}			        	
			        	},
			        	photoCaption: {
			        		text: function(params) {
			        			return this.caption.text;
			        		}
			        	},
			        	photoTags: {
			        		text: function(params) {
			        			return this.comments.tags;
			        		}
			        	}			        	
					}

					// Directory of data elements
					var instaFeed = document.getElementById('instaFeed');
					Transparency.render(instaFeed, data, directives);

		    	}

		    })

		.go();

	};

	return {
		feed: feed
	}

})();
