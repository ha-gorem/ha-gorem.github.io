jQuery(document).ready(function ($) {

    $('#banner-fade').bjqs({
        height      : 479,
        width       : 720,
        responsive  : true
    });
	
	jQuery(document).ready(function () {
	
	jQuery(".menu-trigger").click(function() {
		
		jQuery(".nav-menu").slideToggle(400, function() {
			jQuery(this).toggleClass("nav-expanded").css('display', '');
		});
	});
});
});

