(function ($) {
	'use strict';
	$(window).on('load resize', function () {
		$('[data-no-img-download-overlay="1"]').remove();
		$('img:not(#wpadminbar *)').each(function (index, element) {
			var $element = $(element);
			var parent = $element.parent();
			if (parent.css('position') !== 'fixed' && parent.css('position') !== 'absolute') {
				parent.css('position', 'relative');
			}
			var overlay = $('<div data-no-img-download-overlay="1"></div>');
			var eTop = $element.position().top;
			var eLeft = $element.position().left;
			var eRight = $element.position().right;
			var eBottom = $element.position().bottom;
			if ($element.css('position') == 'absolute') {
				eTop = $element.css('top');
				eLeft = $element.css('left');
				eRight = $element.css('right');
				eBottom = $element.css('bottom');
			}
			overlay.css({
				top: eTop,
				left: eLeft,
				right: eRight,
				bottom: eBottom,
				position: 'absolute',
				width: $element.outerWidth(),
				height: $element.outerHeight(),
				marginTop: $element.css('margin-top'),
				marginRight: $element.css('margin-right'),
				marginLeft: $element.css('margin-left'),
				marginBottom: $element.css('margin-bottom'),
				paddingTop: $element.css('padding-top'),
				paddingRight: $element.css('padding-right'),
				paddingLeft: $element.css('padding-left'),
				paddingBottom: $element.css('padding-bottom'),
				backgroundColor: 'black',
				opacity: '0'
			});

			overlay.insertAfter(element);
		});
	});
})(jQuery);
