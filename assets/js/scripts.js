
	
(function ($) {

    "use strict";

	// JQUERY LIGHT BOX
	
	if ( $.isFunction($.fn.fluidbox) ) {
		$('a').fluidbox();
	}
		
	$('a[href="#"]').on('click', function(event){
		return;
	});
		
	// Circular Progress Bar
	
	var isAnimated = false;
	
	
})(jQuery);

