


function a9_sl_sessionCacheUpdateHandler ($) {
	var browserWidth = $(window).width();
	var browserHeight = $(window).height();
	
	// Make a request to the session cache update handler in Gurupa
	$.post('/gp/product/sessionCacheUpdateHandler.html', 
		 { 'sessionCacheUpdateFlag' : '1',
		   'pageType'               : 'Gateway',
		   'browserWidth'           : browserWidth,
		   'browserHeight'          : browserHeight,
		   'token'                  : "fVoboEDsYMjWCjzTN8sCOR/u51oKDxT4hpDZYx8Y86Q="
		 },
		 function(data) {}
	);
}

if(typeof amznJQ !== 'undefined') {
	amznJQ.onReady("jQuery", function () {
		if (typeof window.usePageContentReady !== 'undefined' && window.usePageContentReady) {
			amznJQ.available('PageContentReady', function () {a9_sl_sessionCacheUpdateHandler(jQuery);});
		} else {
			jQuery(window).load(a9_sl_sessionCacheUpdateHandler(jQuery));
		}
	});
} else {
	P.when('A', 'jQuery').execute(function (A, $) {
		A.on('PageContentReady', function () {a9_sl_sessionCacheUpdateHandler($);});
	});
}

