/**
 * @file
 * Slick slider settings.
 *
 */
(function ($, Drupal) {

  /**
   * Trigger slick for slideshow components.
   */
  Drupal.behaviors.runSlick = {
    attach: function (context, settings) {

      // Find all slideshows on page...
      $(".slideshow", context).each(function (index) {

        var totalSlides = $(this).find(".slick-hero figure").length;

        // Slick hero
        $(this).find(".slick-hero").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
          fade: true,
          asNavFor: $(this).find(".slick-hero-nav-thumbnails")
        });

        //  Slick navigation 
        $(this).find(".slick-hero-nav-thumbnails").slick({
          slidesToShow: totalSlides,
          slidesToScroll: 1,
          asNavFor: $(this).find(".slick-hero"),
          arrows: false,
          dots: false,
          focusOnSelect: true
        });

        // Slick with dots
        $(this).find(".slick-with-dots").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          fade: true
        });
      })
        // All slides same height.
        .on('setPosition', function (event, slick) {
          slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });
    }
  };

})(jQuery, Drupal);
