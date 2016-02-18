$(document).ready(function($) {

	// Clearing and re-populating the search box appropriately on focus/blur
	$('search_box').on({
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

	// One of the radio buttons are clicked to change the search type
    $('input[type=radio][name=search_type]').change(function(event) {
    	var search_type = this.value === 'title' ? 'title' : 'ISBN';
    	$('search_box').val('Search by ' + search_type);
    });

    // Login functionality not part of prototype, so I'm going to leave it out for now.
    // // Login link is clicked, show login popup
    // $('a#login').click(function(event) {
    // 	$('div#login_popup').css('display','block');
    // 	$('div#fade').css('display','block');
    // });
    // // Login close is clicked, close login popup
    // $('a#login_close').click(function(event) {
    //     $('div#login_popup').css('display','none');
    //     $('div#fade').css('display','none');    
    // });

    // Register link is clicked, show register popup
    $('a#register').click(function(event) {
    	$('div#register_popup').css('display','block');
    	$('div#fade').css('display','block');    
    });

    // Register close is clicked, close register popup
    $('a#register_close').click(function(event) {
    	$('div#register_popup').css('display','none');
    	$('div#fade').css('display','none');    
    });

    // Go to search results page. Search functionality not implemented yet.
    $('button#search_button').click(function(event) {
		window.location.href = "search_results.html";    
	});
});