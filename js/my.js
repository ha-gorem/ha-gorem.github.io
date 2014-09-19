jQuery(document).ready(function ($) {
    
    /* SET PARAMETERS */
    var change_img_time = 5000;	
    var transition_speed = 300;
    
    var simpleSlideshow = $("#exampleSlider"),
        listItems = simpleSlideshow.children('li'),
        listLen = listItems.length,
        i = 0,
		
        changeList = function () {
		
			listItems.eq(i).fadeOut(transition_speed, function () {
				i += 1;
				if (i === listLen) {
					i = 0;
				}
				listItems.eq(i).fadeIn(transition_speed);
			});

        };
		
    listItems.not(':first').hide();
    var runs = setInterval(changeList, change_img_time);
    
	$('#exampleSlider').hover(function(){
		clearInterval(runs);
	}, function(){
		changeList();
	});	    
	
});