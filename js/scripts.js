jQuery(".menu-trigger").click(Function() {
									  
		jQuery(".nav-menu").slideToggle(400, Function() {
				jQuery(this).toggleClass("nav-expanded").css('display', '');
			});
});