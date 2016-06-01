$(function() {
    $('.ga-event').click(function(e) {
		if (typeof(ga) != "undefined") {
			ga('send', {
			  hitType: 'event',
			  eventCategory: $(this).data('ga-category') || 'event',
			  eventAction: $(this).data('ga-action') || 'click',
			  eventLabel: $(this).data('ga-label') || 'click'
			});
		}
	});
});
/*
ga('send', {
  hitType: 'event',
  eventCategory: 'Photography',
  eventAction: 'Click',
  eventLabel: 'Click'
});
*/