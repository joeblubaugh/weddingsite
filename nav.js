(function($) { 
  var nav = $('.nav');
  var section = $($('.section')[0]);
  var navPosition = nav.position();
  var didScroll = false;

  $(window).scroll(function() {
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
        didScroll = false;
        // Adjust nav based on position.
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= navPosition.top) {
          // Make sure position style is set on nav.
          if (!nav.hasClass('top')) {
            nav.addClass('top');
            section.addClass('spaced');
          }
        } else {
          // Clear style on nav.
          if (nav.hasClass('top')) {
            nav.removeClass('top');
            section.removeClass('spaced');
          }
        }
      }
  }, 100);

})(jQuery);
