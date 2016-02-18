$(document).ready(function($) {
	$(search_box).on({
		focus: function(event) {
        	if (event.target.value.startsWith('Search')) {
        		event.target.value = '';
        	}
    	},
    	blur: function(event) {
        	if (event.target.value === '') {
        		var search_type = $('input#title_radio').prop('checked') ? 'title' : 'ISBN';
        		event.target.value = 'Search by ' + search_type;
        	}
    	}
    });

    $('input[type=radio][name=search_type]').change(function(event) {
    	var search_type = this.value === 'title' ? 'title' : 'ISBN';
    	$(search_box).val('Search by ' + search_type);
    });

    $('a#login').click(function(event) {
    	$('div#login_popup').css('display','block');
    	$('div#fade').css('display','block');
    });

    $('a#register').click(function(event) {
    	$('div#register_popup').css('display','block');
    	$('div#fade').css('display','block');    
    });

    $('a#register_close').click(function(event) {
    	$('div#register_popup').css('display','none');
    	$('div#fade').css('display','none');    
    });

    $('a#login_close').click(function(event) {
    	$('div#login_popup').css('display','none');
    	$('div#fade').css('display','none');    
    });

    $(search_button).click(function(event) {
    	
    });
});