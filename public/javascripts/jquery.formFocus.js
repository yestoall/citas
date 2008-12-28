// jquery.form-focus.js
// ---------------------------
// Sets the initial form focus to the element
// specified in the jQuery selector.
//
//  @author:    ian oxley [ijoxley at gmail dot com]
//  @date:      2008-05-19
//
// example: $('form > input:first').formFocus();
//
(function(jQuery) {
	jQuery.fn.formFocus = function() {
	if (this.length === 1) {
		// using the 'each' function doesn't really make sense
		// as we can only focus on one element so selectors that
		// target multiple elements won't really work
		return this.each(function() {
			var $current = jQuery(this);
			// check for text input or textarea tags as we will need to check
			// their value before deciding whether to give them focus
			var isTextInput = function() {
				if ($current.attr('type')) {
					return $current.attr('type').match(/^(text|password)$/i);
				}
				return $current.get(0).tagName.toLowerCase() === 'textarea';
			}
			var initialValue = $current.val();
			if (isTextInput() && initialValue !== '') {
				return;
			}
			$current.get(0).focus();
		});
	}
	return this;	
};
})(jQuery);