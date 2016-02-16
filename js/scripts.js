$(document).ready(function($) {
	$(text_search_box).on({
		focus: function(event) {
        	if (event.target.value === 'Search') {
        		event.target.value = '';
        	}
    	},
    	blur: function(event) {
        	if (event.target.value === '') {
        		event.target.value = 'Search';
        	}
    	}
    });
});